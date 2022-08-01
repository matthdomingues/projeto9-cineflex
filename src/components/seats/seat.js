import { useState, useEffect } from "react";

export default function Seat(props) {

    const [choose, setChoose] = useState('seatGrey');
    const [select, setSelect] = useState(true);

    const { id, number, available, reservedID, setReservedID, reservedNumber, setReservedNumber } = props;

    function selectSeat(text) {
        if (text === false) {
            setChoose('seatGrey');
            setSelect(true);
            for (let i = 0; i < reservedID.length; i = i + 1) {
                if (reservedID[i] === id) {
                    reservedID.splice(i, 1);
                }
                if (reservedNumber[i] === number) {
                    reservedNumber.splice(i, 1);
                }
            }
        } else if (text === true) {
            setChoose('seatGreen');
            setSelect(false);
            setReservedID([...reservedID, id]);
            setReservedNumber([...reservedNumber, number]);
        }
    }

    return (
        <>
            {available ?
                (<div onClick={() => selectSeat(select)} key={id} className={choose}>
                    <h6>{number}</h6>
                </div>) :
                (<div key={id} onClick={() => alert("Esse assento não está disponível")} className="seatYellow">
                    <h6>{number}</h6>
                </div>)}
        </>
    );
}