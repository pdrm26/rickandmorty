import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import styles from "./CharactersList.module.css";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (characters.length === 0) {
    return <div>No characters found.</div>;
  }

  return (
    <section className={styles["characters-section"]}>
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </section>
  );
}
