import React, { useState } from 'react'

const UserInput = ({handleInputChange ,formData}) => {
    // const [formData, setFormData] = useState({
    //     initialInvestment: '',
    //     annualInvestment: '',
    //     expectedReturn: '',
    //     duration:''
    //   });
    
    //   const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData(prevValue  => {
    //         return{
    //         ...prevValue,
    //         [name]: value
    //     }}
    //     );
    //   };
    console.log(formData);
    
  return <section id = "user-input" >
    <div  className = "input-group">
        <p>
          <label>
            INITIAL INVESTMENT:
            <input
              type="number"
              name="initialInvestment"
              value={formData.initialInvestment}
              onChange={handleInputChange}
              required
            />
          </label>
        </p>
        <p>
          <label>
            ANNUAL INVESTMENT:
            <input
             type="number"
             name="annualInvestment"
             value={formData.annualInvestment}
              onChange={handleInputChange}
              required
            />
          </label>
        </p>
        <p>   
          <label>
           EXPECTED RETURN:
           <input
              type="number"
              name="expectedReturn"
              value={formData.expectedReturn}
              onChange={handleInputChange}
              required
            />
          </label>
        </p>
        <p>   
          <label>
           DURATION:
           <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
            />
          </label>
        </p>      
    </div>
</section>
}

export default UserInput
