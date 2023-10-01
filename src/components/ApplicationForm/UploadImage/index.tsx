import uploadIcon from "../../../images/icons/upload.png";
import { ReactComponent as ThrashIcon } from "../../../images/icons/thrash.svg";
import Card from "../../shared/Card";
import "./styles.css";

type Props = {
  handleImageChange: (e: unknown) => void;
  imageURL: string;
  handleRemoveImage: () => void;
};

const UploadImage = ({
  handleImageChange,
  imageURL,
  handleRemoveImage,
}: Props) => {
  return (
    <Card
      className="upload-image-card"
      contextClassName="upload-image"
      headerTitle="Upload cover image"
    >
      <input type="file" name="" id="image" onChange={handleImageChange} />
      {!imageURL ? (
        <div className="label-container">
          <label htmlFor="image">
            <img src={uploadIcon} alt="" />
            <h6>Upload cover image</h6>
            <p>16:9 ratio is recommended. Max image size 1mb</p>
          </label>
        </div>
      ) : (
        <div className="preview-image">
          <div>
            <img src={imageURL} alt="" />
            <button onClick={handleRemoveImage} className="delete-image">
              <ThrashIcon />
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default UploadImage;
