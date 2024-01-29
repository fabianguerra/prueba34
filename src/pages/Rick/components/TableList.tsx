import { Character } from "../../../domain/rick/domain/Rick";
import { useRicksContext } from "../Context/RickContext";


function TableList() {
    const {rick} = useRicksContext()

  return (
    <>
    <table>
    <tbody>

    </tbody>
    <thead>
       {
        rick.map((rick: Character, index: number) => {
            return (
              <tr key={index}>
                <td className="p-2">{rick.name}</td>
                <td className="p-2">{rick.gender === "Male" ? "Hombre":"Mujer"}</td>
              </tr>
            );
          })
       }
        <tr>

        </tr>
    </thead>
    </table>
    </>
  );
}

export default TableList;
