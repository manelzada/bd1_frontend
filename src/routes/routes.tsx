import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Login } from "../pages/auth/login";
import AlunoHome from "../pages/home/aluno";
import { ProfessorHome } from "../pages/home/professor";

export default function Rotas() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/phome" element={<ProfessorHome />} />
        <Route path="/ahome" element={<AlunoHome />} />
      </Routes>
    </Router>
  );
}
