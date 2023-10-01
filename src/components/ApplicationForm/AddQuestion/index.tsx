import { Select } from "antd";
import { useState, useRef } from "react";
import DeleteButton from "../buttons/DeleteButton";
import SaveButton from "../buttons/SaveButton";
import TextInput from "../../shared/TextInput";
import { questionTypes } from "../AdditionalQuestions/types";
import renderFields from "./renderFields";
import "./styles.css";

type Props = {
  handleCloseForm: any;
  handleAddQuestion: any;
  isEdit?: boolean;
  question?: any;
};

const AddQuestion = ({
  handleCloseForm,
  handleAddQuestion,
  isEdit,
  question,
}: Props) => {
  const [newQuestion, setNewQuestion] = useState<any>(
    isEdit
      ? question
      : {
          type: "Yes/No",
          question: "",
          choices: [""],
          maxChoice: "",
          disqualify: false,
          other: false,
          description: "",
          maxDuration: "",
          durationFormat: "minutes",
        }
  );
  const questionCopy = useRef(newQuestion);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    handleAddQuestion(newQuestion);
    handleCloseForm();
  };

  const handleSelectChange = (option: string) => {
    console.log("_______", questionCopy);

    setNewQuestion({ ...questionCopy.current, type: option });
  };

  const handleChange = (e: any) => {
    setNewQuestion({
      ...newQuestion,
      [e?.target?.name]: e?.target?.value,
    });
  };

  return (
    <form
      className={`add-question-form ${isEdit && "edit-form"}`}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="" className="label">
          Type
        </label>
        <Select
          options={questionTypes}
          style={{ width: "100%", height: "4.25rem" }}
          value={newQuestion.type}
          onChange={handleSelectChange}
        ></Select>
      </div>
      <TextInput
        onChange={handleChange}
        label="Question"
        className="question-title"
        name="question"
        value={newQuestion.question}
      />
      {renderFields(
        newQuestion.type,
        newQuestion,
        setNewQuestion,
        handleChange
      )}
      <div className="actions">
        <DeleteButton onClick={handleCloseForm} />
        <SaveButton />
      </div>
    </form>
  );
};

export default AddQuestion;
