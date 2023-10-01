import { useState } from "react";
import Card from "../../shared/Card";
import Question from "../Question";
import AddQuestion from "../AddQuestion";
import AddQuestionButton from "../buttons/AddQuestionButton";
import { Props } from "./types";

const Profile = ({
  profile: { profileQuestions, ...profile },
  handleAddQuestion,
  handleEditQuestion,
  handleToggleChange,
}: Props) => {
  const [showAddQuestionForm, setShowAddQuestionForm] = useState(false);

  const handleToggleForm = () => setShowAddQuestionForm((prev) => !prev);

  const handleSubmitAddQuestion = (question: any) =>
    handleAddQuestion("profile", "profileQuestions", question);

  const handleSubmitEditQuestion = (id: number, question: any) =>
    handleEditQuestion("profile", "profileQuestions", id, question);

  const handleUpdateToggleChange = (
    subField: string,
    toggleField: string,
    value: any
  ) => handleToggleChange("profile", subField, toggleField, value);

  return (
    <Card headerTitle="Profile" className="profile">
      {Object.keys(profile).map((key: string) => (
        <Question
          question={{ ...profile[key], fieldName: key }}
          key={key}
          handleToggleChange={handleUpdateToggleChange}
        />
      ))}
      {profileQuestions.map((question: any, index: number) => (
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

export default Profile;
