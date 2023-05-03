import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }) {
  const addToFavHandler = (character) => {
    localStorage.setItem("favChars", character);
  };

  return (
    <article className={styles["card-wrapper"]}>
      <div className="img-wrapper">
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles["content-wrapper"]}>
        <h2>{character.name}</h2>
        <div className={styles["add-favorite-section"]}>
          <button onClick={() => addToFavHandler(character)}>
            Add to Favorites
          </button>
        </div>
      </div>
    </article>
  );
}
