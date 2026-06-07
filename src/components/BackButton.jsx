import { Link } from "react-router-dom";

function BackButton() {
  return (
    <div className="back-container">
      <Link to="/" className="back-button">
        ← Back
      </Link>
    </div>
  );
}

export default BackButton;