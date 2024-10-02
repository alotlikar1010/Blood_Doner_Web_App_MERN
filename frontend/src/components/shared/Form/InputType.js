import React from 'react'

const InputType = ({labelFor ,labelText ,inputType ,value,onChange ,name}) => {
  return (
    <>
     <div className='mb-3'>
        
     <div class="mb-3">
                <label htmlfor={labelFor} class="form-label">
                    {labelText}
                </label>
                <input 
                class="form-control"
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
