import axios from "axios";
import { RickRepository } from "../domain/RickRepository";
import { Character } from "../domain/Rick";

export function ApiRick(): RickRepository {
  return {
    getRick,
  };
}

async function getRick(): Promise<Character[]> {
  debugger;
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return response.data.results
    console.log(response.data.results);
  } catch (error) {
    console.log("Error editar servicio" + error);
    throw Error("Hubo un error al realizar la consulta.");
  }
}
