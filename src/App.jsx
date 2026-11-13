// import { useState } from 'react'
// import heroImg from './assets/hero.png'
import img from './assets/1.jpg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import {MyFirstComponent , MySecondComponent} from './components/MyFirstComponent.jsx';
import { Header } from './components/Header.jsx';
import {withLoading} from './hoc/MySecondComponent.jsx';
const  MySecondComponentLoading = withLoading(Header);
import {Home} from './components/Home.jsx';
import { About } from './components/About.jsx';
import {Fashion} from './components/Fashion.jsx';
import {Fragrances} from './components/Fragance.jsx';
import { Footer } from './components/footer.jsx';
function App() {
  return (
  <>
  <header>
    <Header/>
  </header>

  <main>
    <Home/>
    <About/>
    <Fashion/>
    <Fragrances/>

  {/* <div><MySecondComponentLoading isLoading={false}/></div> */}
  </main>
  <footer>
    <Footer/>
  </footer>
 </>
  );
}
export default App;

// function opp() {

//   // return (
//   //   <h1>helloo</h1>
//   // )
//   let input = <input type="text" placeholder="name"/>;
//   let button = <button>submit</button>;
//   let form = (
//     <form>
//       {input}
//       {button}
//     </form>
//   );
//   return form;

// }
// function getage(birthyear){
//   return 2026-birthyear;
// }
// function age (){
//   return (
//     <>
//      <p style={{color:"red"}}>age:{getage(1980)}</p>
//      <img 
//       src={img}
//       className="my-profile"
//       alt="profile"
//       />
//     </>
 
//   );
// }
// const numbers = [1,2,3];
// function num (){
//   return (
//     <div>
//       {numbers.map((number)=> (
//         <div key={number}>{number}</div>
//       ))}
//     </div>
//   );
// }

// export default num 



