import { useState } from "react";
import AddQuestion from "../AddQuestion";
import AddQuestionButton from "../buttons/AddQuestionButton";
import Card from "../../shared/Card";
import Question from "../Question";
import "./styles.css";

type Props = {
  customisedQuestions: any;
  setValues: any;
};

const AdditionalQuestions = ({ customisedQuestions, setValues }: Props) => {
  const [showAddQuestionForm, setShowAddQuestionForm] = useState(false);

  const handleToggleForm = () => setShowAddQuestionForm((prev) => !prev);

  const handleAddQuestion = (newQuestion: any) => {
    setValues((prev: any) => ({
      ...prev,
      customisedQuestions: [...prev.customisedQuestions, newQuestion],
    }));
  };

  const handleEditQuestion = (id: number, updatedQuestion: any) =>
    setValues((prev: any) => ({
      ...prev,
      customisedQuestions: prev.customisedQuestions.map(
        (quest: any, index: number) => (index === id ? updatedQuestion : quest)
      ),
    }));

  return (
    <Card headerTitle="Additional questions" className="additional-questions">
      {customisedQuestions.map((question: any, index: number) => (
        <Question
          question={{ ...question, id: index, isAdded: true }}
          handleEditQuestion={handleEditQuestion}
          key={index}
        />
      ))}
      {showAddQuestionForm && (
        <AddQuestion
          handleCloseForm={handleToggleForm}
          handleAddQuestion={handleAddQuestion}
        />
      )}
      <AddQuestionButton onClick={handleToggleForm} />
    </Card>
  );
};

export default AdditionalQuestions;
