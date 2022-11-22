import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MainLayout from './Components/MainLayout';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainLayout />
      </div>
    </BrowserRouter>
  );
}

export default App;
