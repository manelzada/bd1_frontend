import { useState } from "react";
import svgImg from "../../../assets/animate.svg";
import FormButton from "../../../components/FormButton";
import FormInput from "../../../components/FormInput";

export function SignUp() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassWord, setInputPassWord] = useState("");

  function onSignUp() {}

  return (
    <main>
      <div className="left-container">
        <h2>More Education</h2>
        <img src={svgImg} className="left-img" alt="pessoas animadas" />
      </div>
      <form onSubmit={onSignUp} className="right-container ">
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
