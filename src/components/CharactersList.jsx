import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import styles from "./CharactersList.module.css";
import Skeleton from "./Skeleton";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [pageAddr, setPageAddr] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(pageAddr)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setPageInfo(data.info);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [pageAddr]);

  if (isLoading) {
    return (
      <section className={styles["characters-section"]}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((cardNum) => (
          <Skeleton key={cardNum} />
        ))}
      </section>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (characters.length === 0) {
    return <div>No characters found.</div>;
  }

  const gotoNextPage = () => {
    if (pageInfo.next !== null) {
      setPageAddr(pageInfo.next);
    }
  };
  const gotoPrevPage = () => {
    if (pageInfo.prev !== null) {
      setPageAddr(pageInfo.prev);
    }
  };

  return (
    <>
      <div className={styles["page-controllers"]}>
        <button onClick={gotoPrevPage} disabled={!pageInfo.prev && "disabled"}>
          PREVIOUS PAGE
        </button>
        <button onClick={gotoNextPage} disabled={!pageInfo.next && "disabled"}>
          NEXT PAGE
        </button>
      </div>
      <section className={styles["characters-section"]}>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </section>
    </>
  );
}
