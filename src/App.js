import { Route, Routes, Navigate } from 'react-router-dom';
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
import LifeCycleA from './components/LifeCycleA';
import  Fragment  from './components/Fragment';
import ParentComp from './components/ParentComp';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import CompositionDemo from './components/ComponentComposition/CompositionDemo';
import PropDrillParent from './components/PropsDrilling.js/PropDrillParent';
import DashBoard from './Pages/DashBoard';
import Sidebar from './components/Sidebar';


function App() {
  return (
   <>
   {/* Header */}
   <Navbar></Navbar>
   {/* Wrapper Contatiner */}
   <div style={{height:'100%',display:'flex',position:'relative',overflow:'hidden'}}>
    {/* Sidebar */}
      <Sidebar></Sidebar>
      <div style={{height:'100%', backgroundColor:' #f1f1f1',padding:40,flexGrow:1,overflow:'hidden'}}>
        {/* Content Wrapper */}
          <div style={{backgroundColor:'#ffffff', padding:30, height:'100%',textAlign:'center', borderRadius: 5,overflow:'hidden'}}>
            {/* All Concepts Routes */}
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
                <Route path='lifeCycle' element={<LifeCycleA/>}> </Route>
                <Route path='fragment' element={<Fragment/>}> </Route>
                <Route path='pureComp' element={<ParentComp/>}> </Route>
                <Route path='ref' element={<FocusInput/>}> </Route>
                <Route path='portalc' element={<PortalDemo/>}> </Route>
                <Route path='composition' element={<CompositionDemo/>}> </Route>
                <Route path='propDrill' element={<PropDrillParent/>}> </Route>
                <Route path='dashboard' element={<DashBoard/>}> </Route>

                {/* 👇️ redirect to /dashboard when user goes to / */}
                <Route path="/" element={<Navigate to="/dashboard" />} />

                {/* 👇️ only match this when no other routes match */}
                <Route
                  path="*"
                  element={
                    <div>
                      <h2>404 Page not found</h2>
                    </div>
                  }
                  />
            </Routes>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;
