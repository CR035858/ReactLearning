import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import MyWelcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import NewMessage from './components/NewMessage';
import MyCounter from './components/MyCounter';
import NewGreet from './components/NewGreet';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from 'ls./components/ParentComponent';
function App() {
  return (
    <div className="App">
      <ParentComponent />
      <EventBind />

      <ClassClick />


      <FunctionClick />



      <NewGreet name = 'Adams' heroName = 'SuperMan' />
      <MyCounter />
      <NewMessage />
        <Greet name='Harish' heroName='BatMan' >
           <p>This is Child Prop</p> 
          </Greet>
      
         
        <Greet name='Suresh' heroName='SPiderMan'/>
        <Greet name='Mahesh' heroName='SuperMan'/>
      
        <h3>Enjoy learning reactJS...</h3>
        <MyWelcome name='Harish' heroName='BatMan'/>
        <MyWelcome name='Suresh' heroName='SPiderMan'/>
        <MyWelcome name='Mahesh' heroName='SuperMan'/>
        <Hello/>
        <Message />
    </div>
  );
}

export default App;
 