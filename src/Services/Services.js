// Services.js - Hizmetler Bileşeni
import React from 'react';
import './Services.css';

const services = [
    {
        title: 'Web Geliştirme',
        description: 'Kurumsal standartlara uygun, hızlı, güvenli ve mobil uyumlu web siteleri geliştiriyorum. SEO uyumlu yapılar ve modern teknolojiler (HTML, CSS, JavaScript, React) ile dijital varlığınızı güçlendiriyorum.',
        icon: '💻',
    },
    {
        title: 'Mobil Uygulama',
        description: 'iOS ve Android platformları için kullanıcı dostu, performans odaklı ve modern arayüzlere sahip mobil uygulamalar geliştiriyorum. Flutter teknolojisi ile çok daha hızlı çözümler sunuyorum.',
        icon: '📱',
    },
    {
        title: 'UI/UX Tasarımı',
        description: 'Marka kimliğinizi yansıtan, kullanıcı deneyimini ön planda tutan estetik ve sezgisel arayüz tasarımları sunuyorum. Kullanıcılarınızla güçlü bir etkileşim kurmanız için stratejik çözümler sağlıyorum.',
        icon: '🎨',
    },
];


const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <h2 className="section-title">Hizmetler</h2>
                <div className="service-cards">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
