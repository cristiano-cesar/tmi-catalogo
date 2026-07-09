interface Trilha {
  id: number;
  disciplina: string;
  descricao: string;
  recursos: string;
}

interface TrilhaCatalogoProps {

  trilhas: Trilha[];

  onSelecionar: (trilha: Trilha) => void;

}

function TrilhaCatalogo({

  trilhas,

  onSelecionar

}: TrilhaCatalogoProps) {

  if (trilhas.length === 0) {

    return (

      <div className="alert alert-warning">

        Nenhuma trilha encontrada.

      </div>

    );

  }

  return (

    <div className="row">

      {trilhas.map((trilha) => (

        <div
          className="col-md-6 col-lg-4 mb-4"
          key={trilha.id}
        >

          <div className="card h-100 shadow">

            <div className="card-header bg-primary text-white">

              <h5>

                <button

                  className="btn btn-link text-white text-decoration-none fw-bold p-0"

                  onClick={()=>{

                  onSelecionar(trilha);

                  }}

                  >

                  {trilha.disciplina}

                </button>

              </h5>

            </div>

            <div className="card-body">

              <p>

                {trilha.descricao}

              </p>

              <small>

                <strong>
                  Recursos:
                </strong>

                {" "}
                {trilha.recursos}

              </small>

            </div>

          </div>

        </div>

      ))}

    </div>

  );
}

export default TrilhaCatalogo;