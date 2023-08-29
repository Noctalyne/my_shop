// import logo from './assets/logo.svg';
import '../style/App.css';

// Import Contexte des composants --> appeler  encapsuler dans l index
// import { TheContexteProvider } from './Contexte';

// Import route
import { Route, Routes } from 'react-router-dom';

// Import NavBar
import NavBar from './NavBar';

// Import "header"
// import Intitule from './assets/Intitule';

// Import shop
import Shop from './Shop';

//Import Fiche produit
import DetailsProduit from './DetailsProduit';

// Import Panier
import Panier from './Panier';

//Import aside
import AsidePanier from './AsidePanier';





function App() {
  return (
    // <TheContexteProvider>
    <div className="App">
      <header >
        {/* className="App-header"*/}

        <NavBar />


      </header>
      <main>
        <div className='anim-aside'>
          <AsidePanier />
        </div>

        
      </main>


      <Routes>

        {/* <Route path='' element={}/> */}
        {/* <Route path='' element={}/> */}
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<DetailsProduit />} />

        <Route path='/panier' element={<Panier />} />


      </Routes>

    </div>







    // </TheContexteProvider>

  );
}

export default App;
