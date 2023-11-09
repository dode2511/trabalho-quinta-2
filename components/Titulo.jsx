'use client'
import { useContext } from "react"
import { ClienteContext } from "@/contexts/cliente"

import Link from "next/link"

export default function Titulo() {
  const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext)

  function logout() {
    if (confirm("Confirma a saída do sistema? ")) {
      mudaId(null)
      mudaNome("")
      localStorage.removeItem("cliente_logado")
    }
  }

  return (
    <nav className="navbar bg-secondary">
      <div className="container-fluid">
        <div className="col">
          <Link className="navbar-brand text-white" href="/">
             {/* <img src="" alt="Logo" 
              width="40" height="48" className="float-start d-inline-block align-text-top" /> */}
            <h3 className="float-start mt-2 ms-2">Dropper  avenida</h3>
          </Link>
        </div>
        <div className="col input-group my-3">
          <input type="text" className="form-control" placeholder="Título ou gênero" />
          <button className="btn btn-warning text-white" type="button">Pesquisar</button>
        </div>
        <div className="col">
          <h5 className="text-white text-center ">
          {clienteNome ? clienteNome : ""}
          {
            clienteNome ?
              <i class="bi bi-box-arrow-in-left" style={{cursor: 'pointer'}} onClick={logout}></i> :
              <Link href="/login"><i class=" bi bi-person text-white bi-2x "></i></Link>
          }
          </h5>
        </div>

      </div>
    </nav>
  )
}