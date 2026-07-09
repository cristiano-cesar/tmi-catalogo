import { useState } from "react";

import SearchBar from "./components/SearchBar";
import TrilhaCatalogo from "./components/TrilhaCatalogo";
import LoginForm from "./components/LoginForm";
import FlashcardForm from "./components/FlashcardForm";
import type { Flashcard } from "./components/FlashcardForm";

/*==========================================
 Interface dos dados da Trilha
==========================================*/

export interface Trilha {

  id: number;

  disciplina: string;

  descricao: string;

  recursos: string;

}

function App() {

  /*==========================================
   Estados
  ==========================================*/

  // Campo de busca
  const [busca, setBusca] =
    useState("");

  // Disciplina selecionada
  const [trilhaSelecionada,
    setTrilhaSelecionada] =
    useState<Trilha | null>(null);

  // Usuário realizou login?
  const [usuarioLogado,
    setUsuarioLogado] =
    useState(false);

  // Flashcards cadastrados
  const [flashcards,
    setFlashcards] =
    useState<Flashcard[]>([]);

  /*==========================================
   Lista inicial
  ==========================================*/

  const [trilhas] =
    useState<Trilha[]>([

      {
        id: 1,
        disciplina: "Português",
        descricao: "Leitura e interpretação textual.",
        recursos: "Texto, Áudio e Flashcards"
      },

      {
        id: 2,
        disciplina: "História",
        descricao: "Brasil Colônia e Império.",
        recursos: "Texto, Vídeo e Quiz"
      },

      {
        id: 3,
        disciplina: "Geografia",
        descricao: "Regiões brasileiras.",
        recursos: "Mapa, Vídeo e Flashcards"
      },

      {
        id: 4,
        disciplina: "Matemática",
        descricao: "Operações fundamentais.",
        recursos: "Texto, Áudio e Atividades"
      }

    ]);

  /*==========================================
   Filtro
  ==========================================*/

  const trilhasFiltradas =
    trilhas.filter((trilha) =>

      trilha.disciplina
        .toLowerCase()
        .includes(
          busca.toLowerCase()
        )

    );

  /*==========================================
   Callback Login
  ==========================================*/

  function realizarLogin(
    usuario: string
  ) {

    console.log(
      "Usuário:",
      usuario
    );

    setUsuarioLogado(true);

  }

  /*==========================================
   Callback Flashcard
  ==========================================*/

  function salvarFlashcard(
    flashcard: Flashcard
  ) {

    setFlashcards([

      ...flashcards,

      flashcard

    ]);

    alert(
      "Flashcard cadastrado com sucesso!"
    );

  }

  /*==========================================
   Interface
  ==========================================*/

  return (

    <div className="container py-5">

      <h1 className="text-center mb-3">

        Trilha Multimodal Inclusiva

      </h1>

      <p className="text-center mb-4">

        Biblioteca de Trilhas de Aprendizagem

      </p>

      {/* Campo de Busca */}

      <SearchBar

        termo={busca}

        onBuscar={setBusca}

      />

      {/* Catálogo */}

      <TrilhaCatalogo

        trilhas={trilhasFiltradas}

        onSelecionar={

          setTrilhaSelecionada

        }

      />

      {/* Login */}

      {

        trilhaSelecionada &&

        !usuarioLogado &&

        <LoginForm

          disciplina={
            trilhaSelecionada.disciplina
          }

          onLogin={
            realizarLogin
          }

        />

      }

      {/* Cadastro Flashcard */}

      {

        trilhaSelecionada &&

        usuarioLogado &&

        <FlashcardForm

          disciplina={
            trilhaSelecionada.disciplina
          }

          onSalvar={
            salvarFlashcard
          }

        />

      }

      {/* Quantidade cadastrada */}

      {

        flashcards.length > 0 &&

        <div className="alert alert-success mt-4">

          <strong>

            Flashcards cadastrados:

          </strong>

          {" "}

          {flashcards.length}

        </div>

      }

    </div>

  );

}

export default App;