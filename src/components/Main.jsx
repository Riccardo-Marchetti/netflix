import { Component } from "react";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class MainFilm extends Component {
  state = {
    saga: this.props.saga,
    movies: [],
    isLoading: true,
    isError: false,
  };
  fetchFilm = () => {
    const { saga } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=890e2f1d&s=${saga}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((films) => {
        console.log(films);
        this.setState({
          movies: films.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };
  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        {this.state.isLoading && (
          <Spinner
            className="ms-4 mt-2"
            animation="border"
            variant="danger"
          ></Spinner>
        )}
        {this.state.isError && (
          <Alert variant="danger">Impossibile caricare il contenuto </Alert>
        )}
        {movies.splice(0, 6).map((film) => {
          return (
            <Col className="mb-2 text-center px-1" key={film.imdbID}>
              <img
                className="img-fluid image-film justify-content-center "
                src={film.Poster}
                alt={film.Type}
              />
            </Col>
          );
        })}
      </>
    );
  }
}
export default MainFilm;
