import '../styles/style.css';
export const Footer = () => {  
    return (
        <>         
        <section id="footer">

            <div className="footer-content">

        
                <div className="footer-brand">
                    <h2>MUGLER.</h2>
                    <p>
                        Beyond fashion. Beyond imagination.
                        Discover the universe of Mugler.
                    </p>
                </div>

        
                <div className="footer-links">
                    <h3>EXPLORE</h3>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">The House</a></li>
                        <li><a href="#Fashion">Fashion</a></li>
                        <li><a href="#Fragrance">Fragrance</a></li>
                    </ul>
                </div>

        
                <div className="footer-links">
                    <h3>DISCOVER</h3>
                    <ul>
                        <li><a href="#Fashion">Collections</a></li>
                        <li><a href="#fashion">Design & Creativity</a></li>
                        <li><a href="#Fragrance">Perfume Universe</a></li>
                    </ul>
                </div>

            </div>

    
            <div className="footer-bottom">
                <p>&copy; 2026 MUGLER. Educational project.</p>
                <p>Designed with creativity.</p>
            </div>

        </section>
        </>  
    );
};