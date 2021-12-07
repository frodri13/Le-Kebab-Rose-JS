import Image from "next/image";
import burger from "../../public/burger.svg";
import drink from "../../public/drink.svg";
import salad from "../../public/salad.svg";
import kebab from "../../public/kebab.png";
import dessert from "../../public/dessert.svg";
import sandwich from "../../public/sandwich.svg";
import taco from "../../public/taco.svg";
import { useContext } from "react";
import { ChoiceContext } from "../../context/ChoiceContext";

function Menu() {
  const { choice, setChoice } = useContext(ChoiceContext);
  console.log(choice);

  return (
    <div className="menu">
      <div onClick={() => setChoice("entree")}>
        <Image
          src={salad}
          alt={`SVG image of a salad.`}
          width={100}
          height={100}
        />

        <h3>ENTREE</h3>
      </div>
      <div onClick={() => setChoice("sandwich")}>
        <Image
          src={sandwich}
          alt={`SVG image of a sandwich.`}
          width={100}
          height={100}
        />

        <h3>SANDWICH</h3>
      </div>
      <div onClick={() => setChoice("panini")}>
        <Image
          src={sandwich}
          alt={`SVG image of a sandwich.`}
          width={100}
          height={100}
        />

        <h3>PANINI</h3>
      </div>
      <div onClick={() => setChoice("burger")}>
        <Image
          src={burger}
          alt={`SVG image of a pink burger.`}
          width={100}
          height={100}
        />
        <h3>BURGER</h3>
      </div>
      <div onClick={() => setChoice("taco")}>
        <Image
          src={taco}
          alt={`SVG image of a taco.`}
          width={100}
          height={100}
        />

        <h3>TEX MEX</h3>
      </div>
      <div onClick={() => setChoice("assiette")}>
        <Image
          src={kebab}
          alt={`SVG image of a Kebab.`}
          width={100}
          height={100}
        />

        <h3>ASSIETTE</h3>
      </div>
      <div onClick={() => setChoice("dessert")}>
        <Image
          src={dessert}
          alt={`SVG image of a cupcake.`}
          width={100}
          height={100}
        />

        <h3>DESSERT</h3>
      </div>
      <div onClick={() => setChoice("boisson")}>
        <Image
          src={drink}
          alt={`SVG image of a bottle.`}
          width={100}
          height={100}
        />

        <h3>BOISSON</h3>
      </div>
    </div>
  );
}

export default Menu;
