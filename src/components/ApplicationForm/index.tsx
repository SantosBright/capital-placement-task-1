import { useState } from "react";
import UploadImage from "./UploadImage";
import PersonalInfo from "./PersonalInfo";
import Profile from "./Profile";
import AdditionalQuestions from "./AdditionalQuestions";
import SaveButton from "./buttons/SaveButton";
import { axiosInstance } from "../../services/axios";
import doneIcon from "../../images/icons/done.svg";

type Props = {};

const Form = (props: Props) => {
  const [image, setImage] = useState<any>({});
  const [isSubmitted, setSubmitted] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const [values, setValues] = useState<any>({
    personalInformation: {
      firstName: {
        fieldLabel: "First Name",
      },
      lastName: {
        fieldLabel: "Last Name",
      },
      emailId: {
        fieldLabel: "Email",
      },
      phoneNumber: {
        internalUse: false,
        show: false,
        fieldLabel: "Phone",
        caption: "without dial code",
      },
      nationality: {
        internalUse: false,
        show: false,
        fieldLabel: "Nationality",
      },
      currentResidence: {
        internalUse: false,
        show: false,
        fieldLabel: "Current Residence",
      },
      idNumber: {
        internalUse: false,
        show: false,
        fieldLabel: "ID Number",
      },
      dateOfBirth: {
        internalUse: false,
        show: false,
        fieldLabel: "Date of Birth",
      },
      gender: {
        internalUse: false,
        show: false,
        fieldLabel: "Gender",
      },
      personalQuestions: [],
    },
    profile: {
      education: {
        mandatory: false,
        show: false,
        fieldLabel: "Education",
      },
      experience: {
        mandatory: false,
        show: false,
        fieldLabel: "Experience",
      },
      resume: {
        mandatory: false,
        show: false,
        fieldLabel: "Resume",
      },
      profileQuestions: [],
    },
    customisedQuestions: [],
  });

  const handleAddQuestion = (
    fieldName: string,
    subFieldArrName: string,
    newQuestion: any
  ) => {
    setValues((prev: any) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        [subFieldArrName]: [...prev[fieldName][subFieldArrName], newQuestion],
      },
    }));
  };

  const handleEditQuestion = (
    fieldName: string,
    subFieldArrName: string,
    id: number,
    updatedQuestion: any
  ) => {
    setValues((prev: any) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        [subFieldArrName]: prev[fieldName][subFieldArrName].map(
          (quest: any, index: number) =>
            index === id ? updatedQuestion : quest
        ),
      },
    }));
  };

  const handleToggleChange = (
    fieldName: string,
    subField: any,
    toggleField: any,
    value: any
  ) =>
    setValues((prev: any) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        [subField]: {
          ...prev[fieldName][subField],
          [toggleField]: value,
        },
      },
    }));

  const handleImageChange = (e: any) => {
    console.log('change', '')
    const file = e.target.files[0];

    console.log('file___', file)

    setImage(file);
    setImageURL(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImage({});
    setImageURL("");
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("coverImage", image);
    formData.append("attributes", values);

    console.log("______", formData);
    try {
      const req = await axiosInstance.put(
        "/1233/programs/programs-name/application-form",
        formData
      );
      setSubmitted(true);

      console.log(req);
    } catch (error) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {isSubmitted && (
        <div className="success-modal">
          <h4>Good Job!</h4>
          <img src={doneIcon} alt="done" />
        </div>
      )}
      <UploadImage
        imageURL={imageURL}
        handleRemoveImage={handleRemoveImage}
        handleImageChange={handleImageChange}
      />
      <PersonalInfo
        personalInformation={values.personalInformation}
        handleAddQuestion={handleAddQuestion}
        handleEditQuestion={handleEditQuestion}
        handleToggleChange={handleToggleChange}
      />
      <Profile
        profile={values.profile}
        handleAddQuestion={handleAddQuestion}
        handleEditQuestion={handleEditQuestion}
        handleToggleChange={handleToggleChange}
      />
      <AdditionalQuestions
        customisedQuestions={values.customisedQuestions}
        setValues={setValues}
      />
      <SaveButton type="button" onClick={handleSave} />
    </div>
  );
};

export default Form;
