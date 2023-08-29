import React from 'react'

export default function CartButton() {

    // const [openAside, setOpenAside] = useState(false);

    // const handleOpendAside = (e) => {
    //     e.preventDefault();
    //     setOpenAside(true)
    // }

    return (
        <form className='d-flex '>
            <button className='btn btn-outline-dark'  > {/**onClick={handleOpendAside} */}
                <i className='bi-cart-fill me-1'></i>
                Panier
                <span className='badge bg-dark text-white ms-1 rounded-pill'>0</span>
            </button>
        </form>
    )
}
