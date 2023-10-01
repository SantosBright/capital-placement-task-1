import { Checkbox, Switch } from "antd";
import { ReactComponent as PenIcon } from "../../../images/icons/pen.svg";
import { useState } from "react";
import AddQuestion from "../AddQuestion";
import { Props } from "./types";
import "./styles.css";

const Question = ({
  question,
  handleEditQuestion,
  handleToggleChange,
}: Props) => {
  const {
    isAdded,
    question: questionTitle,
    caption,
    type,
    id,
    fieldLabel,
    show,
    internalUse,
    mandatory,
    fieldName,
  } = question;
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="question">
      <div className="container">
        <div>
          {question.isAdded && <h6 className="question-type">{type}</h6>}
          <h5 className="title">
            {isAdded ? questionTitle : fieldLabel}
            {caption && <span className="caption">({caption})</span>}
          </h5>
        </div>
        {!isAdded ? (
          <div className="options">
            {internalUse !== undefined && (
              <Checkbox
                checked={internalUse}
                onChange={(e: any) =>
                  handleToggleChange(fieldName, "internalUse", e.target.checked)
                }
              >
                Internal
              </Checkbox>
            )}
            {mandatory !== undefined && (
              <Checkbox
                onChange={(e: any) =>
                  handleToggleChange(fieldName, "mandatory", e.target.checked)
                }
                checked={mandatory}
              >
                Mandatory
              </Checkbox>
            )}
            {show !== undefined && (
              <div className="switch-cont">
                <Switch
                  defaultChecked
                  checked={show}
                  size="small"
                  title="Show"
                  onChange={(checked: boolean) =>
                    handleToggleChange(fieldName, "show", checked)
                  }
                />
                <span>{show ? "Show" : "Hide"}</span>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button className="edit-icon" onClick={() => setShowEditForm(true)}>
              <PenIcon />
            </button>
          </div>
        )}
      </div>
      {showEditForm && (
        <AddQuestion
          handleCloseForm={() => setShowEditForm(false)}
          handleAddQuestion={(updatedQuestion: any) =>
            handleEditQuestion(id, updatedQuestion)
          }
          question={question}
          isEdit
        />
      )}
    </div>
  );
};

export default Question;
