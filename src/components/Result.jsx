import React from 'react'
import { calculateInvestmentResults , formatter} from '../util/investment'

const Result = ({input}) => {
      const resultsData  = calculateInvestmentResults(input);
      const initialInvestment= resultsData[0].valueEndOfYear -resultsData[0].interest-resultsData[0].annualInvestment;
      console.log(resultsData);

  return (
    <div className = 'center'  id = 'result'>
        <table>
        <thead id ='result thead'>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest(year)</th>
            <th>Total Interest</th>
            <th> Invested Capital</th>
          </tr>
        </thead>
        <tbody id ='result tbody '>
          {resultsData.map((yearData) => {
            const totalInterest = yearData.valueEndOfYear- yearData.year * yearData.annualInvestment -initialInvestment;
            const amountInvested = yearData.valueEndOfYear - totalInterest;
            return(
            <tr >
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(amountInvested)}</td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Result