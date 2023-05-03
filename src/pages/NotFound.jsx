import "./NotFound.css";
import end from "../assets/end.jpeg";

export default function NotFound() {
  return (
    <>
      <div className="wrapper">
        <div className="not-found-wrapper">
          <span>4</span>
          <img src={end} alt="Not Found Logo" />
          <span>4</span>
        </div>
        <p>Go back to your space.</p>
      </div>
    </>
  );
}
