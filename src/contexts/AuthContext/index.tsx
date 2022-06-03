import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./Types";
import {
  getUserLocalStorage,
  loginRequest,
  setUserLocalStorage,
} from "./utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(matricula: string, senha: string) {
    const response = await loginRequest(matricula, senha);
    const payload = {
      matricula: response.matricula,
      nome: response.nome,
      acess: response.acess,
      id_turma_a: response.id_turma_a,
      id_turma: response.id_turma,
    };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
