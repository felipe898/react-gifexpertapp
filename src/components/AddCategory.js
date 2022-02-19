import React, { useState } from 'react';
import PropTypes from 'prop-types';

                            
export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{

        //console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{  //no se recargue toda la pagina
        e.preventDefault();   //cuando se presion entrar solo va cambiar el input y no toda la pagina
        
        if (inputValue.trim().length > 2) {  //si esto es mayo a dos letras ,llamar esta instrccion para que agregue
            setcategories(cats => [inputValue,...cats]);
            setInputValue('');  //borrar el valor para que no se repita

        }
      

    }

  return (

    
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
        
    </form>
       
        
  )
}


AddCategory.propTypes={
    setcategories: PropTypes.func.isRequired
}