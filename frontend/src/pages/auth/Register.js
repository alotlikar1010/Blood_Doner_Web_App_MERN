import React from 'react'
import Form from "../../components/shared/Form/Form";
const Register = () => {
  return (
    <>
    <div className='row g-0'> 
    <div className='col-md-8 form-banner'>

<img src="./assets/banner1.jpg" alt="loginImage" />
</div>
<div className='col-md-4 form-container'>

<Form formType={"register"} submitBtn={"Register"} formTitle={"Registration Page"}   />
</div>


    </div>
    </>
  )
}

export default Register
