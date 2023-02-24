import request from 'supertest';
import port from '../../config'

const url = `http://localhost:${port}`;

describe("/products", () => {

  it("index returns status code 200", async () => {
    const res = await request(url)
    .get('/products')

    expect(res.statusCode).toEqual(200);
  })

  it("show returns status code 200", async () => {
    const res = await request(url)
    .get('/products/1')

    expect(res.statusCode).toEqual(200);
  })

  
  it("create returns status code 200", async () => {
    const res = await request(url)
    .post('/products')
    .send({name: "pepsi", price: 10})
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(200);
  })

})
