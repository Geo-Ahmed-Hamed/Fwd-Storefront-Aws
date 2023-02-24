import request from 'supertest';
import port from '../../config'

const url = `http://localhost:${port}`;

describe("/users", () => {
  it("index returns status code 200", async () => {
    const res = await request(url)
    .get('/users')
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(200);
  })

  it("show returns status code 200", async () => {
    const res = await request(url)
    .get('/users/1')
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(200);
  })

  
  it("show user order returns status code 400 if he does not have order", async () => {
    const res = await request(url)
    .get('/users/1/order')
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(400);
  })

    
  it("create returns status code 200", async () => {
    const res = await request(url)
    .post('/users')
    .send({firstName: "hamed", lastName: "hassan", password: "12345"})
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpudWxsLCJpYXQiOjE2NzYxMDI5MDF9.h9eohx5VeaUq-rW6JTWXtq_3uY-vV5m5OBiPIo-4zgw');

    expect(res.statusCode).toEqual(200);
  })

  it("login returns status code 200", async () => {
    const res = await request(url)
    .post('/users/login')
    .send({firstName: "hamed", password: "12345"})

    expect(res.statusCode).toEqual(200);
  })
})
