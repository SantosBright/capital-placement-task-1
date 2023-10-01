import { ReactComponent as DeleteIcon } from "../../../images/icons/delete.svg";
import { Props } from "./types";
import "./styles.css";

const DeleteButton = ({ onClick }: Props) => {
  return (
    <button className="delete-button" onClick={onClick}>
      <DeleteIcon /> <span>Delete question</span>
    </button>
  );
};

export default DeleteButton;
