import React from 'react'

const InputType = ({labelFor ,labelText ,inputType ,value,onChange ,name}) => {
  return (
    <>
     <div className='mb-3'>
        
     <div className="mb-3">
                <label htmlFor={labelFor} className="form-label">
                    {labelText}
                </label>
                <input 
                className="form-control"
                id="inputEmail4"
                type={inputType}
                 value={value}
                 name={name}
                 onChange ={onChange}/>
            </div>
            </div>
    </>
  )
}

export default InputType
