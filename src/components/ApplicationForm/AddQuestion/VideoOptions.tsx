import { Select } from "antd";
import TextInput from "../../shared/TextInput";

type Props = {
  newQuestion: any;
  setNewQuestion: any;
  handleChange: any;
};

const VideoOptions = ({ newQuestion, setNewQuestion, handleChange }: Props) => {
  const handleSelectChange = (option: any) =>
    setNewQuestion({ ...newQuestion, durationFormat: option });

  return (
    <div className="video-options">
      <textarea
        placeholder="Additonal Information"
        id=""
        cols={30}
        name="description"
        value={newQuestion.description}
        onChange={handleChange}
      >
        {newQuestion.description}
      </textarea>
      <div className="duration-container">
        <TextInput
          type="number"
          name="maxDuration"
          onChange={handleChange}
          value={newQuestion.maxDuration}
          placeholder="Max duration of video(sec/min)"
          noLabel
        />
        <Select
          options={[
            { label: "Minutes", value: "minutes" },
            { label: "Seconds", value: "seconds" },
          ]}
          style={{ width: "100%", height: "4.25rem" }}
          value={newQuestion.durationFormat}
          onChange={handleSelectChange}
        ></Select>
      </div>
    </div>
  );
};

export default VideoOptions;
