export default function InputBlock({inputs, onFieldChange}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={inputs.initialInvestment} onChange={(e) => onFieldChange(e.target.value, 'initialInvestment')}></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={inputs.annualInvestment} onChange={(e) => onFieldChange(e.target.value, 'annualInvestment')}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={inputs.expectedReturn} onChange={(e) => onFieldChange(e.target.value, 'expectedReturn')}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={inputs.duration} onChange={(e) => onFieldChange(e.target.value, 'duration')}></input>
                </p>
           </div>
        </section>
    )
}