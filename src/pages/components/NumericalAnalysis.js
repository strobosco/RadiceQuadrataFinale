const NumericalAnalysis = ({ showDesc, onToggle }) => {
    return (
        <div className="intro">
            <button type="button" className="collapsible" onClick={() => onToggle(showDesc.id)}>Numerical Analysis</button> <br/><br/>
            {showDesc.isShown ? (<>
            <p>Numerical Analysis is the study of algorithms
            to solve problems of continuous mathematics.</p>
            <p>The types of problems studied by numerical analysis
            are continuous, thus approximations are necessary.</p>
            </>) : (<p style={{textAlign: "center"}}>What is Numerical Analysis?</p>) } <br/>
        </div>
    )
}

export default NumericalAnalysis
