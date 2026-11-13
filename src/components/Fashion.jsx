import '../styles/style.css';
import img4 from  '../assets/silouhette.jpg';
import img5 from  '../assets/collection.jpg';
import img6 from  '../assets/material.jpg';
export const Fashion = () => {
    return (
     <>


        <section id="Fashion">
            <div className="fashion-cards">


                <div className="fashion-card">
                    <img src={img4} alt="Mugler fashion"/>

                    <div className="silhouettes">
                        <h3>SIGNATURE SILHOUETTES</h3>
                        <p>
                        Discover Mugler's iconic hourglass shapes,
                            exaggerated shoulders, sculpted waists
                            and architectural tailoring.
                        </p>
                    </div>
                </div>

            
                <div className="fashion-card">
                    <img src={img5} alt="Mugler  fashion"/>

                    <div className="card-content">
                        <h3>ICONIC COLLECTIONS</h3>
                        <p>
                            Explore unforgettable collections,
                            experimental designs and the evolution
                            of Mugler's fashion creations.
                        </p>
                    </div>
                </div>


                <div className="fashion-card">
                    <img src={img6}  alt="Mugler  fashion"/>


                    <div className="card-content">
                        <h3>MATERIALS & CRAFTSMANSHIP</h3>
                        <p>
                            Discover leather, metallic materials,
                            transparent fabrics, sculptural structures
                            and innovative techniques.
                        </p>
                    </div>
                </div>

            </div>

        </section>
        </>
        );
    };