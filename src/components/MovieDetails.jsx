import { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MoviesDetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState(null);
  const [comments, setComments] = useState([]);
  console.log(params.movieId);

  useEffect(() => {
    const fetchid = () => {
      fetch(`http://www.omdbapi.com/?apikey=890e2f1d&i=${params.movieId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("errore");
          }
        })
        .then((data) => {
          setMovies(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchComment = () => {
      fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM1MWUyMGUyMTA2NTAwMTllYTkyZmUiLCJpYXQiOjE3MDc0MTcxMjAsImV4cCI6MTcwODYyNjcyMH0.1S-5Rbl9bHlMmNZyX7OAK--YSmTve13OZ7WXu7ukyBM",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("error");
          }
        })
        .then((comm) => {
          setComments(comm);
          console.log(comm);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchid();
    fetchComment();
  }, [params.movieId]);

  // return (
  //   <Card style={{ width: "18rem" }}>
  //     <Card.Img variant="top" src={movies.Poster} />
  //     <Card.Body>
  //       <Card.Title>{movies.Title}</Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card's content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  // );
  return (
    <div className="text-center text-white">
      {movies && (
        <div>
          <h4 className="mt-3">{movies.Title}</h4>
          <img
            className="img-fluid image-film justify-content-center car"
            src={movies.Poster}
            alt={movies.Type}
          />
          <ul
            className="d-flex flex-column align-items-center mt-4"
            style={{ listStyleType: "none" }}
          >
            {comments.map((comm) => {
              return (
                <li>
                  {comm._id} - {comm.comment} - {comm.rate}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoviesDetails;
