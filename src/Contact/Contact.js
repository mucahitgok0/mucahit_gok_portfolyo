import React, { useState } from 'react';
import Swal from 'sweetalert2'; // ← EKLENDİ
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Modern alert burada:
        Swal.fire({
            title: 'Teşekkürler!',
            text: 'Mesajınız başarıyla gönderildi.',
            icon: 'success',
            confirmButtonText: 'Tamam',
            confirmButtonColor: '#f36a21'
        });

        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="section-title">İletişim</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-columns">
                        <div className="form-group">
                            <label htmlFor="name">Ad Soyad</label>
                            <input type="text" id="name" name="name" placeholder="*İsim ve Soyisim" value={formData.name} onChange={handleChange} required />

                            <label htmlFor="email">E-posta</label>
                            <input type="email" id="email" name="email" placeholder="*E-posta" value={formData.email} onChange={handleChange} required />

                            <label htmlFor="subject">Konu</label>
                            <input type="text" id="subject" name="subject" placeholder="*Konu" value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mesaj</label>
                            <textarea id="message" name="message" placeholder="*Mesaj" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                    </div>
                    <div className="form-button">
                        <button type="submit">Gönder</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
