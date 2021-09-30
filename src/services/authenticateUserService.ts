import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UserRepositories } from "../repositories/UserRepositories";
import { sign } from "jsonwebtoken";
import { Subject } from "typeorm/persistence/Subject";

    interface IAuthenticateRequest {
        email: string;
        password: string;
    }


    class AuthenticateUserService {

        async execute({email, password}: IAuthenticateRequest) {
            const userRepositories = getCustomRepository(UserRepositories);

            const user = await userRepositories.findOne({
                email
            });

            if(!user) {
                throw new Error("Email/Password incorrect")
            }

            const passwordMatch = await compare(password, user.password)

            if(!passwordMatch){
                throw new Error("Email/Password incorrect")
            }

            const token = sign({
                email: user.email
            }, "2417D1BBD2EF68D147EE5D5EB76DBE9787CF290A",
            {
            subject: user.id,
            expiresIn: "1d"
            }
        );
        return token;
    }
}


    export { AuthenticateUserService }