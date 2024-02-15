import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <article className={styles["skeleton-wrapper"]}>
      <div className={styles["skeleton-image"]}></div>
      <div className={styles["skeleton-author"]}>
        <div className={styles["author-name"]}></div>
        <div className={styles["btn-controller"]}></div>
      </div>
    </article>
  );
}
