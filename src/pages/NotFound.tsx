import "./NotFound.css";
import end from "../assets/notFoundPageLogo.jpeg";

const NotFound: React.FC = function () {
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

export default NotFound;
