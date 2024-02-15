import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import styles from "./CharactersList.module.css";
import Skeleton from "./Skeleton";

type pageInfo = {
  next: string | null;
  prev: string | null;
};

export default function CharactersList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pageInfo, setPageInfo] = useState<pageInfo>({ next: null, prev: null });
  const [pageAddr, setPageAddr] = useState("https://rickandmortyapi.com/api/character?page=1");
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

  return (
    <>
      <div className={styles["page-controllers"]}>
        <button onClick={gotoPrevPage} disabled={!pageInfo.prev}>
          PREVIOUS PAGE
        </button>
        <button onClick={gotoNextPage} disabled={!pageInfo.next}>
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
