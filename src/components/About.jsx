import '../styles/style.css';
import img3 from '../assets/thierry.jpg';
export const About = () => {  
    return (
        <>         
        <section id="About">
                <h2>THE HOUSE OF MUGLER</h2>
                <img src={img3} alt="Mugler fashion"/>
                <h2>A visionary designer</h2>
                <p>Founded in 1974 by Thierry Mugler, the house redefined fashion through bold silhouettes and theatrical creativity</p>
            </section>
        </>  
    );
};