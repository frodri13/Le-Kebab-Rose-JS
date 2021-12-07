import Entree from "./options/Entree";
import Assiette from "./options/Assiette";

import { useContext } from "react";
import { ChoiceContext } from "../../context/ChoiceContext";

function Options() {
  const { choice, setChoice } = useContext(ChoiceContext);
  console.log(choice);

  switch (choice) {
    case "entree":
      return <Entree />;
      break;
    case "assiette":
      return <Assiette />;
      break;
    default:
      return <Entree />;
  }
}

export default Options;
