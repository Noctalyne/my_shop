import React, { createContext, useEffect, useState } from 'react'


export const TheContexte = createContext()

export const TheContexteProvider = ({ children }) => {

    // const shopping = [
    //     { id: 1, produit: "test1", img: "https://picsum.photos/450/300", prix: "10$", tag: "test1", countCart: '' },
    //     { id: 2, produit: "test2", img: "https://picsum.photos/450/300", prix: "15$", tag: "test2", countCart: '' },
    //     { id: 3, produit: "test3", img: "https://picsum.photos/450/300", prix: "15$", tag: "test3", countCart: '' },
    // ]





    // Fetch
    const [shopping, setShopping] = useState([])


    
    const fechData = async () => {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        const data = await response.json()
        setShopping(data)
    }
    useEffect(() => {fechData()}, [])

    console.log(shopping);

    //Panier Principal
    const [shopCart, setShopCart] = useState([]) //

    //"Composant qui stock le changement"
    // const [updateCartShop, setUpdateCartShop] = useState()

    // const [count, setCount] = useState(0);

    //Ajouter au panier
    const addCartSubmit = (produit) => {
        const itemHere = shopCart.find((item) => item.id === produit.id)

        if (itemHere) {
            const updateCart = shopCart.map((item) =>
                item.id === produit.id ? { ...item, quantite: item.quantite + 1 } : item);
            setShopCart(updateCart)
        } else {
            setShopCart([...shopCart, { ...produit, quantite: 1 }])
        }
    }


    //Supprimr du panier
    const suppCartSubmit = (id) => {
        const updateCart = [...shopCart];
        updateCart.splice(id, 1);
        setShopCart(updateCart);
    }

    const dataContexte = {
        shopping,
        shopCart,
        addCartSubmit,
        suppCartSubmit,
    }

    return (
        <TheContexte.Provider value={dataContexte}>
            {children}
        </TheContexte.Provider>
    )

}
