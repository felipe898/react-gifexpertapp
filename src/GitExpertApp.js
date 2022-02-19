import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState( ['One Punch']);

    //const handleAdd = () =>{
        //setcategories([...categories,'HunterXHunter']);
      //  setcategories(['HunterXHunter',...categories]);  //estamos obteniendo las categorias mas la nueva
       // setcategories(cats => [...cats, 'HunterXHunter']);
    //}

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setcategories={setcategories}/>
        <hr/>

        

        <ol>
           {
               categories.map( category => 
                   <GifGrid 
                      key = {category}
                      category={category}/>
                   )
           }
        </ol>
      </>
    
  )


}

