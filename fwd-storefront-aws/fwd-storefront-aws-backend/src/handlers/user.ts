import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';
import verifyAuthToken from '../middlewares/verifyAuthToken';

type ProductDto ={
  name: String,
  price: Number,
  quantity: Number
}

interface UserOrderDto {
  orderId: Number;
  userId: Number;
  products: ProductDto[];
}

const store = new UserStore()

const index = async (_req: Request, res: Response) => {
  try{
    const users = await store.index()
    res.json(users)
  } catch(err) {
    res.status(400)
    res.json(err)
  }
}

const show = async (req: Request, res: Response) => {
  try{
    const user = await store.show(req.params.id as unknown as number)
    res.json(user)
  } catch(err) {
    res.status(400)
    res.json(err)
  }
}

const showUserOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id as unknown as number;
    const userOrder = await store.showUserOrder(userId)
    const userOrderDto : UserOrderDto = {
      orderId: userOrder[0].order_id,
      userId: userId,
      products: []
    };

    userOrder.forEach(element => {
      userOrderDto.products.push({name: element.product_name, price: element.product_price, quantity: element.quantity})
    });
    res.json(userOrderDto)
  } catch(err) {
    res.status(400)
    res.json(err)
  }
}

const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            password: req.body.password,
        }
        const newUser = await store.create(user)
        const token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.json(token)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const login = async (req: Request, res: Response) => {
  try {
      const u = await store.authenticate( req.body.firstName, req.body.password)
      var token = jwt.sign({ user: u }, process.env.TOKEN_SECRET as string);
      res.json(token)
  } catch(error) {
      res.status(401)
      res.json({ error })
  }
}

const userRoutes = (app: express.Application) => {
  app.get('/users',verifyAuthToken, index)
  app.get('/users/:id',verifyAuthToken, show)
  app.get('/users/:id/order',verifyAuthToken, showUserOrder)
  app.post('/users', create)
  app.post('/users/login', login)
}

export default userRoutes;