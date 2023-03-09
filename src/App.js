import './App.css';
import Reaction from './images/icon-reaction.svg';
import Memory from './images/icon-memory.svg';
import Verbal from  './images/icon-verbal.svg';
import Visual from './images/icon-visual.svg';
function App() {
  return (
    <div className='main'>
    <div className='container'>
      <div className='text-item'>
        Your Result
        <div className='circle'>
        <div className='number'>76</div>
        <div className='inner-text'>
        of 100
        </div>
      </div>
      <div className='text'>Great</div>
      <br/>
      <div className='content'>
      You scored higher than 65% of the people who have
      taken these tests.
      </div>
      </div>
      </div>
      <div className='second-container'>
        Summary
    <div className='reaction'>
      <span style={{display:'flex'}}>
        <img src={Reaction}/> 
        &nbsp;Reaction </span><span style={{color:'rgb(45, 45, 77)'}}>80<span style={{color:'gray'}}>/100</span></span></div>
        <div  className='memory'>
        <span style={{display:'flex'}}>
        <img src={Memory}/>
        &nbsp; Memory
        </span><span style={{color:'rgb(45, 45, 77)'}}>92<span style={{color:'gray'}}>/100</span></span></div>
        <div className='verbal'>
        <span style={{display:'flex'}} >
        <img src={Verbal}/>
      &nbsp; Verbal</span><span style={{color:'rgb(45, 45, 77)'}}>80<span style={{color:'gray'}}>/100</span></span></div>
         <div className='visual'>
        <span style={{display:'flex'}} >
        <img src={Visual}/>
        &nbsp; Visual</span> <span style={{color:'rgb(45, 45, 77)'}}>72<span style={{color:'gray'}}>/100</span></span></div>
        <button>Contiue</button>
        </div>
      </div>
  );
}

export default App;
