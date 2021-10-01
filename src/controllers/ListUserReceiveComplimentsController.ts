import { Request, Response } from "express"
import { compliments } from "../entities/Compliment";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiveComplimentsController {
    async handle(request: Request, response:Response){
        const { user_id } = request

        const ListUserReceiverComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await ListUserReceiverComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

 export { ListUserReceiveComplimentsController }