import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Page/Login/Login"
import Cadastro from "./Page/Cadastro/Cadastro"
import Habitos from "./Page/Habitos/Habitos"
import Hoje from "./Page/Hoje/Hoje"
import Historico from "./Page/Historico/Historico"



export default function App() {



  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos  />} />
        <Route path="hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
        
      </Routes>
    </ BrowserRouter>



  )
}


