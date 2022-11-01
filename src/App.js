import { Route, Routes } from 'react-router-dom';
import  Register  from './components/Register';
import  ContactsList  from './components/ContactsList'
import  PropsGreet  from './components/propsGreet'
import { Navbar } from './components/Navbar';
import EditContact from './components/EditContact';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/MethodAsProps/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';


function App() {
  return (
   <>
    <div style={{flex:1,height:'100%'}}>
    <Navbar></Navbar>
    <div style={
      {flex:1,textAlign:'center',width:'100%',height:'100%',padding:50,flexGrow:1}
    }>
      <Routes >
        
        <Route path='register' element={<Register/>} > </Route>
        <Route path='contactsList' element={<ContactsList/>} > </Route>
        <Route path='editContact/:id' element={<EditContact/>} > </Route>
        <Route path='greet' element={<PropsGreet name="Pooja" heroname="Wonder Women"/>} > </Route>
        <Route path='count' element={<Counter/>} > </Route>
        <Route path='functionClick' element={<FunctionClick/>} > </Route>
        <Route path='eventbind' element={<EventBind/>} > </Route>
        <Route path='methodAsProps' element={<ParentComponent/>}> </Route>
        <Route path='userGreet' element={<UserGreeting/>}> </Route>
        <Route path='nameList' element={<NameList/>}> </Route>
    </Routes>
    </div>
    </div>
    </>
  );
}

export default App;
