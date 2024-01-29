import { ApiRick } from "../../domain/rick/infraestructure/ApiRick";
import { RicksContextProvider } from "./Context/RickContext";
import TableList from "./components/TableList";

export default function RickMorty() {
  const repository = ApiRick();



  return (
    <RicksContextProvider repository={repository}>
      <>
     <TableList/>
      </>
    </RicksContextProvider>
  );
}
