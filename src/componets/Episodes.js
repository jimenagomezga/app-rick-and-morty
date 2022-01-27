import React from "react";
import "../styles/Episodes.css";
import titleEpisodes from "../images/2e1f6deee20d0445d9a656151d1cde4b.png";
import { gql, useQuery } from "@apollo/client";
import imageEpisodes from "../images/rick-morty-temporada2.jpeg";

const GET_EPISODES_LIST = gql`
  query getepisodeslist {
    episodes {
      results {
        episode
        name
        id
      }
    }
  }
`;

export default function Episodes() {
  const { loading, error, data } = useQuery(GET_EPISODES_LIST);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data.episodes.results);

  return (
    <div className="contencEpisodes">
      <div>
        <img src={titleEpisodes} alt="title2" />
      </div>
      <div className="contentEpisodes">
        {data.episodes.results.map((episode) => {
          return (
            <div className="episodes">
              <div className="displayEpisodes">
              <img src={imageEpisodes} alt="imageEpisodes" />
              </div>
              
              <div className="contentTitleE">
                
                <h2 key={episode.id}>Episode: {episode.episode}</h2>
                <h1>{episode.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
