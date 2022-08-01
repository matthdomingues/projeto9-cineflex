import { Link } from "react-router-dom"

export default function Request() {

    return (
        <div className="requestBody">
            <header>
                <h1>CINEFLEX</h1>
            </header>
            <main>
                <div className="requestTitle">
                    <h2>Pedido feito
                        com sucesso!</h2>
                </div>
                <div className="requestData">
                    <div className="requestMovie">
                        <h3>Filme e sessão</h3>
                        <h4>Enola Holmes</h4>
                        <h4>24/06/2021 - 15:00</h4>
                    </div>
                    <div className="requestSeat">
                        <h3>Ingressos</h3>
                        <h4>Assento 1</h4>
                        <h4>Assento 2</h4>
                    </div>
                    <div className="requestInfo">
                        <h3>Comprador</h3>
                        <h4>Nome: Matheus Domingues</h4>
                        <h4>CPF: 999.999.999-99</h4>
                    </div>
                </div>
                <Link to={`/`}><button><h5>Voltar para Home</h5></button></Link>
            </main>
        </div>
    )

}