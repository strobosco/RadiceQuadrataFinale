import { useState } from "react";
import radice from "../../functions/funzioni";

const ParagoneInput = ({ risultato, setRisultato, showHead, setShowHead }) => {

    const [radicando, setRadicando] = useState("")
    const [ripetizioni, setRipetizioni] = useState("")
    const [confronti, setConfronti] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        const risultato = []

        for(var i = 0; i < confronti; i++) {
            const risBab = radice.Babilonese(radicando, ripetizioni)
            const risErr = radice.Errore(radicando, ripetizioni)
            const risTan = radice.Tangenti(radicando, ripetizioni)
            const risInv = 1 / radice.Inverso(radicando, ripetizioni)

            risultato[i] = {
                confronto: i + 1,
                babilonese: risBab,
                errore:risErr,
                tangenti: risTan,
                inverso: risInv,
            }
        }


        setRisultato(risultato)
        console.log(risultato)

        if(showHead == false) {
            setShowHead(true)
        }
    }

    return (
        <div className="tabella-output">
            <form onSubmit={onSubmit}>
                <input type="number" placeholder="Radicando" value={radicando} onChange={(e) => setRadicando(e.target.value)}></input> <br></br> <br></br>
                <input type="number" placeholder="Ripetizioni massime" value={ripetizioni} onChange={(e) => setRipetizioni(e.target.value)}></input> <br></br> <br></br>
                <input type="number" placeholder="Numero confronti" value={confronti} onChange={(e) => setConfronti(e.target.value)}></input> <br></br> <br></br>
                <input type="submit" value="Paragona!" className="calcola"></input>
            </form> 
        </div>
    )

}

export default ParagoneInput;