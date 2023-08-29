import React, { useContext, useState } from 'react';
import { TheContexte } from './Contexte';
import { Link } from 'react-router-dom';

import Intitule from './assets/Intitule';
// import DetailsProduit from './DetailsProduit';



//Gestion affichage des produits
export default function Shop() {

    const { shopping } = useContext(TheContexte);

    const { addCartSubmit } = useContext(TheContexte)

    const [filter, setFilter] = useState();

    const filterProduit = filter ? shopping.filter(produit => produit.tag === filter) : shopping
    // const filterProduit = filter ? shopping.filter(produit => produit.tag === filter) : shopping
    

    // console.log(filterProduit)


    return (
        <div >
            <Intitule />
            <select className='btn btn-outline-dark mt-5 ' value={filter} onChange={c => setFilter(c.target.value)}>
                {shopping.map(produit => (
                    <option value={produit.category}>{produit.category}</option>
                ))
                }
            </select>


            <div>
                <ul > {/*className='shopCard' la classe ici permet la mise en scene */}
                    {filterProduit.map(article => (

                        <section className='py-5'>

                            <div className='container px-4 px-lg-5  mt-5'>{/*  */}

                                <div className='row gx-4  row-cols-2 gx-lg-5 row-cols-md-3 row-cols-xl-4 justify-content-center '>{/*  */}

                                    <div className='col mb-5'>

                                        <div key={article.id} className='card h-100'>
                                            {/* Lien pour accéder au détails produit */}
                                            <Link to={`/shop/${article.id}`}>
                                                <img className="card-img-top " src={article.image} alt='#' />{/*wImgCard*/}
                                            </Link>
                                            <div className='card-body p-4'>
                                                <div className="text-center">
                                                    <h5 className='fw-bolder'>{article.title}</h5>
                                                    <p>{article.price}</p>
                                                </div>
                                            </div>

                                            <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                                                <div className='text-center'>
                                                    {/* Mettre le liens vers le panier */}
                                                    <button className='btn btn-outline-dark mt-auto' onClick={(e) => addCartSubmit(article)}>
                                                        Ajouter au panier
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    ))
                    }
                </ul>
            </div>

            {/* <div className='shopCard'>
            {dataProduit.map((item) => (
                <div key={item.id}>
                    < img src={item.img} alt='#' />
                    <h5>{item.produit}</h5>
                    <p>{item.prix}</p>
                    <p> ajouter au panier </p>
                </div>
            ))}
        </div> */}
        </div >
    )
}
