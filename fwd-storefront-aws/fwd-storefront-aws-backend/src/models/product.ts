// @ts-ignore
import client from "../database";

export type Product = {
    id?: Number,
    name: String,
    price: Number
}

export class ProductStore{
    async index(): Promise<Product[]>{
        try {
            // @ts-ignore
            const conn = await client.connect();
            const sql = 'SELECT * FROM Products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`Cannot get products ${error}`);
        }
    }

    async show(id: Number): Promise<Product> {
        try {
            const sql = 'SELECT * FROM Products WHERE id=($1)'
            // @ts-ignore
            const conn = await client.connect()
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find product ${id}. Error: ${err}`)
        }
      }
    
      async create(p: Product): Promise<Product> {
        try {
            const sql = 'INSERT INTO Products (Name, Price) VALUES($1, $2) RETURNING *'
            // @ts-ignore
            const conn = await client.connect()
            const result = await conn.query(sql, [p.name, p.price])
            const product = result.rows[0]
            conn.release()
            return product
          } catch (err) {
              throw new Error(`Could not add new product ${p.name}. Error: ${err}`)
          }
      }
}