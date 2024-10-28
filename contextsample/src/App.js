import logo from './logo.svg';
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentF';

function App() {
  return (
    <div className="App">
      <h3>Welcome to Context </h3>
      <UserProvider value="Great Learning"> 
        <ComponentC />
       </UserProvider> 
    </div>
  );
}

export default App;
