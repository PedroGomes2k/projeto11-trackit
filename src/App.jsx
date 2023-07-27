import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Page/Login/Login"
import Cadastro from "./Page/Cadastro/Cadastro"
import Habitos from "./Page/Habitos/Habitos"
import Hoje from "./Page/Hoje/Hoje"
import Historico from "./Page/Historico/Historico"
import axios from "axios"
import { useState } from 'react'
import Menu from './Page/Menu/Menu'





export default function App() {

  axios.defaults.headers.common['Authorization'] = 'yQLUKYNtQDLPq5KBDETYbFDq'

  const [token, setToken] = useState([])




  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login setToken={setToken} />}
        />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/menu" element={<Menu />} />

      </Routes>
    </ BrowserRouter>



  )
}


