import { ReactComponent as AddIcon } from "../../../images/icons/add.svg";
import { Props } from "./types";
import "./styles.css";

const AddQuestionButton = ({ onClick }: Props) => {
  return (
    <button className="add-question-btn" onClick={onClick}>
      <AddIcon />
      <span>Add a question</span>
    </button>
  );
};

export default AddQuestionButton;
