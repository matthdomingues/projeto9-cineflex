import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Seat() {
    const params = useParams();

    const [movieSeat, setMovieSeat] = React.useState([]);

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`)
        promise.then(response => { setMovieSeat(response.data.seats) })
    }, []);

    return (<>
        {movieSeat.map(value =>
            value.isAvailable ?
                (<div className={"seatGrey"}>
                    <h6>{value.name}</h6>
                </div>) :
                (<div key={value.id} onClick={() => alert("Esse assento não está disponível")} className="seatYellow">
                    <h6>{value.name}</h6>
                </div>)
        )}
    </>)
}

/* 

onClick={ }
const Trigger = styled.div`

.seat {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background: #C3CFD9; ${(props) => (props.clicked ? "#C3CFD9" : "#FBE192")};
    border: 1px solid ${props => (props.clicked === true ? "#808F9D" : "#F7C52B")};
    border-radius: 17px;
    margin-left: 7px;
    margin-bottom: 18px;
}
 
` */