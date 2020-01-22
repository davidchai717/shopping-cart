import React from 'react';
import Item from '../components/Item';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CartContainer unit tests', () => {
  it('Should only display action buttions if cart ID has been initialized', () => {
    const mock = jest.fn();
    const withCartID = shallow(
      <Item
        data={{
          description: 'Test',
          unit_price: 0,
          volume_discounts: [],
          itemID: 'A',
          cartID: 1,
        }}
        addItem={mock}
        setTotal={mock}
      />
    );
    expect(withCartID.find('.item-actions')).toHaveLength(1);
    const noCartID = shallow(
      <Item
        data={{
          description: 'Test',
          unit_price: 0,
          volume_discounts: [],
          itemID: 'A',
          cartID: null,
        }}
        addItem={mock}
        setTotal={mock}
      />
    );
    expect(noCartID.find('.item-actions')).toHaveLength(0);
  });
});
