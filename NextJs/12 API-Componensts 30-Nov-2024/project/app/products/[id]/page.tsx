import React from 'react'



   
const page = async (props) => {
    const id = props.params.id;

const singlebookdata = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
const Jasonbookdata = await singlebookdata.json(); 


  return (
    <div>
    <h1 className='font-bold text-2xl'>Dynamic Routes</h1>  
    <h2>Name: {Jasonbookdata.name} </h2>
    <h2>id: {Jasonbookdata.id} </h2>
    <h2>author: {Jasonbookdata.author} </h2>
    <h2>type: {Jasonbookdata.type} </h2>
    <h2>price: {Jasonbookdata.price} </h2>
    <h2>Av: {Jasonbookdata.available}</h2>
    <h2>Current Stock: {Jasonbookdata["current-stock"]} </h2>

    </div>
  )}

export default
