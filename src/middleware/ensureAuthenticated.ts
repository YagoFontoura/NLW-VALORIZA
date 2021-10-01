import { Request, Response, NextFunction} from "express";
import { verify  } from "jsonwebtoken";

interface IPayload {
        sub: string;
}

export function ensureAuthenticated (
    request: Request,
    response: Response,
    next: NextFunction
) {

    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }


    const [, token] = authToken.split(" ");

    try{
        const { sub } = verify(token,"2417D1BBD2EF68D147EE5D5EB76DBE9787CF290A") as IPayload;

        request.user_id = sub;
        return next();
    }catch (err) {
        return response.status(401).end();
    }


}