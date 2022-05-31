import "./styles.css";

interface FormInputProps extends React.InputHTMLAttributes<any> {
  label: string;
  input?: "text-area" | "text-line";
}

export default function FormInput({
  label,
  required,
  input,
  ...rest
}: FormInputProps) {
  return (
    <div className="box-input">
      <label>
        {label}
        {required && <strong className="input-required">*</strong>}
      </label>
      {input && input === "text-area" ? (
        <textarea
          {...rest}
          autoComplete="new-password"
          className="text-area-component"
        />
      ) : (
        <input
          {...rest}
          autoComplete="new-password"
          name="field"
          className="input-component"
        />
      )}
    </div>
  );
}
