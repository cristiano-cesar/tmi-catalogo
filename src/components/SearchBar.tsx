interface SearchBarProps {
  termo: string;
  onBuscar: (texto: string) => void;
}

function SearchBar({
  termo,
  onBuscar
}: SearchBarProps) {

  return (

    <input
      type="text"
      className="form-control mb-4"
      placeholder="Buscar trilha..."
      value={termo}
      onChange={(e) =>
        onBuscar(e.target.value)
      }
    />

  );
}

export default SearchBar;