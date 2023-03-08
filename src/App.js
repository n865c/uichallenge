import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
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
      <span>
        <img src={Reaction}/>
        &nbsp; Reaction
      </span> 80/100</div>
        <div  className='memory'>
        <span>
        <img src={Memory}/>
        &nbsp; Memory
        </span>92/100</div>
        <div className='verbal'>
        <span >
        <img src={Verbal}/>
        &nbsp; verbal</span>61/100</div>
        <div className='visual'>
        <span >
        <img src={Visual}/>
        &nbsp; Visual</span>72/100
        </div>
        
        <button>Contiue</button>
        </div>
      </div>
  );
}

export default App;
