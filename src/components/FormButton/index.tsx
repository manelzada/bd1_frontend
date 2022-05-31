import React from "react";
import "./styles.css";

interface FormButtonProps extends React.ButtonHTMLAttributes<any> {
  isLoading?: boolean;
}

export default function FormButton(props: FormButtonProps) {
  return (
    <button
      {...props}
      disabled={props.isLoading}
      className="button-component"
    />
  );
}
