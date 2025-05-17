import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2>Hakkımda</h2>
            <p className="about-text">
                Merhaba, ben Mücahit Gök. Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Mobil uygulama ve web arayüz geliştirme alanlarında aktif olarak çalışıyorum.

                Flutter ile çok platformlu mobil uygulamalar geliştiriyor; React.js, JavaScript ve HTML/CSS ile modern, kullanıcı odaklı web arayüzleri tasarlıyorum. Bütçe yönetimi, evcil hayvan sağlık takibi, gezi rehberi ve alışveriş botu gibi projeler üzerinde çalıştım.

                Ayrıca TEKNOFEST Roket Yarışması’nda uçuş kontrol yazılımları geliştirerek sensör verileri ve kablosuz iletişim alanlarında tecrübe kazandım. Temiz kod, sürdürülebilir yapı ve kullanıcı deneyimi, geliştirme sürecindeki temel önceliklerimdir.
            </p>

            <div className="about-buttons">
                <a
                    href="/cv/Mucahit_Gok_CV.pdf"
                    className="btn-cv"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CV'yi Görüntüle
                </a>
            </div>

            <section className="skills-section">
                <h2 className="section-title">Teknik Yetenekler</h2>

                <div className="skills-grid">
                    <div className="skills-column">
                        {/* Sol Sütun */}

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="skill-icon" />
                                Flutter / Dart
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '80%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="skill-icon" />
                                HTML / CSS
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '65%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon" />
                                JavaScript
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '60%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon" />
                                React.js
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '60%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="skill-icon" />
                                Figma
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '70%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-column">
                        {/* Sağ Sütun */}

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon" />
                                Python
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '70%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="skill-icon" />
                                C#
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '65%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="skill-icon" />
                                Java
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '60%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino" className="skill-icon" />
                                Arduino
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '70%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-label">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="skill-icon" />
                                Firebase
                            </div>
                            <div className="skill-progress">
                                <div className="skill-fill" style={{ '--fill-width': '75%' }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
