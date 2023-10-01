import { Props } from "./types";
import "./styles.css";

const SaveButton = ({ type = "submit", onClick }: Props) => {
  return (
    <button className="save-btn" type={type} onClick={onClick}>
      Save
    </button>
  );
};

export default SaveButton;
