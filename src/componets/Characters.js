import React, { useState } from "react";
import "../styles/Characters.css";
import titleCharacters from "../images/b6e8222427a166876861db4b63590858.png";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTES_LIST = gql`
  query getCharactesList {
    characters(page: 2, filter: { name: "rick" }) {
      results {
        id
        name
        image
      }
    }
  }
`;

function Characters() {
  const [busqueda, setBusqueda] = useState("");
  const [filteredCharacter, setFilteredCharacter] = useState([]);
  const [characters, setCharacters] = useState([]);

  const handleInput = (e) => {
    setBusqueda(e.target.value);
    const listaFiltrada = characters.filter((character) => {
      return character.name
        .toUpperCase()
        .includes(e.target.value.toUpperCase());
    });
    setFilteredCharacter(listaFiltrada);
  };

  const { loading, error } = useQuery(GET_CHARACTES_LIST, {
    onCompleted: (data) => {
      setCharacters(data.characters.results);
      setFilteredCharacter(data.characters.results);
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="contencCharacters">
      <div>
        <img src={titleCharacters} alt="title2" />
      </div>
      <div className="contentSearch">
        <input
          type="text"
          value={busqueda}
          placeholder="Busca tu personaje aquí"
          onChange={handleInput}
        />
        <button>SEARCH</button>
      </div>
      <div className="contentImages">
        {filteredCharacter.map((character) => {
          return (
            <div className="images">
              <img src={character.image} alt="imag" />
              <h1 key={character.id}> {character.name.toUpperCase()}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Characters;
