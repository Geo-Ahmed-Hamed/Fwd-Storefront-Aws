// @ts-ignore
import client from "../database";

export type Order = {
    id?: Number,
    user_id: Number,
    isactive: Boolean
}

export type OrderProduct = {
  id?: Number, 
  order_id: Number, 
  product_id: Number, 
  quantity: Number
}

export class OrderStore{
    async index(): Promise<Order[]>{
        try {
            // @ts-ignore
            const conn = await client.connect();
            const sql = 'SELECT * FROM Orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`Cannot get orders ${error}`);
        }
    }
    
    async create(o: Order): Promise<Order> {
        try {
          const ordersql = 'SELECT * FROM Orders WHERE User_Id=($1)'
          //@ts-ignore
          const conn = await client.connect()
          const result = await conn.query(ordersql, [o.user_id])
          const order = result.rows[0]
          
          if (order !== undefined && order.isactive != false) {
            throw new Error(`Could not create order because there is an active order for this user`)
          }
    
          conn.release()
        } catch (err) {
          throw new Error(`${err}`)
        }

        try {
            const sql = 'INSERT INTO Orders (User_Id, IsActive) VALUES($1, $2) RETURNING *'
            // @ts-ignore
            const conn = await client.connect()
            const result = await conn.query(sql, [o.user_id, o.isactive])
            const order = result.rows[0]
            conn.release()
            return order
          } catch (err) {
              throw new Error(`Could not add new order ${o.id}. Error: ${err}`)
          }
      }

      async complete(userId: number): Promise<Order>{
        try {
          const sql = 'UPDATE Orders SET IsActive = false where User_Id = ($1) AND IsActive = true RETURNING *'
          //@ts-ignore
          const conn = await client.connect()
          const result = await conn.query(sql, [userId])
          const order = result.rows[0]
          conn.release()
          return order
        } catch (err) {
          throw new Error(`Could not change order status to complete for user ${userId} : ${err}`)
        }
      }

      async addProduct(quantity: number, orderId: number, productId: number): Promise<OrderProduct> {
        try {
          const ordersql = 'SELECT * FROM Orders WHERE id=($1)'
          //@ts-ignore
          const conn = await client.connect()
          const result = await conn.query(ordersql, [orderId])
          const order = result.rows[0]

          if (order.isactive != true) {
            throw new Error(`Could not add product ${productId} to order ${orderId} because order status is completed`)
          }
    
          conn.release()
        } catch (err) {
          throw new Error(`${err}`)
        }
    
        try {
          const sql = 'INSERT INTO Orders_Products (Quantity, Order_Id, Product_Id) VALUES($1, $2, $3) RETURNING *'
          //@ts-ignore
          const conn = await client.connect()
          const result = await conn.query(sql, [quantity, orderId, productId])
          const order = result.rows[0]
          conn.release()
          return order
        } catch (err) {
          throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
        }
      }
}