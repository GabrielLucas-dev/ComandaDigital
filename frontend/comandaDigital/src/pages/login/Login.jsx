import "./Login.css";
import comandaDigital from "../../assets/comandaDigital_icon2.png";
import { useState } from "react";
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const login = {email, senha}

    function handleLoginSubmit() {
        axios.post("http://localhost:3031/usuarios", login)
        .then(res => {
            if(res.data > 0) return console.log('Usuário existe')
        })
        .catch(error => console.log({message: "erro tal: "+error.message}))
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
          <div>
            <button className="button-padrao2 entrar" onClick={handleLoginSubmit}>Entrar</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
