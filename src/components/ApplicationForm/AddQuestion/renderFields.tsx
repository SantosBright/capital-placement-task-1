import { Checkbox } from "antd";
import DropDownFields from "./DropDownFields";
import { QuestionTypes } from "../AdditionalQuestions/types";
import VideoOptions from "./VideoOptions";

const renderFields = (
  type: QuestionTypes,
  newQuestion: any,
  setNewQuestion: any,
  handleChange: any
) => {
  const handleDisqualifyCheckChange = (val: any) =>
    setNewQuestion({ ...newQuestion, disqualify: val.target.checked });

  switch (type) {
    case QuestionTypes.Dropdown:
      return (
        <DropDownFields
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          handleChange={handleChange}
        />
      );
    case QuestionTypes["Multiple choice"]:
      return (
        <DropDownFields
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          handleChange={handleChange}
          isMultiChoice
        />
      );
    case QuestionTypes["Yes/No"]:
      return (
        <div className="check-option">
          <Checkbox
            onChange={handleDisqualifyCheckChange}
            checked={newQuestion.disqualify}
          >
            Disqualify candidate if the answer is no
          </Checkbox>
        </div>
      );
    case QuestionTypes.VideoQuestion:
      return (
        <VideoOptions
          handleChange={handleChange}
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
        />
      );
  }
};

export default renderFields;
