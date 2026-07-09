import { useEffect, useState } from "react";

/*=========================================
 Interface das propriedades (Props)
=========================================*/

interface LoginFormProps {

  disciplina: string;

  onLogin: (usuario: string) => void;

}

/*=========================================
 Componente LoginForm
=========================================*/

function LoginForm({

  disciplina,
  onLogin

}: LoginFormProps) {

  /*=========================================
   Estados do formulário
  =========================================*/

  const [usuario, setUsuario] =
    useState("");

  const [senha, setSenha] =
    useState("");

  /*=========================================
   useEffect

   Atualiza o título da aba quando o
   formulário é carregado.
  =========================================*/

  useEffect(() => {

    document.title =
      `Login - ${disciplina}`;

  }, [disciplina]);

  /*=========================================
   Envio do formulário
  =========================================*/

  function enviar(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    // Simulação de login

    onLogin(usuario);

  }

  /*=========================================
   Interface (JSX)
  =========================================*/

  return (

    <div className="card shadow mt-5">

      <div className="card-header bg-primary text-white">

        <h3>

          Acesso à Trilha

        </h3>

      </div>

      <div className="card-body">

        <div className="alert alert-info">

          Você está acessando a disciplina:

          <strong>

            {" "}

            {disciplina}

          </strong>

        </div>

        <form onSubmit={enviar}>

          {/* Campo Usuário */}

          <div className="mb-3">

            <label
              className="form-label"
            >

              Usuário

            </label>

            <input

              type="text"

              className="form-control"

              placeholder="Digite seu usuário"

              value={usuario}

              onChange={(e) =>

                setUsuario(
                  e.target.value
                )

              }

              required

            />

          </div>

          {/* Campo Senha */}

          <div className="mb-4">

            <label
              className="form-label"
            >

              Senha

            </label>

            <input

              type="password"

              className="form-control"

              placeholder="Digite sua senha"

              value={senha}

              onChange={(e) =>

                setSenha(
                  e.target.value
                )

              }

              required

            />

          </div>

          <button

            type="submit"

            className="btn btn-primary"

          >

            Entrar

          </button>

        </form>

      </div>

    </div>

  );

}

export default LoginForm;