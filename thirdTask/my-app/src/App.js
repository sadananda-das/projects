import React, { useEffect, useState } from "react";

const PAGE_SIZE = 10;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PAGE_SIZE}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        setPokemonList(data.results);
        setTotal(data.count);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch Pokémon. Try again later.");
        setLoading(false);
      });
  }, [offset]);

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 900,
        margin: "auto",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ef5350",
          fontWeight: "bold",
          fontSize: "4rem",
        }}
      >
        Pokédex
      </h1>
      {loading && (
        <p style={{ textAlign: "center", fontSize: 18, color: "#666" }}>
          Loading...
        </p>
      )}
      {error && (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          {error}
        </p>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 15,
          paddingTop: 10,
        }}
      >
        {!loading &&
          !error &&
          pokemonList.map((pokemon, idx) => {
            const pokemonId = offset + idx + 1;
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            return (
              <div
                key={pokemon.name}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  padding: 16,
                  backgroundColor: "#fafafa",
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(255, 0, 0, 0.1)",
                  textAlign: "center",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(255, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(255, 0, 0, 0.1)";
                }}
              >
                <img
                  src={imageUrl}
                  alt={pokemon.name}
                  style={{ width: 96, height: 96 }}
                />
                <p
                  style={{
                    marginTop: 10,
                    fontWeight: "600",
                    textTransform: "capitalize",
                    color: "#333",
                    fontSize: 16,
                  }}
                >
                  {pokemonId}. {pokemon.name}
                </p>
              </div>
            );
          })}
      </div>
      {!loading && !error && (
        <div
          style={{
            marginTop: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
          }}
        >
          <button
            onClick={() => setOffset(Math.max(0, offset - PAGE_SIZE))}
            disabled={offset === 0}
            style={{
              padding: "8px 16px",
              backgroundColor: offset === 0 ? "#ccc" : "#ef5350",
              border: "none",
              borderRadius: 6,
              color: "white",
              cursor: offset === 0 ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: 16,
              transition: "background-color 0.3s",
            }}
          >
            Previous
          </button>
          <span
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#555",
            }}
          >
            Page {Math.floor(offset / PAGE_SIZE) + 1} of{" "}
            {Math.ceil(total / PAGE_SIZE)}
          </span>
          <button
            onClick={() =>
              setOffset(Math.min(total - PAGE_SIZE, offset + PAGE_SIZE))
            }
            disabled={offset + PAGE_SIZE >= total}
            style={{
              padding: "8px 16px",
              backgroundColor: offset + PAGE_SIZE >= total ? "#ccc" : "#ef5350",
              border: "none",
              borderRadius: 6,
              color: "white",
              cursor: offset + PAGE_SIZE >= total ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: 16,
              transition: "background-color 0.3s",
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
