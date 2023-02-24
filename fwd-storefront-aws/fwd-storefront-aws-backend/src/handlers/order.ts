import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order'
import verifyAuthToken from '../middlewares/verifyAuthToken';


const store = new OrderStore()

const index = async (_req: Request, res: Response) => {
  try{
    const orders = await store.index()
    res.json(orders)
  } catch(err) {
    res.status(400)
    res.json(err)
  }
}

const create = async (req: Request, res: Response) => {
    try {
        const order: Order = {
            user_id: req.body.userId as unknown as number,
            isactive: true
        }

        const newOrder = await store.create(order)
        res.json(newOrder)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const complete = async (req: Request, res: Response) => {
  try {
      const order = await store.complete(req.body.userId as unknown as number)
      res.json(order)
  } catch(err) {
      res.status(400)
      res.json(err)
  }
}

const addProduct = async (_req: Request, res: Response) => {
    const order_id: number = _req.params.id as unknown as number
    const product_id: number = _req.body.productId as unknown as number
    const quantity: number = _req.body.quantity as unknown as number
  
    try {
      const addedProduct = await store.addProduct(quantity, order_id, product_id)
      res.json(addedProduct)
    } catch(err) {
      res.status(400)
      res.json(err)
    }
  } 

const ordersRoutes = (app: express.Application) => {
  app.get('/orders', verifyAuthToken, index)
  app.post('/orders', verifyAuthToken, create)
  app.post('/orders/:id/products', verifyAuthToken, addProduct)
  app.put('/orders/complete', verifyAuthToken, complete)
}

export default ordersRoutes;