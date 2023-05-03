import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Rick and Morty</h1>
      <nav>
        <ul>
          <li>
            <a href="/">All Your Favourites</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
