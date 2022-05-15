//import logo from './logo.svg';


import './App.css';
import {HomeBar} from './HomeBar';
import {Story} from './Story'

function App() {
  return (
    <div className="App">
      <HomeBar/>
      <div class="main-info">
        <h1>Alberta Youth Programming Club</h1>
        <p>
          We are the Alberta Youth Programming Club, this site was created by Titan, Idk what else to write here, just making placeholder stuff I guess
        </p>
      </div>
      <div class="core">
        <Story text="So you can actually change the text of a seperate object by just passing a prop through. Sweet!"/>
        <Story text="Because of that, I can have each one of these print out something different"/>
        <Story text="And make my life easier for adding extra stories/things later! (WHY WONT THIS GUY STAY)"/>
        <Story text="This would also make it possible to update this website through a webAPI or something extra, instead of actually editing the hard code."/>
        <Story text="All the rest of these are to test wrapping. Easy!"/>
        <Story text="All the rest of these are to test wrapping. Easy!"/>
        <Story text="All the rest of these are to test wrapping. Easy!"/>
        <Story text="All the rest of these are to test wrapping. Easy!"/>
        <Story text="All the rest of these are to test wrapping. Easy!"/>
      </div>
    </div>
  );
}

export default App;
