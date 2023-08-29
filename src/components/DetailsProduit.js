import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TheContexte } from './Contexte'

export default function DetailsProduit() {

  const {shopping} = useContext(TheContexte);

  const {id} = useParams()
  const retour = useNavigate()

  const article =  shopping.find(item => item.id === parseInt(id))

  // const produitIndex = parseInt(index, 10);
  // const produit = produits[produitIndex]
  
console.log({shopping})
console.log({article})

  return (
    <div>
      {/* <h2 className='mt-5'>Details Produit</h2> */}

      <h3 className='mt-5'>{article.title}</h3>
      <img src={article.image} alt='#' className='card-product' />
      <p>{article.price} $</p>
      <p>{article.tag}</p>
      {/* <p>{}</p> */}
      <button onClick={() => retour ('/shop')} className='btn btn-outline-dark'>Retour</button>
    </div>
  )
}
