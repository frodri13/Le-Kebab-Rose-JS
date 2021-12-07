import Entree from "./options/Entree";
import Assiette from "./options/Assiette";
import Boisson from "./options/Boisson";
import Burger from "./options/Burger";
import Dessert from "./options/Dessert";
import Panini from "./options/Panini";
import TexMex from "./options/TexMex";
import Sandwich from "./options/Sandwich";
import { useContext } from "react";
import { ChoiceContext } from "../../context/ChoiceContext";

function Options() {
  const { choice } = useContext(ChoiceContext);
  console.log(choice);

  switch (choice) {
    case "entree":
      return <Entree />;
      break;
    case "assiette":
      return <Assiette />;
      break;
    case "boisson":
      return <Boisson />;
      break;
    case "burger":
      return <Burger />;
      break;
    case "dessert":
      return <Dessert />;
      break;
    case "panini":
      return <Panini />;
      break;
    case "sandwich":
      return <Sandwich />;
      break;
    case "taco":
      return <TexMex />;
      break;
    default:
      return <Entree />;
  }
}

export default Options;
