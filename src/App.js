import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register';
import  ContactsList  from './components/ContactsList'
import { Navbar } from './components/Navbar';


function App() {
  return (
   <>
    <Navbar></Navbar>
    <Routes>
      
       <Route path='register' element={<Register/>} > </Route>
       <Route path='contactsList' element={<ContactsList/>} > </Route>
     
    </Routes></>
  );
}

export default App;
