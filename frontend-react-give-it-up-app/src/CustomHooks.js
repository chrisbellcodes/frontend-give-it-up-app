import { useState } from 'react'

const useCreateViceForm = (callback) => {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    amount: 0
  })

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    callback()
  }

  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs =>({
      ...inputs,
      [e.target.name]: e.target.value
    }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useCreateViceForm
