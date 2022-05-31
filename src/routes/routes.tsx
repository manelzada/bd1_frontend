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

import "./pages/Home.css";

export default function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            isAuthenticated?.includes("1") ? <ProfessorHome /> : <AlunoHome />
          }
        />
      </Routes>
    </Router>
  );
}
