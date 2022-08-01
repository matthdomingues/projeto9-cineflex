import { useState, useEffect } from "react";

export default function Seat(props) {

    const [choose, setChoose] = useState('seatGrey');
    const [select, setSelect] = useState(true);

    const { id, number, available, reserved, setReserved, reservedNumber, setReservedNumber } = props;

    function selectSeat(text) {
        if (text === false) {
            setChoose('seatGrey');
            setSelect(true);
            for (let i = 0; i < reserved.length; i = i + 1) {
                if (reserved[i] === id) {
                    reserved.splice(i, 1);
                }
                if (reservedNumber[i] === number) {
                    reservedNumber.splice(i, 1);
                }
            }
        } else if (text === true) {
            setChoose('seatGreen');
            setSelect(false);
            setReserved([...reserved, id]);
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