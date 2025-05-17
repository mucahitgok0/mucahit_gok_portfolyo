// Home.js - Anasayfa Bileşeni
import React from 'react';
import './HomePage.css';
import profilePhoto from '../assets/Mucahit_Gok.jpeg';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <div className="home-content">
                    <h1>Merhaba, ben <span className="highlight">Mücahit Gök</span></h1>

                    {/* Dinamik yazı efekti */}
                    <p className="typing-text">
                        Mobil Uygulama Geliştirici | Frontend Developer
                    </p>

                    <p className="justified-text fade-slide">
                        Mobil uygulama geliştirme ve frontend yazılım alanlarında aktif olarak çalışmalar yürütmekteyim.
                        Hedefim, modern teknolojileri etkin bir şekilde kullanarak hem estetik hem de kullanıcı deneyimi açısından güçlü dijital çözümler üretmektir.
                        Web ve mobil platformlar için sade, erişilebilir ve yüksek performanslı kullanıcı arayüzleri tasarlamaya özen gösteriyorum.
                        Yazılım geliştirme sürecinde sürdürülebilir kod yapıları, performans optimizasyonu ve temiz kod prensiplerini öncelik olarak kabul ediyorum.
                        Takım çalışmasına uyumlu, çözüm odaklı ve sürekli gelişime açık bir yazılım geliştirici olarak;
                        teknolojideki yenilikleri yakından takip ediyor ve bu yenilikleri projelerime entegre etmeye büyük önem veriyorum.
                    </p>


                    <div className="home-buttons">
                        <a href="#projects" className="btn">Projelerim</a>
                        <a href="#contact" className="btn-outline">İletişime Geç</a>
                    </div>

                    <div className="social-icons">
                        <a href="https://github.com/mucahitgok0" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/mucahitgok/" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100008716353250" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
                        </a>
                    </div>
                </div>
                <div className="home-photo">
                    <img src={profilePhoto} alt="Mücahit Gök" />
                </div>
            </div>

            {/* Dalga SVG geçişi */}
            <div className="home-wave">
                <svg viewBox="0 0 1440 320">
                    <path
                        fill="#f36a21"
                        fillOpacity="0.2"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,154.7C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Home;
