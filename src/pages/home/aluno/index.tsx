import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AlunoHome() {
  const navigate = useNavigate();

  useEffect(() => {
    const validation = localStorage.getItem("token");
    if (validation === null) {
      navigate("/");
    }
  }, []);
  return <>Aluno</>;
}
