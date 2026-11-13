import '../styles/style.css';
import img2 from  '../assets/logo1.png';
export const Header = () => {
    return (
     <>
        <div>
            <img src={img2} alt="mugler logo"/>
        </div>
            
        <nav className="navbar">
            <ul className="nav-links">
                <li><a className="link" href="#Home">Home</a></li>
                <li><a className="link" href="#About">About</a></li>
                <li><a className="link" href="#Fashion">Fashion</a></li>
                <li><a className="link" href="#Fragrance">Fragrance</a></li>
            </ul>    
        </nav>
            
      </>  

    );
};
