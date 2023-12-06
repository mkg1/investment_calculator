import Header from "./components/Header"
import InputBlock from "./components/InputBlock"
import ResultTable from "./components/ResultTable"
import { useState } from "react"

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 20
  });

  function handleInputChange(newValue, inputField) {
    setInputs((previousInputs) => {
        return {
        ...previousInputs,
        [inputField]: +newValue
        }
    });
  }

  const inputIsValid = inputs.duration >= 1;

  return (
    <>
      <Header />
      <InputBlock inputs={inputs} onFieldChange={handleInputChange} />
      {!inputIsValid && <p class="center">Pleae enter valid data!</p>}
      { inputIsValid && 
        <ResultTable inputs={inputs} />
      }
    </>
  )
}

export default App
