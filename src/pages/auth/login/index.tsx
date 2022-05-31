import { FormEvent, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import FormButton from "../../../components/FormButton";
import FormInput from "../../../components/FormInput";

import "./styles.css";
import svgImg from "../../../assets/animate.svg";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [inputMatricula, setInputMatricula] = useState("");
  const [inputPassWord, setInputPassWord] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!loading && localStorage.getItem("token") !== null) {
  //     navigate("/home");
  //   }
  // }, [loading, navigate]);

  function onLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (inputMatricula.includes("1")) {
      localStorage.setItem("token", "1");
      navigate("/phome");
    } else {
      localStorage.setItem("token", "2");
      navigate("/ahome");
    }
  }

  return (
    <main>
      <div className="left-container">
        <h2>More Education</h2>
        <img src={svgImg} className="left-img" alt="pessoas animadas" />
      </div>
      <form onSubmit={onLogin} className="right-container ">
        <div className="card-container">
          <h4>Fazer login</h4>
          <FormInput
            label="Numero de matricula"
            type="text"
            name="num_matricula"
            value={inputMatricula}
            placeholder="201945495"
            onChange={(e) => setInputMatricula(e.target.value)}
          />

          <FormInput
            label="Senha"
            type="password"
            name="senha"
            placeholder="********"
            value={inputPassWord}
            onChange={(e) => setInputPassWord(e.target.value)}
          />

          <FormButton type="submit">Entrar</FormButton>

          <p className="paragrafo">
            Não tenho conta! <a href="">Cadastre-se</a>
          </p>
        </div>
      </form>
    </main>
  );
}
