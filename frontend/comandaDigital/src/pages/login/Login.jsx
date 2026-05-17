import "./Login.css";
import comandaDigital from "../../assets/comandaDigital_icon2.png";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import api from '../../api/Api'

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const login = {email, senha}
    const navigate = useNavigate()

    function handleLoginSubmit(e) {
        e.preventDefault()

        api.post("/usuarios/login", login)
        .then(res => {
            console.log(res.data)

            localStorage.setItem("token", res.data.token)
            console.log("TOKEN: " + localStorage.getItem("token"))

            navigate('/vendas')
        })
        .catch(error => {
            if(error.status === 400) return alert("email e/ou senha incorreto(s)")
            return console.log(error)
        })
    }

  return (
    <>
      <section className="container-login">
        <div className="inner-login">
          <div className="login-logo">
            <img src={comandaDigital} alt="" />
            <h3>
              Comanda<span>Digital</span>
            </h3>
          </div>
          <form onSubmit={handleLoginSubmit}>
          <div className="login-fields">
            <div className="field">
              <label htmlFor="">Email</label>
              <input type="email" onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div className="field">
              <label htmlFor="">Senha</label>
              <input type="password" onChange={e => setSenha(e.target.value)} required/>
            </div>
          </div>
          <div className="submit-login">
            <button type="submit" className="button-padrao2 entrar">Entrar</button>
          </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
