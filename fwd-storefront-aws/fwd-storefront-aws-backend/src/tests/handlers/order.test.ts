import request from 'supertest';
import port from '../../config'

const url = `http://localhost:${port}`;

describe("/orders", () => {

  it("index returns status code 200", async () => {
    const res = await request(url)
    .get('/orders')
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(200);
  })
  
  it("create returns status code 200", async () => {
    const res = await request(url)
    .post('/orders')
    .send({userId: 1})
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(200);
  })


  it("add product returns status code 400 when user does not have order", async () => {
    const res = await request(url)
    .post('/orders/1/products')
    .send({id: 1, productId: 1, quantity: 10})
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(400);
  })

  it("complete returns status code 200", async () => {
    const res = await request(url)
    .put('/orders/complete')
    .send({userId: 1})
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(200);
  })

})
