import React, { useContext } from 'react'
import { TheContexte } from './Contexte';



export default function Panier() {

  // const {shopping} = useContext(TheContexte);

  // Pour afficher les artcile du panier
  const { shopCart } = useContext(TheContexte);

  // const item = shopCart.map()
  console.log({ shopCart })

  return (

    <div>
      {shopCart.map(item => (
        <div>
          
          <div className='container w-25 justify-content-center'>
            <h1 className='m-5'> Panier </h1>
            <div className='card '>
              <p>{item.title} </p>
              <img src={item.image} alt='#' className=' card-img-top m-3'></img>

              <p>{item.price} $ </p>
              {/* <p>{item.produit} </p> --> Tranformer en quantité */}
              {/* <span>0</span>   --> ajout compte produit*/}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
