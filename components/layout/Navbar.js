import Image from "next/image";
import logo from "../../public/logo.svg";

function navbar() {
  return (
    <nav>
      <div className="logo">
        <Image
          src={logo}
          alt={`Logo de le Kebab Rose`}
          width={200}
          height={200}
        />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default navbar;
