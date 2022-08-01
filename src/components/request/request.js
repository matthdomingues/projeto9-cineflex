import { Link } from "react-router-dom"

export default function Request(props) {

    const { sessionInfo } = props;

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
                        <h4>{sessionInfo.movie}</h4>
                        <h4>{sessionInfo.date}</h4>
                    </div>
                    <div className="requestSeat">
                        <h3>Ingressos</h3>
                        {sessionInfo.seats.map(value => <h4>Assento: {value}</h4>)}
                    </div>
                    <div className="requestInfo">
                        <h3>Comprador</h3>
                        <h4>Nome: {sessionInfo.userName}</h4>
                        <h4>CPF: {sessionInfo.userCPF}</h4>
                    </div>
                </div>
                <Link to={`/`}><button><h5>Voltar para Home</h5></button></Link>
            </main>
        </div>
    )

}