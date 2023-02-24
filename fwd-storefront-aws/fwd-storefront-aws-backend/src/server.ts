import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import userRoutes from './handlers/user'
import productRoutes from './handlers/product'
import orderRoutes from './handlers/order'
import cors from 'cors';
import port from './config'

const app: express.Application = express()

app.use(bodyParser.json())
app.use(cors({ origin: '*'}));

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

userRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(port, function () {
    console.log(`starting app on: ${port}`)
})

export default app;
