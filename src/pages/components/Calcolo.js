import { useState } from "react"
import radice from "../../functions/funzioni";

const Calcolo = ({ nameOfClass, setRisultato }) => {

    const [radicando, setRadicando] = useState("")
    const [ripetizioni, setRipetizioni] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        switch(nameOfClass) {
            case "babilonese":
                var ris = radice.Babilonese(radicando, ripetizioni)
                break
            case "errore":
                var ris = radice.Errore(radicando, ripetizioni)
                break
            case "tangenti":
                var ris = radice.Tangenti(radicando, ripetizioni)
                break
            case "inverso":
                var ris = 1 / radice.Inverso(radicando, ripetizioni)
                break
        }

        setRisultato(ris)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="number" id={"radicando" + nameOfClass} placeholder="Radicando" value={radicando} onChange={(e) => setRadicando(e.target.value)}></input> <br></br> <br></br>
                <input type="number" id={"ripetizioni" + nameOfClass} placeholder="Ripetizioni massime" value={ripetizioni} onChange={(e) => setRipetizioni(e.target.value)}></input> <br></br> <br></br>
                <input type="submit" value="Calcola!" className="calcola"></input>
            </form>
        </>
    )
}

export default Calcolo
