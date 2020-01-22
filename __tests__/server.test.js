const request = require('supertest');
const express = require('../server');
const items = require('../models/items');
const carts = require('../models/carts');

const { server, app } = express;

describe('Server tests', () => {
  // Kill Express instance after all tests are done
  afterAll(async done => {
    await server.close();
    return done();
  });
  describe('itemController tests', () => {
    it('GET /api/items should return items', done => {
      request(app)
        .get('/api/items')
        .expect(200)
        .then(res => {
          expect(res.body).toStrictEqual(items);
          return done();
        })
        .catch(err => {
          return done(err);
        });
    });
  });

  describe('cartController tests', () => {
    // Helper functions
    const clearCartArr = carts => {
      while (carts.length) {
        carts.pop();
      }
    };
    const createCart = async () => {
      return await request(app).post('/api/cart');
    };
    const addItem = async (cartID, itemID) => {
      return await request(app)
        .patch(`/api/cart/${cartID}`)
        .send({
          itemID,
        })
        .set('Accept', 'application/json');
    };
    const getTotal = async cartID => {
      return await request(app).get(`/api/cart/${cartID}`);
    };
    // Makes sure cart store is emptied after each test
    afterEach(() => {
      clearCartArr(carts);
    });
    it('POST /api/cart should generate a new cart', async done => {
      try {
        const {
          statusCode: statusCodeOne,
          body: { payload: cartIDOne },
        } = await createCart();
        expect(statusCodeOne).toBe(200);
        expect(cartIDOne).toBe(1);
        expect(carts.length).toBe(1);
        const {
          statusCode: statusCodeTwo,
          body: { payload: cartIDTwo },
        } = await createCart();
        expect(statusCodeTwo).toBe(200);
        expect(cartIDTwo).toBe(2);
        expect(carts.length).toBe(2);
        return done();
      } catch (err) {
        return done(err);
      }
    });
    it('Should return the correct total price after adding items', async done => {
      try {
        const testCases = ['ABCDABAA', 'CCCCCCC', 'ABCD'];
        const expectedPrices = [32.4, 7.25, 15.4];
        for (let i = 0; i < testCases.length; i += 1) {
          // Create a new cart for each test case
          const {
            body: { payload: cartID },
          } = await createCart();
          // Adding all the items to the cart
          for (const itemID of testCases[i]) {
            await addItem(cartID, itemID);
          }
          const {
            body: { payload: total },
          } = await getTotal(cartID);
          expect(total).toBe(expectedPrices[i]);
        }
        return done();
      } catch (err) {
        return done(err);
      }
    });
  });
});
