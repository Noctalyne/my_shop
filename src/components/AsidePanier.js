import React, { useContext } from 'react'
import { TheContexte } from './Contexte'

import Panier from './Panier'

export default function AsidePanier() {

    const { shopCart } = useContext(TheContexte);

    return (
        <div>
            <aside>
                <h4>Votre Panier</h4>
                <div >
                    {shopCart.map(item => (
                        <div className='container mb-2'>
                            <ul className='list-group'>
                                <li className='list-group-item d-flex justify-content-between align-items-center'>
                                    <div className='col'> {item.title} </div>
                                    <div className='col'>{item.price} $ </div>
                                    <span className='badge bg-dark text-white ms-1 rounded-pill'> 1 </span>{/**{item.quantity} */}
                                </li>
                            </ul>
                        </div>

                    ))}
                </div>
            </aside >
        </div >
    )
}
{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus suscipit urna, in facilisis turpis congue vitae.
        Nunc porta dignissim nisl, a pulvinar tellus aliquam eu. Mauris in aliquam lorem. Ut velit sapien, vestibulum sed turpis
        id, rutrum ultrices purus. Maecenas augue augue, tempus imperdiet neque eget, porta vehicula massa. Integer vehicula quis
        urna ac pulvinar. In sit amet commodo orci, at ultrices leo. Nullam non venenatis nibh. Phasellus nibh orci, malesuada in
        metus non, pretium sollicitudin velit. 
    </p>                
                    
                    
                    
<div className='container row'>
    <div className='col'> {item.title} </div>                        
    <div className='col'>{item.price} $ </div>
    <div className='col'> {/**{item.quantity} </div> 
</div>
*/}
