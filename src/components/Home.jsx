import '../styles/style.css';
import img1 from '../assets/HOME.jpg';
export const Home = () => {
    return (
     <>
        <section id="Home">
                        <div>
                        <h1> BEYOND THE ORDINARY </h1>
                        <p>A universe where fashion becomes art, the body becomes architecture, and imagination has no limits.</p>
                        <button className="btn">Discover the Mugler universe.  </button>
                        </div>  
                        <img src={img1} alt="Mugler fashion"/>
        </section>
     </>
    );
}