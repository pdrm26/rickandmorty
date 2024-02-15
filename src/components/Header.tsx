import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <h1>Rick and Morty</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/favourites">All Your Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
