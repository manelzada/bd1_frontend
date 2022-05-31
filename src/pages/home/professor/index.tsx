import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionsInput } from "../../../components/QuestionsInput/Index";
import { questions } from "../../../utils/text";
import { RiLogoutBoxFill } from "react-icons/all";

import "./styles.css";

export function ProfessorHome() {
  const navigate = useNavigate();
  const nomeProfessor = "Maísa";

  useEffect(() => {
    const validation = localStorage.getItem("token");
    if (validation === null) {
      navigate("/");
    }
  }, []);
  return (
    <div className="main-container">
      <nav>
        <a href="/">More Education</a>
        <h2>Bem vindo {nomeProfessor}</h2>
        <div className="buttons">
          <button>Cadastrar questão</button>
          <button>Sair {<RiLogoutBoxFill className="icon" />}</button>
        </div>
      </nav>

      <div className="question-container">
        {questions.map((question) => (
          <div key={question.id}>
            {
              <QuestionsInput
                title={question.title}
                items={question.questions}
              />
            }
          </div>
        ))}
      </div>
    </div>
  );
}
