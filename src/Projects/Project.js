// Projects.js (güncellenmiş)
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCard.css';

const projects = [
    {
        title: 'Bütçe Yönetimi Mobil Uygulaması',
        description: 'Flutter ile geliştirdiğimiz bu bütçe yönetimi mobil uygulaması, ekip çalışmasıyla başarıyla tamamlanmış ve Google Play Store üzerinden indirilebilir hale getirilmiştir. Uygulama, kullanıcıların gelir ve gider bilgilerini kategorilere ayırarak; günlük, aylık ve yıllık analizleri görsel grafikler aracılığıyla takip edebilmelerine olanak tanır.\n\nKullanıcılar, finansal verilerini PDF formatında dışa aktararak yazılı çıktılar alabilir. Koyu tema desteği ve çoklu dil seçeneği gibi kullanıcı deneyimini artıran özellikler uygulamanın işlevselliğini zenginleştirmektedir.\n\nProje kapsamında Firebase altyapısı kullanılarak güçlü ve ölçeklenebilir bir veri yönetimi sağlanmıştır. Uygulamada GetX ve BLoC Provider mimarileriyle modern, sürdürülebilir ve modüler bir state management yapısı oluşturulmuştur. Kullanıcı verilerinin gizliliği ve güvenliği ön planda tutularak, tüm veriler AES algoritması ile şifrelenmiş ve güvenli bir şekilde saklanmıştır.\n\nBu proje, hem teknik yetkinliğimizi hem de ekip içi iş birliğimizi yansıtan kapsamlı bir mobil çözüm olarak geliştirilmiştir.',
        language: 'Flutter, Dart',
        repoLink: '',
        year: '2025',
    },
    {
        title: 'TrendBot: İndirim ve Stok Takipli Akıllı Alışveriş Uygulaması',
        description: 'Bu proje, Trendyol platformundaki ürünlerin stok durumu ve fiyat değişimlerini gerçek zamanlı olarak takip eden, Python dili ile geliştirilmiş bir Telegram bot uygulamasıdır. Uygulama, belirlenen ürünlerde indirim veya stok güncellemesi gerçekleştiğinde, kullanıcıya anlık olarak Telegram üzerinden bildirim gönderebilmektedir.\n\nİsteğe bağlı olarak yapılandırılan bot, yalnızca bilgilendirme amacıyla çalışabildiği gibi; ürün indirimdeyken veya tekrar stoğa girdiğinde otonom olarak satın alma işlemi gerçekleştirecek şekilde de işlev görmektedir. Bu sayede kullanıcılar, fırsatları kaçırmadan hızlı ve otomatik bir şekilde alışveriş yapabilmektedir.\n\nProje kapsamında web scraping, veri işleme, Telegram API entegrasyonu ve otomasyon sistemleri üzerine yoğunlaşılmış; işlevselliği yüksek, özelleştirilebilir bir sistem geliştirilmiştir.',
        language: 'Python',
        repoLink: '',
        year: '2025',
    },
    {
        title: 'TEKNOFEST Roket Yarışması',
        description: '2024 yılında düzenlenen TEKNOFEST Roket Yarışması’na yüksek irtifa kategorisinde takım arkadaşlarımla birlikte katıldım ve yarışma sücrecinde finalist olarak önemli bir başarı elde ettik. Proje kapsamında uçuş kontrol bilgisayarının yazılım geliştirme süreçlerinde aktif rol aldım.\n\nGörevim, sensörlerden elde edilen verilerin işlenerek uçuş kontrol algoritmaları içerisinde doğru ve güvenilir şekilde kullanılmasını sağlamaktı. Bu süreçte kablosuz haberleşme sistemleri ve çeşitli elektronik sensörler (ivmeölçer, jiroskop, barometre vb.) hakkında teorik ve pratik düzeyde derinlemesine bilgi sahibi oldum. Takım çalışması, sistem entegrasyonu ve gerçek zamanlı veri işleme konularında değerli deneyimler kazandım.',
        language: 'Arduino, C#',
        repoLink: '',
        year: '2024',
        endDate: '2025',
    },
    {
        title: 'Hayvan Hastalık Takip Mobil Uygulması',
        description: 'Bu proje, hayvan sahiplerinin evcil hayvanlarına ait temel sağlık bilgilerini sistemli bir şekilde kayıt altına alabilmelerini ve takip edebilmelerini amaçlayan bir uygulamadır. Uygulama sayesinde kullanıcılar; hayvanlarının isimlerini, geçirdikleri hastalıkları ve düzenli olarak kullanmaları gereken ilaçları kolaylıkla kaydedebilir ve bu bilgileri periyodik olarak güncelleyerek takip edebilirler.\n\nUygulama, hayvanların sağlık geçmişinin dijital ortamda güvenli ve erişilebilir bir şekilde tutulmasına olanak sağlayarak, veteriner ziyaretlerinde hızlı bilgi paylaşımı ve düzenli bakım süreçlerinin yönetilmesini destekler. Hayvan sahiplerinin bilinçli takibini kolaylaştıran bu sistem, kullanıcı dostu bir arayüz ile desteklenmiştir.',
        language: 'Java',
        repoLink: 'https://github.com/mucahitgok0/hayvan_hastalik_takip_',
        year: '2024',
    },
    {
        title: 'Balıkesir Gezi Rehberim',
        description: '“Balıkesir Gezi Rehberim”, Balıkesir iline ait kültürel, tarihi ve turistik noktaları keşfetmek isteyen kullanıcılar için geliştirilen bir masaüstü uygulamasıdır. Uygulama, Electron teknolojisi kullanılarak platformlar arası çalışabilir şekilde tasarlanmış olup modern web teknolojileriyle (HTML, CSS, JavaScript) geliştirilmiştir.\n\nKullanıcılar, uygulama üzerinden Balıkesir’in gezilmesi gereken yerlerini detaylı olarak görüntüleyebilir, ilgilendikleri lokasyonları “Gezi Sepeti”ne ekleyerek kişisel bir gezi planı oluşturabilirler. Ayrıca gezdikleri yerleri işaretleyerek ziyaret geçmişlerini takip edebilirler. Uygulama, kullanıcı dostu arayüzü ve kolay kullanımı sayesinde Balıkesir’i ziyaret etmeyi planlayanlar için pratik ve etkileşimli bir rehber sunar.',
        language: 'Html, Css, JavaScript, Electron',
        repoLink: '',
        year: '2024',
    },
];

const Projects = () => {
    return (
        <div id="projects" className="container">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        language={project.language}
                        repoLink={project.repoLink}
                        year={project.year}
                        endDate={project.endDate}  // ← BUNU EKLE
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;