import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Import logo
import logo from './assets/logo.svg';

// Import du bouton Panier page d'accueil
import CartButton from './assets/CartButton';



// import Panier from './Panier'
import AsidePanier from './AsidePanier';


export default function NavBar() {

    // const [openAside, setOpenAside] = useState(false);

    // const handleOpendAside = (e) => {
    //     e.preventDefault();
    //     setOpenAside(true)


    // }

    return (
        <>
            <nav className='navbar navbar-expand-lg App-header '>{/* navbar-light bg-light */}
                <div className='container px-4 px-lg-5 '>

                    <img src={logo} className="App-logo navbar-brand" alt="logo" />

                    {/* Bouton burger en cas de petit écran */}
                    {/* <button className='navbar-toggler' type='button'
                        data-bs-toggle="collapse" data-bs-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button> */}

                    <div className=' navbar-collapse' id="navbarContent">
                        {/* collapse */}

                        <ul className='navbar-nav me-auto mb-2 ms-lg-4'>{/*  */}

                            <li className='nav-item'> <Link to="/home"> <div className='nav-link'>Home</div> </Link> </li>

                            <li className='nav-item'> <Link to="/about"> <div className='nav-link'>About</div> </Link> </li>

                            <li className='nav-item'> <Link to="/shop"> <div className='nav-link'>Shop</div> </Link> </li>

                            {/* Juste ici pour voir les éléments recupérer */}
                            <li className='nav-item'> <Link to="/panier"> <div className='nav-link'>Panier</div> </Link> </li>



                        </ul>

                        <div className='nav-item'>
                            {/* <button className='btn btn-outline-dark'> */}
                            <CartButton />
                            {/* </button> */}

                            {/* { openAside ? <AsidePanier/> : null } */}
                        </div>
                        {/*onClick={handleOpendAside}*/}
                        {/*<Link to="/panier">   </Link>*/}



                    </div>
                </div>
            </nav>

        </>

    )
}
