export interface IUser {
  matricula?: string;
  senha?: string;
}

export interface IContext extends IUser {
  authenticate: (matricula: string, senha: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
