import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import Login from "./Login/Login"
import Cadastro from "./Cadastro/Cadastro"
import Habitos from "./Habitos/Habitos"
import Hoje from "./Hoje/Hoje"
import axios from "axios"


export default function App() {

  axios.defaults.headers.common['Authorization'] = 'tmdb2ip950XTk78HOLWRDddg'
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
      </Routes>
    </BrowserRouter>

  )

}

