import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";


export default function Showtimes(props) {

    const params = useParams();
    console.log(params);

    const { movieId, setMovieSession, setMovieSessionId } = props;

    const [movieData, setMovieData] = React.useState([])
    const [movieDays, setMovieDays] = React.useState([])

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        promise.then(response => { setMovieData(response.data) })
        promise.then(response => { setMovieDays(response.data.days) })
    }, []);

    return (
        <div className="showtimesBody">
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <main>
                <div className="pageTitle">
                    <h2>Selecione o horário</h2>
                    <div className="movieDays">
                        {movieDays.map(value => (
                            <div className="movieDay">
                                <h3>{value.weekday} - {value.date}</h3>
                                <div className="movieShowtimes">
                                    <Link to={`/assentos/${value.showtimes[0].id}`}> <div onClick={() => {
                                        setMovieSession(`${value.weekday} - ${value.showtimes[0].name}`);
                                        setMovieSessionId(value.id)
                                    }} className="movieHour"><h4>{value.showtimes[0].name}</h4></div> </Link>
                                    <Link to={`/assentos/${value.showtimes[1].id}`}>  <div onClick={() => {
                                        setMovieSession(`${value.weekday} - ${value.showtimes[1].name}`);
                                        setMovieSessionId(value.id)
                                    }} className="movieHour"><h4>{value.showtimes[1].name}</h4></div> </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <footer>
                <img src={movieData.posterURL} />
                <div className="movieInfo">
                    <h5>{movieData.title}</h5>
                </div>
            </footer>
        </div >
    )
}