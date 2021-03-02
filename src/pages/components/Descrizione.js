const Descrizione = ({ nameOfClass }) => {

    const chooseDesc = (nameOfClass) => {

        const descBabilonese = "Il metodo babilonese è il metodo più antico per approssimare la radice. \
        E' un algoritmo basato sulle approssimazioni successive della media aritmetica di due numeri, \
        il valore valore sarà sempre maggiore del valore della radice stessa.";
        const descErrore = "Il metodo con controllo dell'errore approssima il valore della radice \
        controllando l'aumento di precisione tra due iterazioni dell'algoritmo babilonese.";
        const descTangenti = "Il metodo delle tangenti sfrutta le proprietà delle tangenti per \
        realizzare approssimazioni successive. Il valore che viene calcolato corrisponde all'intersezione tra \
        l'asse delle x e la tangente alla retta di una funzione in un punto. Il metodo ha il maggior grado di \
        efficienza quando il valore iniziale è vicino al valore della radice";
        const descInverso = "Il metodo dell'inverso calcola il reciproco del valore della radice. E' un \
        algoritmo molto preciso, con una velocità di computazione alta.";

        switch(nameOfClass){
            case "babilonese":
                return (<>
                <p>{descBabilonese}</p>
                <img src="https://miro.medium.com/max/237/0*eZi6AX0tWAmI-ICy.png" />
                </>) ;
                break;
            case "errore":
                return (<>
                <p>{descErrore}</p>
                </>);
                break;
            case "tangenti":
                return (<>
                <p>{descTangenti}</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/NewtonIteration_Ani.gif/450px-NewtonIteration_Ani.gif" />
                </>);
                break;
            case "inverso":
                return (<>
                    <p>{descInverso}</p>
                </>)
            default:
                return "Il metodo selezionato non esiste"
        }
    }

    return (
        <>{chooseDesc(nameOfClass)}</>
    )
}

export default Descrizione
