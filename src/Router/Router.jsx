import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "../App";
import PageDepense from '../components/Depense/PageDepense';
import Aide from "../components/Help";
import Depense from "../components/Help";
import DonneeDepense from '../components/Depense/DonneeDepense';
import DonneeRevenue from '../components/Revenue/DonneeRevenue';
import Famille from '../components/Famille/Famille';
import ExampleClasse from '../components/Parametre';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PageDepense />} />
          <Route path="aide" element={<Aide />} />
          <Route path='depenses' element={<Depense/>}/>
          <Route path='donnee' element={<DonneeDepense/>}/>
          <Route path='revenue' element={<DonneeRevenue/>}/>
          <Route path='famille' element={<Famille/>}/>
          <Route path='parametre' element={<ExampleClasse/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
