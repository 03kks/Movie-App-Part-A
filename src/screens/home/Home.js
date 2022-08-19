import React from "react";
import "./Home.css";
import "../../common/header/Header";
import Header from "../../common/header/Header.js";
import SingleLineImageList from "./movieList";
import moviesData from "../../common/moviesData";
import TitlebarImageList from "./leftImageList";
import SimpleCard, { userSelection } from "./filters";
import genres from "./genre";
import artists from "./artists";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: moviesData,
      genres: genres,
      artists: artists,
      userSelection: moviesData,
    };
  }

  filterHandler = () => {
    if (
      userSelection.name === "" &&
      userSelection.releaseDateEnd === "" &&
      userSelection.releaseDateStart === "" &&
      userSelection.genres.length === 0 &&
      userSelection.artists.length === 0
    ) {
      const state = this.state;
      state.userSelection = moviesData;
      this.setState(state);
      return moviesData;
    } 
    
    else {
      const filteredMovies = this.state.data.filter((movie) => {
        if (
          movie.title.toLowerCase() === userSelection.name.toLowerCase()||
          movie.genres.some((genre) => userSelection.genres.includes(genre)) ||parseInt(new Date(movie.release_date).getTime()) <=  parseInt(new Date(userSelection.releaseDateEnd).getTime())||
          parseInt(new Date(movie.release_date).getTime()) >=  parseInt(new Date(userSelection.releaseDateStart).getTime()) || movie.artists.some((artist) =>
            userSelection.artists.includes(
              `${artist.first_name} ${artist.last_name}`
            )
          )
        ) {
          console.log(userSelection.releaseDateStart);
          console.log(parseInt(new Date(movie.release_date).getTime()) >  parseInt(new Date(userSelection.releaseDateEnd).getTime()))
          return movie;
        }
        else
          return null;
      });

      const state = this.state;
      state.userSelection = filteredMovies;

      this.setState(state);
    }
  };

  render() {
    return (
      <div>
        <Header btnType="login" variant="contained" buttonName="LOGIN"/>
        <span className="heading">Upcoming Movies</span>
        <SingleLineImageList moviesData={this.state.data} />

        <div className="flex-container">
          <div className="left">
            <TitlebarImageList moviesData={this.state.userSelection} />
          </div>
          <div className="right">
            <SimpleCard
              genres={this.state.genres}
              artists={this.state.artists}
              filterHandler={this.filterHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
