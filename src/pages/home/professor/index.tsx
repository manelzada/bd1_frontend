import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionsInput } from "../../../components/QuestionsInput/Index";
import { questions } from "../../../utils/text";
import { RiLogoutBoxFill } from "react-icons/all";

import "./styles.css";
import {
  getQuestoesLocalStorage,
  getQuests,
  getUserLocalStorage,
  setQuestaoLocalStorage,
} from "../../../contexts/AuthContext/utils";
import api from "../../../service/api";

export function ProfessorHome() {
  const [isEditing, setIsEditing] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);
  const [questoes, setQuestoes] = useState([]);
  const [questionText, setQuestionText] = useState("");
  const [alternativa1, setAlternativa1] = useState("");
  const [alternativa2, setAlternativa2] = useState("");
  const [alternativa3, setAlternativa3] = useState("");
  const [alternativa4, setAlternativa4] = useState("");
  const [alternativa5, setAlternativa5] = useState("");
  const [alternativaCount, setAlternativaCount] = useState(false);
  const [alternativas, setAlternativas] = useState([]);

  const navigate = useNavigate();
  const user = getUserLocalStorage();
  const questionAPI = getQuestoesLocalStorage();

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

  async function createQuestion() {
    const questao = {
      enunciado: questionText,
      mat_professor: user?.matricula,
    };
    const response = await api.post("/questao/cadastrar", questao);

    const alternativas = [
      {
        letra: response.data.id,
        resposta: alternativa1,
        eh_correta: "true",
        questao: {
          //@ts-ignore
          id: response.data.id,
          enunciado: questionText,
          mat_professor: user?.matricula,
        },
      },
      {
        letra: response.data.id + 1,
        resposta: alternativa2,
        eh_correta: "true",
        questao: {
          //@ts-ignore
          id: response.data.id,
          enunciado: questionText,
          mat_professor: user?.matricula,
        },
      },
      {
        letra: response.data.id + 2,
        resposta: alternativa3,
        eh_correta: "true",
        questao: {
          //@ts-ignore
          id: response.data.id,
          enunciado: questionText,
          mat_professor: user?.matricula,
        },
      },
      {
        letra: response.data.id + 3,
        resposta: alternativa4,
        eh_correta: "true",
        questao: {
          //@ts-ignore
          id: response.data.id,
          enunciado: questionText,
          mat_professor: user?.matricula,
        },
      },
      {
        letra: response.data.id + 4,
        resposta: alternativa5,
        eh_correta: "true",
        questao: {
          //@ts-ignore
          id: response.data.id,
          enunciado: questionText,
          mat_professor: user?.matricula,
        },
      },
    ];
    await api.post("/alternativa/cadastrar", alternativas);
    setQuestionText("");
    setAlternativa1("");
    setAlternativa2("");
    setAlternativa3("");
    setAlternativa4("");
    setAlternativa5("");
  }

  console.log(questoes);
  return (
    <div className="main-container">
      <nav>
        <a href="/">More Education</a>
        <h2>Bem vindo {user?.nome}</h2>
        <div className="buttons">
          <button onClick={() => setAddQuestion(!addQuestion)}>
            Cadastrar questão
          </button>
          <button onClick={logout}>
            Sair {<RiLogoutBoxFill className="icon" />}
          </button>
        </div>
      </nav>

      <div className="question-container">
        {addQuestion ? (
          <div className="question-container">
            <input
              type="text"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />

            <div className="alternativas-container">
              <input
                type="text"
                value={alternativa1}
                onChange={(e) => setAlternativa1(e.target.value)}
              />
              <input
                type="text"
                value={alternativa2}
                onChange={(e) => setAlternativa2(e.target.value)}
              />
              <input
                type="text"
                value={alternativa3}
                onChange={(e) => setAlternativa3(e.target.value)}
              />
              <input
                type="text"
                value={alternativa4}
                onChange={(e) => setAlternativa4(e.target.value)}
              />
              <input
                type="text"
                value={alternativa5}
                onChange={(e) => setAlternativa5(e.target.value)}
              />
            </div>
            <button onClick={createQuestion}>Add</button>
          </div>
        ) : (
          <></>
        )}
        {questoes &&
          //@ts-ignore
          questoes.map((questions) => (
            <div key={questions.id}>
              {
                <QuestionsInput
                  title={questions.enunciado}
                  items={questions.alternativas}
                />
              }
            </div>
          ))}
      </div>
    </div>
  );
}
