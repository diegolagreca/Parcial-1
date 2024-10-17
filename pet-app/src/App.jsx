import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PetDetails from './components/PetDetails';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pet/:id" element={<PetDetails />} />
      <Route path="/add-pet" element={<AddPet />} />
      <Route path="/edit-pet/:id" element={<EditPet />} /> 
    </Routes>
  );
}

export default App;
