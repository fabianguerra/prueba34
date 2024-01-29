import { Character } from "./Rick";


export interface RickRepository {
    getRick: () => Promise<Character[]>;
}
