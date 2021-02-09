import React from 'react'
import Arrows from '../images/dobleflecha.png'
import '../components/styles/Home.css'
import Ventana from '../images/ventana.jpg'
import Puerta from '../images/puerta-corrediza.png'
import Ventiluz from '../images/ventiluz.png'
import More from '../images/more.png'
import AOS from 'aos'
import "aos/dist/aos.css";
import Typed from 'react-typed';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Home() {

    AOS.init({ once: true });

    document.title = 'Bruno Aberturas';

    const history = useHistory();
    console.log(history);

    return (
        <div id='home'>
            <Navbar />
            <div className='home'>
                <h1> Abre tu <span className='mente'>mente</span> <br />hacia <span className='typed'>
                    <Typed
                        strings={['lo nuevo', 'el futuro', 'Módena2']}
                        startDelay={500}
                        backDelay={1000}
                        typeSpeed={90}
                        backSpeed={100}
                    />

                </span>
                    {/* <div className='home-slider'>
                        <h2>Bienvenido</h2>
                    </div> */}
                </h1>
                <div className='arrow-container'>
                    <img alt='dobleflecha' src={Arrows}></img>
                </div>
            </div>

            <div className='preview-products'>

                <i className='fas fa-box-open'></i>

                <div className='all-products-container'>

                    <div className='product-container'>

                        <div className='ventana' data-aos="fade-right" data-aos-delay="750">
                            <img alt='ventana de aluminio' src={Ventana}></img>
                        </div>

                        <div className='product-description'>
                            <h4>Ventana de aluminio</h4>
                            <Link to='products/ventana' className='link'>
                                <div className='button-more'>
                                    <img alt='saber más' src={More}></img>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className='product-container'>

                        <div className='puerta' data-aos="fade-left" data-aos-delay="750">
                            <img alt='puerta corrediza de aluminio' src={Puerta}></img>
                        </div>

                        <div className='product-description'>
                            <h4>Puerta corrediza de aluminio</h4>
                            <Link to='products/puerta-corrediza' className='link'>
                                <div className='button-more'>
                                    <img alt='saber más' src={More}></img>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className='product-container'>

                        <div className='ventiluz' data-aos="fade-right" data-aos-delay="1050">
                            <img alt='ventiluz de aluminio' src={Ventiluz}></img>
                        </div>

                        <div className='product-description'>
                            <h4>Ventiluz de aluminio</h4>
                            <Link to='products/ventiluz' className='link'>
                                <div className='button-more'>
                                    <img alt='saber más' src={More}></img>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {
                        /*  
                        BOTON FRANJA ROJA RIVER (CONSULTAR)

                        <Link to='/products' className='link'>
                        <div className='button-see-more'>
                            <div id="translate"></div>
                            <h5>Ver más</h5>
                        </div>
                        </Link> */}

                    <Link to='/products' className='link'>
                        <div className='button-see-more' id="button-see-more" >
                            <div id="eye">
                                <i className="far fa-eye" id='ubication'></i>
                            </div>
                            <h5>Ver más</h5>
                        </div>
                    </Link>

                </div>
            </div>

            <div className='ubication-map'>

                <i className="fas fa-map-marker-alt" ></i>

                <div className='ubication-container' data-aos="fade-up" data-aos-delay="950" data-aos-duration='475'>
                    <iframe title="Bruno Aberturas | Ubicación" src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1881.1097256677172!2d-62.7707296869749!3d-37.54005691497137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d-37.5398831!2d-62.7707864!5e0!3m2!1ses!2sar!4v1609472862611!5m2!1ses!2sar" aria-hidden="false" className='map'></iframe>

                    <div className='info-container'>

                        <i className="fas fa-info-circle"></i>
                        <h5>
                            Dr. C. Pontet, B8180 Puán, Provincia de Buenos Aires
                        </h5>
                        <div className='contact-container' data-aos="fade-up" data-aos-delay="1350">
                            <div className='days-container'>
                                <div className='days active'>
                                    <h6> L </h6>
                                </div>
                                <div className='days active'>
                                    <h6> M </h6>
                                </div>
                                <div className='days active'>
                                    <h6> M </h6>
                                </div>
                                <div className='days active'>
                                    <h6> J </h6>
                                </div>
                                <div className='days active'>
                                    <h6> V </h6>
                                </div>
                                <div className='days active'>
                                    <h6> S </h6>
                                </div>
                                <div className='days'>
                                    <h6> D </h6>
                                </div>

                            </div>

                            <div className='contact-text'>
                                <p>Horario de atención <br className='time' /> 8hs a 12hs <br /> 16hs a 20hs </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home

