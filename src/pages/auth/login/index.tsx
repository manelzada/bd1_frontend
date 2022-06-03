import { FormEvent, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import FormButton from "../../../components/FormButton";
import FormInput from "../../../components/FormInput";
import api from "../../../service/api";

import "./styles.css";
import svgImg from "../../../assets/animate.svg";
import { useNavigate } from "react-router-dom";
import {
  loginRequest,
  setUserLocalStorage,
} from "../../../contexts/AuthContext/utils";

export function Login() {
  const [inputMatricula, setInputMatricula] = useState("");
  const [inputPassWord, setInputPassWord] = useState("");
  const navigate = useNavigate();

  function onLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      api
        .post("/login", {
          matricula: inputMatricula,
          senha: inputPassWord,
        })
        .then(({ data }) => {
          const payload = {
            matricula: data.matricula,
            nome: data.nome,
            acess: data.acess,
            id_turma_a: data.id_turma_a,
            id_turma: data.id_turma,
          };
          setUserLocalStorage(payload);
          data?.acess == 1 ? navigate("/phome") : navigate("/ahome");
          if (data.acess == 1) {
            localStorage.setItem("token", "1");
            navigate("/phome");
          } else if (data.acess == 2) {
            localStorage.setItem("token", "2");
            navigate("/ahome");
          } else {
            alert("Usuário ou senha incorreto");
          }
        });
    } catch (error) {
      console.log(error);
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
