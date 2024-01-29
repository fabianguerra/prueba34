import { Character } from "../domain/Rick";
import { RickRepository } from "../domain/RickRepository";

export function getRick(
  repository: RickRepository,

): Promise<Character[]> {
  return repository.getRick();
}
