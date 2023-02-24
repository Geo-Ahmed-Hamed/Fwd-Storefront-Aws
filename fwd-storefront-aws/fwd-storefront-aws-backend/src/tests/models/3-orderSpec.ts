import { OrderStore } from '../../models/order';

const store = new OrderStore()

describe("Order Model", () => {

  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a complete method', () => {
    expect(store.complete).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a addProduct method', () => {
    expect(store.addProduct).toBeDefined();
  });

  it('create method should create an order', async () => {
    const result = await store.create({
        user_id: 1,
        isactive: true
    });
    expect(result.id).toEqual(1);
    expect(result.user_id).toEqual(1);
    expect(result.isactive).toEqual(true);
  });

  it('addproduct method should add product to user order', async () => {
    const result = await store.addProduct(5, 1, 1);
    expect(result.id).toEqual(1);
    expect(result.order_id).toEqual(1);
    expect(result.product_id).toEqual(1);
    expect(result.quantity).toEqual(5);
  });

  it('complete method should change order status to complete', async () => {
    const result = await store.complete(1);
    expect(result.id).toEqual(1);
    expect(result.user_id).toEqual(1);
    expect(result.isactive).toEqual(false);
  });

});