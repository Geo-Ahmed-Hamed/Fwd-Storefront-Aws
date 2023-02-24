import { User, UserStore } from '../../models/user';

const store = new UserStore()

describe("User Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a showUserOrder method', () => {
    expect(store.showUserOrder).toBeDefined();
  });

  it('should have a login method', () => {
    expect(store.authenticate).toBeDefined();
  });

  it('create method should create a user', async () => {
    const result = await store.create({
        firstname: "Ahmed",
        lastname: "Hamed",
        password: "12345"
    });
    expect(result.id).toEqual(1);
    expect(result.firstname).toEqual("Ahmed");
    expect(result.lastname).toEqual("Hamed");
  });

  it('index method should return a list of users', async () => {
    const result = await store.index();
    expect(result[0].id).toEqual(1);
    expect(result[0].firstname).toEqual("Ahmed");
    expect(result[0].lastname).toEqual("Hamed");
  });

  it('show method should return the correct user', async () => {
    const result = await store.show(1);
    expect(result.id).toEqual(1);
    expect(result.firstname).toEqual("Ahmed");
    expect(result.lastname).toEqual("Hamed");
  });

  it('authonticate method should return null with wrong firstname and password', async () => {
    const result = await store.authenticate('hatem', 'rwerr');
    expect(result).toEqual(null);
  });

  it('showUserOrder method should return empty if user does not have orders', async () => {
    const result = await store.showUserOrder(1);
    expect(result.length).toEqual(0);
  });


});