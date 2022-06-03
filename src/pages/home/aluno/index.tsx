import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserLocalStorage } from "../../../contexts/AuthContext/utils";
import { RiLogoutBoxFill } from "react-icons/all";
import { QuestionsInput } from "../../../components/QuestionsInput/Index";

import "./styles.css";
import api from "../../../service/api";
import FormButton from "../../../components/FormButton";

export default function AlunoHome() {
  const [questoes, setQuestoes] = useState([]);

  const navigate = useNavigate();
  const userName = "Manel";

  useEffect(() => {
    const validation = localStorage.getItem("token");
    if (validation === null) {
      navigate("/");
    }
    api.get("/questao/all").then((data) => {
      setQuestoes(data.data);
    });
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("questoes");
    navigate("/");
  }
  return (
    <div className="main">
      <div className="side-nav">
        <div>
          <a href="" className="active">
            Home
          </a>
          <a href="">Avaliação</a>
          <a href="">Material de estudo</a>
          <a href="">Chat</a>
        </div>
        <a onClick={logout} className="logout">
          Sair {<RiLogoutBoxFill />}
        </a>
      </div>
      <h2>Bem vindo {userName}</h2>

      <div className="avaliacao">
        {questoes &&
          //@ts-ignore
          questoes.map((questions) => (
            <div key={questions.id} className="questoes">
              {
                <QuestionsInput
                  title={questions.enunciado}
                  items={questions.alternativas}
                />
              }
            </div>
          ))}
      </div>
      <FormButton>Enviar</FormButton>
    </div>
  );
}
