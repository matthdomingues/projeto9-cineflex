import axios from "axios";
import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Seat from "./seat";

export default function Seats(props) {

    const params = useParams();
    const navigate = useNavigate();

    const { movieSession } = props;
    const [movieData, setMovieData] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`)
        promise.then(response => {
            setMovieData(response.data.movie)
        })
    }, []);

    //const [name, setName] = useState('')
    //const [cpf, setCpf] = useState('')
    //const [form, setForm] = useState({ ids: '', name: '', cpf: '' })

    /* function handleForm(event) {
        event.preventDefault();
        setForm = { ...form, name, cpf }

        // const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", form )
        // navigate("/sucesso")

        console.log(form);
        setName('');
        setCpf('');
    } */

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
                    {/* { <form onSubmit={handleForm}> }
                        <h3>Nome do comprador:</h3>
                        <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Digite seu nome..." value={name} required ></input>
                        <h3>CPF do comprador:</h3>
                        <input type="number" onChange={(event) => setCpf(event.target.value)} placeholder="Digite seu CPF..." value={cpf} required ></input>
                        <button type="submit">Reservar assento(s)</button>
                    </form>*/ }
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