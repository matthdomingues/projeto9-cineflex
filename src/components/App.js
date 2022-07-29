import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "../components/catalog/catalog";
import Showtimes from "../components/showtimes/showtimes";
import Seats from "../components/seats/seats";

//import "./components/request/request.css";
//import Request from "./components/request/request";

export default function App() {

  const [movieId, setMovieId] = React.useState(0);
  const [movieSession, setMovieSession] = React.useState("")
  const [movieSessionId, setMovieSessionId] = React.useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog setMovieId={setMovieId} />} />
        <Route path="/sessoes/:idFilme" element={<Showtimes movieId={movieId} setMovieSession={setMovieSession} setMovieSessionId={setMovieSessionId} />} />
        <Route path="/assentos/:idSessao" element={<Seats movieId={movieId} movieSession={movieSession} movieSessionId={movieSessionId} />} />
      </Routes>
    </BrowserRouter>
  );
}

// <Route path="/sucesso" element={<Request />}/>