import axios from "axios";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Seat from "./seat";



export default function Seats(props) {

    const params = useParams();
    const navigate = useNavigate();
    const URL = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`;

    const { movieSession, setSessionInfo, sessionInfo } = props;
    const [movieData, setMovieData] = React.useState([]);
    const [movieSeat, setMovieSeat] = React.useState(null);
    const [reserved, setReserved] = React.useState([]);
    const [reservedNumber, setReservedNumber] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get(URL)
        promise.then(response => { setMovieData(response.data.movie); setMovieSeat(response.data.seats) })
    }, []);

    function isNotNull() {
        if (movieSeat !== null) {
            return movieSeat.map(value => <Seat
                id={value.id} number={value.name} available={value.isAvailable} reserved={reserved} setReserved={setReserved} reservedNumber={reservedNumber} setReservedNumber={setReservedNumber}
            />)
        }
    }
    const seats = isNotNull();

    const [name, setName] = React.useState('')
    const [CPF, setCPF] = React.useState('')

    function sucessRequest(event) {
        event.preventDefault();
        setSessionInfo(
            {
                movie: `${movieData.title}`,
                date: `${movieSession}`,
                seats: reservedNumber,
                userName: `${name}`,
                userCPF: `${CPF}`
            });

        let requestPost = {
            ids: reservedNumber,
            name: `${name}`,
            cpf: `${CPF}`
        };
        const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", requestPost);

        request.then(() => {
            setName('');
            setCPF('');
            requestPost = {
                ids: "",
                name: "",
                cpf: ""
            };
            if (reservedNumber.length > 0) {
                navigate('/sucesso');
            } else {
                alert('Você precisa escolher ao menos uma poltrona para realizar o pedido!')
            }
        })
        request.catch(() => alert('Opa, algo inesperado aconteceu!'));
    }



    return (
        <div className="seatsBody">
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <main>
                <h2>Selecione o(s) assento(s)</h2>
                <div className="seatList">
                    {seats}
                </div>
                <div className="seatExemplification">
                    <div className="seatSelected">
                        <div className="seatDemoGreen"></div>
                        <p>Selecionado</p>
                    </div>
                    <div className="seatAvailable">
                        <div className="seatDemoGrey"></div>
                        <p>Disponível</p>
                    </div>
                    <div className="seatUnavailable">
                        <div className="seatDemoYellow"></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="userInfo">
                    <form onSubmit={(event) => sucessRequest(event)}>
                        <h3>Nome do comprador:</h3>
                        <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Digite seu nome..." value={name} required ></input>
                        <h3>CPF do comprador:</h3>
                        <input type="number" onChange={(event) => setCPF(event.target.value)} placeholder="Digite seu CPF..." value={CPF} required ></input>
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