const NumericalAnalysis = ({ showDesc, onToggle }) => {
    return (
        <div className="intro">
            <button type="button" className="collapsible" onClick={() => onToggle(showDesc.id)}>Numerical Analysis</button> <br/><br/>
            {showDesc.isShown ? (<div className="intro-text">
            <p>Numerical Analysis is the study of algorithms
            to solve problems of continuous mathematics.</p>
            <p>The types of problems studied by numerical analysis
            are continuous, thus approximations are necessary.</p>
            </div>) : (<h1 className="intro-question" style={{textAlign: "center"}}>What is Numerical Analysis?</h1>) } <br/>
        </div>
    )
}

export default NumericalAnalysis
