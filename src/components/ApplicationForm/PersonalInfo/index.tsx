import { useState } from "react";
import AddQuestionButton from "../buttons/AddQuestionButton";
import Card from "../../shared/Card";
import Question from "../Question";
import AddQuestion from "../AddQuestion";
import { Props } from "./types";

const PersonalInfo = ({
  personalInformation: { personalQuestions, ...personalInformation },
  handleAddQuestion,
  handleEditQuestion,
  handleToggleChange,
}: Props) => {
  const [showAddQuestionForm, setShowAddQuestionForm] = useState(false);

  const handleToggleForm = () => setShowAddQuestionForm((prev) => !prev);

  const handleSubmitAddQuestion = (question: any) =>
    handleAddQuestion("personalInformation", "personalQuestions", question);

  const handleSubmitEditQuestion = (id: number, question: any) =>
    handleEditQuestion(
      "personalInformation",
      "personalQuestions",
      id,
      question
    );

  const handleUpdateToggleChange = (
    subField: string,
    toggleField: string,
    value: any
  ) => handleToggleChange("personalInformation", subField, toggleField, value);

  return (
    <Card headerTitle="Personal Info">
      {Object.keys(personalInformation).map((key: string) => (
        <Question
          question={{ ...personalInformation[key], fieldName: key }}
          key={key}
          handleToggleChange={handleUpdateToggleChange}
        />
      ))}
      {personalQuestions.map((question: any, index: number) => (
        <Question
          question={{ ...question, id: index, isAdded: true }}
          handleEditQuestion={handleSubmitEditQuestion}
          key={index}
        />
      ))}
      {showAddQuestionForm && (
        <AddQuestion
          handleCloseForm={handleToggleForm}
          handleAddQuestion={handleSubmitAddQuestion}
        />
      )}
      <AddQuestionButton onClick={handleToggleForm} />
    </Card>
  );
};

export default PersonalInfo;
