import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addORremoveFavourit,changeCount} from "../../redux/actions/Favourit";
import { addToFavourits, removeFavourit } from "../../redux/movieSlice";

export default function Movie(props) {
  const { movie } = props;
  const fav = useSelector((state) => state.movie.favourits);
  l
  const dispatch = useDispatch();
  const addFavourit = ( movie) => {
    // const newData = [...fav];
    if (!fav.includes(movie)) {
      dispatch(addToFavourits(movie));
      return;
    }else{
      dispatch(removeFavourit(movie));
    }
 
  };
  useEffect(() => {
    
  },[fav])

  return (
    <div className="card">

      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        style={{ maxHeight: 500 }}
        className="card-img-top img-fluid"
        alt="..."
      />
            <button
        onClick={(event) => addFavourit(event, movie)}
        className="btn btn-dark"
      >
        <i className={`fs-3 fa-solid fa-star ${fav.includes(movie)?'bg-primary':'bg-light'}`}></i>
      </button>
      <div className="card-body text-center">
        <p className="card-text">{movie.title}</p>
        <p className="card-text text-danger">{movie.vote_average}</p>
        <Link to={`/movie-details/${movie.id}`} className="btn btn-primary">
          Movie Details
        </Link>
      </div>
    </div>
  );
}
