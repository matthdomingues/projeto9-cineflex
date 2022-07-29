import axios from "axios";
import React from "react";
import styled from "styled-components";

export default function Seats(props) {

    const { movieSession, movieId, movieSessionId } = props;
    const [movieData, setMovieData] = React.useState([]);
    const [movieSeat, setMovieSeat] = React.useState([]);

    // api para extrair os assentos
    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${movieId}/seats`)
        promise.then(response => { setMovieSeat(response.data.seats) })
        promise.then(response => { setMovieData(response.data.movie) })
    }, []);

    console.log(movieSeat);

    function Seat() {
        return (
            <>
                {movieSeat.map(value =>
                    <div className="seat">
                        <h6>{value.name}</h6>
                    </div>
                )}
            </>
        )
    }

    return (
        <div className="seatsBody">
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <main>
                <h2>Selecione o(s) assento(s)</h2>
                <div className="seatList">
                    <Seat />
                </div>
                <div className="seatExemplification">
                    <div className="seatSelected">
                        <div className="seatGreen"></div>
                        <p>Selecionado</p>
                    </div>
                    <div className="seatAvailable">
                        <div className="seatGrey"></div>
                        <p>Disponível</p>
                    </div>
                    <div className="seatUnavailable">
                        <div className="seatYellow"></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="userInfo">
                    <form>
                        <h3>Nome do comprador:</h3>
                        <input placeholder="Digite seu nome..."></input>
                        <h3>CPF do comprador:</h3>
                        <input placeholder="Digite seu CPF..." ></input>
                        <button type="submit">Reservar assento(s)</button>
                    </form>
                </div>
            </main>
            <footer>
                <img src={movieData.posterURL} />
                <div className="movieInfo">
                    <h5>{movieData.title}</h5>
                    <h5>{movieSession}</h5>
                </div>
            </footer>
        </div >
    )
}

const Assento = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;

`