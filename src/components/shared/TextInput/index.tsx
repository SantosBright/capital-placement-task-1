import "./styles.css";

type Props = {
  label?: string;
  className?: string;
  name?: string;
  onChange: (e: any) => void;
  value: string;
  type?: "text" | "number";
  placeholder?: string;
  id?: string;
  noLabel?: boolean;
};

const TextInput = ({
  label,
  className,
  name,
  onChange,
  value,
  type = "text",
  placeholder = "Type here",
  id,
  noLabel,
}: Props) => {
  return (
    <div className={`text-input ${className}`}>
      {!noLabel ? (
        <label className="label">
          {label}
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </label>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default TextInput;
