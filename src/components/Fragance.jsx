import '../styles/style.css';
import img7 from  '../assets/angel.jpg';
import img8 from  '../assets/alien.jpg';
import img9 from  '../assets/amen.jpg';
export const Fragrances = () => {
    return (
     <>
                 <section  id="Fragrance">

                <div className="fragrances">
                    <p className="subtitle">THE ART OF PERFUMERY</p>
                    <h2>THE MUGLER FRAGRANCE UNIVERSE</h2>
                    <p>
                        Discover a world of extraordinary scents,
                        iconic bottles and unforgettable fragrance creations.
                    </p>
                </div>

                <div className="fragrance-cards">

                    
                    <div className="fragrance-card">

                        <img src={img7} alt="Mugler perfume"/>

                        <div className="card-content"> 
                            <h3>ANGEL</h3>
                            <p>
                                Launched in 1992, Angel revolutionized
                                perfumery with its gourmand notes of
                                chocolate, vanilla and patchouli.
                            </p>
                        </div>

                    </div>

                    
                    <div className="fragrance-card">

                        <img src={img8} alt="Mugler perfume "/>

                        <div className="card-content">
                            <h3>ALIEN</h3>
                            <p>
                                Launched in 2005, Alien is known for
                                its mysterious character, featuring
                                jasmine, woody notes and amber.
                            </p>
                        </div>

                    </div>

                
                    <div className="fragrance-card">

                        <img src={img9} alt="Mugler perfume"/>

                        <div className="card-content">
                            <h3>A*MEN</h3>
                            <p>
                                Introduced in 1996, A*Men brought
                                a bold masculine fragrance identity
                                with coffee, patchouli and woody notes.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

     </>
     );
};