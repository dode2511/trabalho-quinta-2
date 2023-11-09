'use client'
import Link from 'next/link'
import './login.css'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { ClienteContext } from '@/contexts/cliente'
import { useRouter } from 'next/navigation'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { mudaId, mudaNome } = useContext(ClienteContext)

  const router = useRouter()

  async function verificaLogin(data) {
//    console.log(data)
    const login = `email=${data.email}&senha=${data.senha}`
    const response = await fetch(`http://localhost:3004/clientes?${login}`)
    const cliente = await response.json()
    if (cliente.length == 0) {
      alert("Não está cadastrado")
    } else {
      // alert("Ok!")
      mudaId(cliente[0].id)
      mudaNome(cliente[0].nome)
      localStorage.setItem("cliente_logado", JSON.stringify({id: cliente[0].id, nome: cliente[0].nome}))
      router.push("/")
    }
  }

  return (
      <div className='login templete d-flex justify-content-center align-items-center 100-w vh-100 bg-white'>
        <div className='10-w p-5 rounded bg-white shadow-lg p-3 mb-5' >
          <form  onSubmit={handleSubmit(verificaLogin)}>
          <h3>Login</h3>
          <div className='mb-2'> 
            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' placeholder='Email'  required {...register("email")}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="senha" >Senha</label>
            <input type="password" className='form-control' placeholder='Senha' required {...register("senha")} />
          </div>
          
          <div className='d-grid'>
            <button className='btn btn-primary'  type="submit">Entrar</button>
          </div>
          
          </form>
        </div>


      </div>
  )
}


