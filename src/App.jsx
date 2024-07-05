import Header from "./components/Header"
import './index.css';
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";


function App() {
  const [formData, setFormData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 9,
    duration:10
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevValue  => {
        return{
        ...prevValue,
        [name]: +value
    }}
    );
  };

  return (
    <>
    <Header />
    <UserInput handleInputChange={handleInputChange} formData={formData}/>
    <Result input={formData} />
    </>
  )
}

export default App
