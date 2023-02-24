import { Request , Response} from "express";
import jwt from 'jsonwebtoken';

const verifyAuthToken = (req: Request, res: Response, next: Function) => {
    try {
        const token = req.headers.authorization
        if(token !== undefined){
            jwt.verify(token, process.env.TOKEN_SECRET as string)
    
            next()
        }
        else
            throw new Error();
    } catch (error) {
        res.status(401)
        res.json('Access denied, invalid token')
    }
}

export default verifyAuthToken;