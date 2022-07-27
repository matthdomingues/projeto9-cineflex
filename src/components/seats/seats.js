import React from "react";

export default function Seats(props) {


    return (
        <div className="catalog">
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <main>
                <h2>Selecione o(s) assento(s)</h2>
                <div className="seatList">
                </div>
                <div className="userInfo">
                    <h3></h3>
                    <input></input>
                    <h3></h3>
                    <input></input>
                </div>
            </main>
            <footer>
                <img />
                <div className="movieInfo">
                    <h5>2067</h5>
                    <h5>Quinta-feira - 15:00</h5>
                </div>
            </footer>
        </div >
    )

}