import axios from "axios";
import React from "react";
// import { Link } from "react-router-dom";


export default function Showtimes(props) {

    const { movieId } = props;

    const [movieData, setMovieData] = React.useState([])
    const [movieDays, setMovieDays] = React.useState([])

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)
        promise.then(response => { setMovieData(response.data) })
        promise.then(response => { setMovieDays(response.data.days) })

    }, []);

    return (
        <div className="catalog">
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
                                    <div className="movieHour"><h4>{value.showtimes[0].name}</h4></div>
                                    <div className="movieHour"><h4>{value.showtimes[1].name}</h4></div>
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



/* 

  {movieDays.map(value => (
                        <div className="movieDay">
                            <h3>{value.weekday} - {value.date}</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>{value[0].showtimes}</h4></div>
                                <div className="movieHour"><h4>{value[1].showtimes}</h4></div>
                            </div>
                        </div>
                    ))}

<div className="movieShowtimes">
                    {showtimes.map(movie => <Link to={`/sessoes/${movie.id}`}><img src={movie.posterURL} /></Link>)}
                </div>

<div className="movieWeek">
                        <div className="movieDay">
                            <h3>Quarta-feira - 24/06/2021</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>15:00</h4></div>
                                <div className="movieHour"><h4>15:00</h4></div>
                            </div>
                        </div>
                        <div className="movieDay">
                            <h3>Quarta-feira - 24/06/2021</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>15:00</h4></div>
                                <div className="movieHour"><h4>15:00</h4></div>
                            </div>
                        </div>
                        <div className="movieDay">
                            <h3>Quarta-feira - 24/06/2021</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>15:00</h4></div>
                                <div className="movieHour"><h4>15:00</h4></div>
                            </div>
                        </div>
                        <div className="movieDay">
                            <h3>Quarta-feira - 24/06/2021</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>15:00</h4></div>
                                <div className="movieHour"><h4>15:00</h4></div>
                            </div>
                        </div>
                        <div className="movieDay">
                            <h3>Quarta-feira - 24/06/2021</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>15:00</h4></div>
                                <div className="movieHour"><h4>15:00</h4></div>
                            </div>
                        </div>
                        <div className="movieDay">
                            <h3>Quarta-feira - 24/06/2021</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>15:00</h4></div>
                                <div className="movieHour"><h4>15:00</h4></div>
                            </div>
                        </div>
                        <div className="movieDay">
                            <h3>Quarta-feira - 24/06/2021</h3>
                            <div className="movieShowtimes">
                                <div className="movieHour"><h4>15:00</h4></div>
                                <div className="movieHour"><h4>15:00</h4></div>
                            </div>
                        </div>
                    </div>


*/