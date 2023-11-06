
import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  handleSearch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=I9LQvL30976V3FKHoXHkfpGAQD6I1fVQ&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({ gifs: data.data.slice(0, 3) }); // Update state with the first 3 gifs
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;