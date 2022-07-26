import teste from "./teste.png"

export default function Catalog() {

    return (
        <div className="catalog">
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <main>
                <div className="pageTitle">
                    <h2>Selecione o filme</h2>
                </div>
                <br />
                <div className="movieList">
                    <img src={teste} />
                    <img src={teste} />
                    <img src={teste} />
                    <img src={teste} />
                    <img src={teste} />
                    <img src={teste} />
                    <img src={teste} />
                    <img src={teste} />
                </div>
            </main>
        </div >
    )

}