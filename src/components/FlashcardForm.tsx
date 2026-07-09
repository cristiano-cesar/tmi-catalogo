import { useEffect, useState } from "react";

/*====================================================
 Interface do Flashcard
====================================================*/

export interface Flashcard {

  disciplina: string;

  tema: string;

  termo: string;

  definicao: string;

  imagem: string;

  video: string;

}

/*====================================================
 Interface das Props
====================================================*/

interface FlashcardFormProps {

  disciplina: string;

  onSalvar: (flashcard: Flashcard) => void;

}

/*====================================================
 Componente
====================================================*/

function FlashcardForm({

  disciplina,
  onSalvar

}: FlashcardFormProps) {

  /*====================================================
   Estados
  ====================================================*/

  const [tema, setTema] =
    useState("");

  const [termo, setTermo] =
    useState("");

  const [definicao, setDefinicao] =
    useState("");

  const [imagem, setImagem] =
    useState("");

  const [video, setVideo] =
    useState("");

  /*====================================================
   useEffect
  ====================================================*/

  useEffect(() => {

    document.title =
      `Flashcard - ${disciplina}`;

  }, [disciplina]);

  /*====================================================
   Envio
  ====================================================*/

  function enviar(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    const novoFlashcard: Flashcard = {

      disciplina,

      tema,

      termo,

      definicao,

      imagem,

      video

    };

    onSalvar(novoFlashcard);

    // Limpa os campos

    setTema("");

    setTermo("");

    setDefinicao("");

    setImagem("");

    setVideo("");

  }

function obterThumbnailYoutube(
  url: string
) {

  try {

    const videoId =
      new URL(url)
        .searchParams
        .get("v");

    if (!videoId) {

      return "";

    }

    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  }

  catch {

    return "";

  }

}

  /*====================================================
   Interface
  ====================================================*/

  return (

    <div className="card shadow mt-5">

      <div className="card-header bg-primary text-white">

        <h3>

          Cadastro de Flashcard

        </h3>

      </div>

      <div className="card-body">

        <form onSubmit={enviar}>

          {/* Disciplina */}

          <div className="mb-3">

            <label className="form-label">

              Disciplina

            </label>

            <input

              className="form-control"

              value={disciplina}

              readOnly

            />

          </div>

          {/* Tema */}

          <div className="mb-3">

            <label className="form-label">

              Tema

            </label>

            <input

              type="text"

              className="form-control"

              value={tema}

              onChange={(e) =>
                setTema(e.target.value)
              }

              required

            />

          </div>

          {/* Termo */}

          <div className="mb-3">

            <label className="form-label">

              Termo

            </label>

            <input

              type="text"

              className="form-control"

              value={termo}

              onChange={(e) =>
                setTermo(e.target.value)
              }

              required

            />

          </div>

          {/* Definição */}

          <div className="mb-3">

            <label className="form-label">

              Definição

            </label>

            <textarea

              className="form-control"

              rows={4}

              value={definicao}

              onChange={(e) =>
                setDefinicao(e.target.value)
              }

              required

            />

          </div>

          {/* Imagem */}

          <div className="mb-3">

            <label className="form-label">

              URL da Imagem (Opcional)

            </label>

            <input

              type="url"

              className="form-control"

              value={imagem}

              onChange={(e) =>
                setImagem(e.target.value)
              }

            />

          </div>

          {

          imagem &&

          <div className="mb-4">

              <label className="form-label">

                  Pré-visualização da imagem

              </label>

              <br/>

              <img

                  src={imagem}

                  alt="Prévia"

                  className="img-thumbnail"

                  style={{

                      maxWidth:"250px"

                  }}

                  onError={(e)=>{

                      e.currentTarget.style.display="none";

                  }}

              />

          </div>

          }

          {/* Vídeo */}

          <div className="mb-4">

            <label className="form-label">

              Link do Vídeo

            </label>

            <input

              type="url"

              className="form-control"

              value={video}

              onChange={(e) =>
                setVideo(e.target.value)
              }

              required

            />

          </div>
          {

          video &&

          obterThumbnailYoutube(video) &&

          <div className="mb-4">

              <label className="form-label">

                  Miniatura do vídeo

              </label>

              <br/>

              <img

                  src={

                      obterThumbnailYoutube(video)

                  }

                  alt="Miniatura"

                  className="img-thumbnail"

                  style={{

                      maxWidth:"250px"

                  }}

              />

          </div>

          }

          <button

            className="btn btn-primary"

            type="submit"

          >

            Salvar Flashcard

          </button>

        </form>

      </div>

    </div>

  );

}

export default FlashcardForm;