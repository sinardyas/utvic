import React, { useCallback, useState } from 'react'

function useInputForm(defaultValue) {
  const [formValues, setFormValues] = useState(defaultValue || {})

  const handleChange = useCallback((e) => {
    const { id, value, type } = e.target

    if (type === 'file') {
      const { files } = e.target
      const [file] = files

      setFormValues(prevState => ({
        ...prevState,
        [id]: file,
      }))

      return
    }

    setFormValues(prevState => ({
      ...prevState,
      [id]: value,
    }))
  }, [])

  return [formValues, setFormValues, handleChange]
}

export default useInputForm;
