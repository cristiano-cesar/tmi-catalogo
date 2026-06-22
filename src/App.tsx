import { useState } from "react";

import SearchBar from "./components/SearchBar";
import TrilhaCatalogo from "./components/TrilhaCatalogo";

interface Trilha {
  id: number;
  disciplina: string;
  descricao: string;
  recursos: string;
}

function App() {

  const [busca, setBusca] =
    useState("");

  const [trilhas] =
    useState<Trilha[]>([

      {
        id: 1,
        disciplina: "Português",
        descricao:
          "Leitura e interpretação textual.",
        recursos:
          "Texto, Áudio, Flashcards"
      },

      {
        id: 2,
        disciplina: "História",
        descricao:
          "Brasil Colônia e Império.",
        recursos:
          "Texto, Vídeo, Quiz"
      },

      {
        id: 3,
        disciplina: "Geografia",
        descricao:
          "Regiões brasileiras.",
        recursos:
          "Mapa, Vídeo, Flashcards"
      },

      {
        id: 4,
        disciplina: "Matemática",
        descricao:
          "Operações básicas.",
        recursos:
          "Texto, Áudio, Atividades"
      },
      {
        id: 5,
        disciplina: "Biologia",
        descricao:
          "Seres vivos.",
        recursos:
          "Texto, Áudio, Atividades"
      },
      {
        id: 6,
        disciplina: "Inglês",
        descricao:
          "Present Continuous.",
        recursos:
          "Texto, Áudio, Atividades"
      }
    ]);

  const trilhasFiltradas =
    trilhas.filter((trilha) =>

      trilha.disciplina
        .toLowerCase()
        .includes(
          busca.toLowerCase()
        )

    );

  return (

    <div className="container py-5">

      <h1 className="text-center mb-4">

        Trilha Multimodal Inclusiva

      </h1>

      <p className="text-center">

        Catálogo de Trilhas de Aprendizagem

      </p>

      <SearchBar
        termo={busca}
        onBuscar={setBusca}
      />

      <TrilhaCatalogo
        trilhas={trilhasFiltradas}
      />

    </div>

  );
}

export default App;