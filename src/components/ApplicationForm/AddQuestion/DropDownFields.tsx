import { Checkbox } from "antd";
import { ReactComponent as ListIcon } from "../../../images/icons/list.svg";
import { ReactComponent as AddIcon } from "../../../images/icons/add.svg";
import TextInput from "../../shared/TextInput";

type DropDownFieldsProps = {
  isMultiChoice?: boolean;
  newQuestion: any;
  setNewQuestion: any;
  handleChange: any;
};

const DropDownFields = ({
  isMultiChoice,
  newQuestion,
  handleChange,
  setNewQuestion,
}: DropDownFieldsProps) => {
  const handleChoiceChange = (e: any, index: number) => {
    let choices = [...newQuestion.choices];
    choices.splice(index, 1, e.target.value);

    setNewQuestion({
      ...newQuestion,
      choices,
    });
  };

  const handleAddChoice = () =>
    setNewQuestion({ ...newQuestion, choices: [...newQuestion.choices, ""] });

  const handleCheckChange = (val: any) => {
    setNewQuestion({ ...newQuestion, other: val.target.checked });
  };

  return (
    <div className="choices-form">
      <div className="choices-container">
        <h5>Choice</h5>
        {newQuestion.choices.map((choice: any, index: number) => (
          <div className="single-choice" key={index}>
            <ListIcon />
            <input
              type="text"
              value={choice}
              placeholder="Type here"
              onChange={(e: any) => handleChoiceChange(e, index)}
            />
            {newQuestion.choices.length - 1 === index && (
              <button className="add-button" onClick={handleAddChoice}>
                <AddIcon />
              </button>
            )}
          </div>
        ))}
        <div className="check-option">
          <Checkbox onChange={handleCheckChange} checked={newQuestion.other}>
            Enable “Other” option
          </Checkbox>
        </div>
      </div>
      {isMultiChoice && (
        <TextInput
          onChange={handleChange}
          label="Max choice allowed"
          className="max-choices-allowed"
          value={newQuestion.maxChoice}
          name="maxChoice"
          type="number"
        />
      )}
    </div>
  );
};
export default DropDownFields;
