// write your custom hook here to control your checkout form
import {useState} from 'react';
 const useForm = () => {
     
    const [values, setValues] = useState();
  
    const handleChanges = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(formFields);
    };
  
    return [values, handleChanges, clearForm];
 }
export default useForm 