import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ParentComponent1 from './components/ParentComponent1';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameList1 from './components/NameList1';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styless from './appStyles.module.css'
import Form from './components/Form';
import Lifecyclea from './components/Lifecyclea';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
function App() {
  return (
    <div className="App">
      <Table />
     {/*  <FragmentDemo />*/}
      {/*}
      <Lifecyclea /> */}
     {/*   <Form /> */}
     { 
     /* <h1 className ='error'>Error</h1>
      <h1 className = {styless.success}>Success</h1>
      Hello
      <UserGreeting />

   
      <br></br>
      <Inline />
      <Stylesheet primary = {true}/>
      <ParentComponent1/>
      <UserGreeting />
       <NameList /> 
       -----------
      <NameList1 />
      <ParentComponent /> */} 
     { /* <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      
      <Greet name='Harsha' heroName = 'BatMan' >
        <p>Child Element</p>
        </Greet>
      <Greet name='Kiran' heroName = 'SuperMan'>
        <button>Click </button>
        </Greet>
      <Greet name='Murali' heroName = 'SpriderMan'/>
      <Welcome name='Harsha' heroName = 'BatMan'/>
      <Welcome name='Kiran' heroName = 'SuperMan'/>
      <Welcome name='Murali' heroName = 'SpriderMan'/>
  <Hello /> */ } 
    </div>
  );
}

export default App;
