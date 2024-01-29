import React, { useContext, useEffect, useState } from "react";
import { RickRepository } from "../../../domain/rick/domain/RickRepository";
import { getRick } from "../../../domain/rick/infraestructure/getRick";
import { Character } from "../../../domain/rick/domain/Rick";

export interface ContextState {
  getlisRick: () => void;
  setRick: React.Dispatch<
    React.SetStateAction<Character[]>
  >;
  rick:Character[]
}
export const RicksContext = React.createContext({} as ContextState);

export const RicksContextProvider = ({
  children,
  repository,
}: React.PropsWithChildren<{ repository: RickRepository }>) => {

  const [rick,setRick] = useState<Character[]>([])


  async function getlisRick() {
    
    const users = await getRick(repository);
    setRick(users)
  }

  useEffect(() => {
    getlisRick();
  }, []);


  const storage: ContextState = {
    getlisRick,
    rick,
    setRick
  };

  return (
    <RicksContext.Provider value={storage}>{children}</RicksContext.Provider>
  );
};

export const useRicksContext = () => useContext(RicksContext);
