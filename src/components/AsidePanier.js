import React, { useContext } from 'react'
import { TheContexte } from './Contexte'

import Panier from './Panier'

export default function AsidePanier() {

    const { shopCart } = useContext(TheContexte);

    return (
        <div>
            <aside>
                <h4>Votre Panier</h4>
                <div>
                    {shopCart.map(item => (
                        <div>
                            <p>{item.title} </p>                       
                            <p>{item.price} $ </p>
                            <p>{item.quantity} $ </p>

                        </div>
                    ))}
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus suscipit urna, in facilisis turpis congue vitae.
                    Nunc porta dignissim nisl, a pulvinar tellus aliquam eu. Mauris in aliquam lorem. Ut velit sapien, vestibulum sed turpis
                    id, rutrum ultrices purus. Maecenas augue augue, tempus imperdiet neque eget, porta vehicula massa. Integer vehicula quis
                    urna ac pulvinar. In sit amet commodo orci, at ultrices leo. Nullam non venenatis nibh. Phasellus nibh orci, malesuada in
                    metus non, pretium sollicitudin velit.</p> */}





            </aside>
        </div>
    )
}
