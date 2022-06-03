import api from "../../service/api";
import { IUser } from "./Types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function setQuestaoLocalStorage(questoes: any) {
  localStorage.setItem("questoes", JSON.stringify(questoes));
}

export const getQuests = () => {
  const storedQuests = api.get("/questao/all");
  if (!storedQuests) {
    return [];
  }
  //@ts-ignore
  return storedQuests;
};

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export function getQuestoesLocalStorage() {
  const json = localStorage.getItem("questoes");

  if (!json) {
    return null;
  }

  const questions = JSON.parse(json);

  return questions ?? null;
}

export async function loginRequest(matricula: string, senha: string) {
  try {
    const request = await api.post("/login", {
      matricula: matricula,
      senha: senha,
    });
    return request.data;
  } catch (error) {
    return null;
  }
}

export async function getAllQuestions() {
  try {
    const request = await api.get("/questao/all");
    return request.data;
  } catch (error) {
    return null;
  }
}
