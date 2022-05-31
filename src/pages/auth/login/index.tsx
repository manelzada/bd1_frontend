import { FormEvent, useState } from "react";
import FormButton from "../../../components/FormButton";
import FormInput from "../../../components/FormInput";

import "./styles.css";
import svgImg from "../../../assets/animate.svg";

export function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassWord, setInputPassWord] = useState("");

  function onLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Email: ${inputEmail} Senha: ${inputPassWord}`);
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
            value={inputEmail}
            placeholder="201945495"
            onChange={(e) => setInputEmail(e.target.value)}
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
