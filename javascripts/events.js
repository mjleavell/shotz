import {singleMovieView, writeSingleMovie} from "./components/movieComponent.js";

import { loadMovies } from "./data/movieData.js";
// overwrites old selector; case insensitive
jQuery.expr[":"].icontains = function(obj, index, meta) {
  return (
    jQuery(obj)
      .text()
      .toUpperCase()
      .indexOf(meta[3].toUpperCase()) >= 0
  );
};

const searchEvent = () => {
  $("#search-bar").on("keyup", e => {
    if (e.keyCode === 13) {
      const searchInput = $(e.target).val();
      $(".card-search").not(`:icontains(${searchInput})`).closest(".locations").hide();
      $(`.card-search:icontains(${searchInput})`).closest(".locations").show();
      $(e.target).val("");
    }
  });
};

const buttonEvent = () => {
  $(".btn-time").on("click", e => {
    // .html probably isnt the best way but it works
    const buttonId = $(e.target).html();
    if (buttonId === "Show All") {
      $(".locations").show();
    } else {
      $(".locations")
        .not(`:icontains(${buttonId})`)
        .hide();
      $(`.locations:icontains(${buttonId})`).show();
    }
  });
};

const bindEvents = () => {
  buttonEvent();
  searchEvent();
};

const movieClickEvent = () => {
  $("#movie").on("click", ".card-movie", e => {
    const clickedMovieId = $(e.target).closest(".card-movie").attr("id");
    $("#initial-view").hide();
    $("#movie-view").show();
    singleMovieView(clickedMovieId);
    backEvent();
    loadMovies().then(movies => {
      return writeSingleMovie(movies, clickedMovieId);
    });
  });
};

const backEvent = () => {
  $("#btn-back").on("click", () => {
    $("#single-movie").html("");
    $("#movie-view-location").html("");
    $("#movie-view").hide();
    $("#initial-view").show();
  });
};

export { bindEvents, movieClickEvent, backEvent };