import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function Catalog(props) {

    const params = useParams();

    const { setMovieId, setMovieSession, movieSession } = props;

    const [movieURL, setMovieURL] = React.useState([])

    React.useEffect(() => {
        const promise = axios.get(baseURL)
        promise.then(response => { setMovieURL(response.data) })
    }, []);

    return (
        <div className="catalogBody">
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <main>
                <div className="pageTitle">
                    <h2>Selecione o filme</h2>
                </div>
                <br />
                <div className="movieList">
                    {movieURL.map(value =>
                        <Link to={`/sessoes/${value.id}`}>
                            <img onClick={() => setMovieId(value.id)} src={value.posterURL} />
                        </Link>)}
                </div>
            </main>
        </div >
    )

}

const baseURL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";