import { Repository, EntityRepository } from "typeorm";
import { compliments } from "../entities/Compliment";

@EntityRepository(compliments)
class ComplimentsRepositories extends Repository<compliments> {}

export { ComplimentsRepositories };