import { formatter, calculateInvestmentResults } from "../util/investment";

export default function ResultTable({ inputs }) {
    const derivedOutput = calculateInvestmentResults(inputs)
    const initialInvestment = derivedOutput[0].valueEndOfYear - derivedOutput[0].interest - derivedOutput[0].annualInvestment

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Investment (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {derivedOutput.map((yearRow) => 
                    {
                    const totalInterest = yearRow.valueEndOfYear - yearRow.annualInvestment * yearRow.year - initialInvestment;
                    const totalAmountInvested = yearRow.valueEndOfYear - totalInterest;
                    return <tr key={yearRow.year}>
                        <td className="center">{formatter.format(yearRow.year)}</td>
                        <td className="center">{formatter.format(yearRow.valueEndOfYear)}</td>
                        <td className="center">{formatter.format(yearRow.interest)}</td>
                        <td className="center">{formatter.format(totalInterest)}</td>
                        <td className="center">{formatter.format(totalAmountInvested)}</td>
                    </tr>}
                )}
            </tbody>
        </table>
    )
}