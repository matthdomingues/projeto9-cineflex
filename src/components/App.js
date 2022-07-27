import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Catalog from "../components/catalog/catalog";
import Showtimes from "../components/showtimes/showtimes";

//import "../components/seats/seats.css";
//import Seats from "../components/seats/seats";

//import "./components/request/request.css";
//import Request from "./components/request/request";

export default function App() {

  const [movieId, setMovieId] = React.useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog setMovieId={setMovieId} />} />
        <Route path="/sessoes/:idFilme" element={<Showtimes movieId={movieId} />} />
      </Routes>
    </BrowserRouter>
  );
}


/*

<Seats movie={movie} />

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog movie={movie} movieId={movieId} setmovieId={movieId}/>} />
        <Route path="/sessoes/:idFilme" element={<Showtimes movie={movie} />} />
      </Routes>

    </BrowserRouter>

*/

// <Route path="/assentos/:idSessao" element={<Seats />}/>

// <Route path="/sucesso" element={<Request />}/>