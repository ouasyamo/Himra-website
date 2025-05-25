/**
 * Configuration de la barre de navigation
 * Cette section gère le comportement de la navbar lors du défilement
 * - Ajoute une classe 'scrolled' quand l'utilisateur défile plus bas que 50px
 * - Permet de changer l'apparence de la navbar (fond, ombre, etc.)
 */
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

/**
 * Données de la musique
 * Ces tableaux contiennent les informations des morceaux et clips vidéo
 * Chaque élément contient :
 * - id : identifiant unique
 * - title : titre du morceau/clip
 * - platform : plateforme de streaming (Spotify, YouTube, etc.)
 * - embedUrl : URL d'intégration du lecteur avec les paramètres Spotify
 * - imageUrl : chemin relatif vers l'image dans le dossier images/
 */
const musicList = [
    {
        id: 1,
        platform: "Disponible sur Spotify",
        embedUrl: "https://open.spotify.com/embed/track/1IlXL5jl4iIbTs12xqbLwK?utm_source=generator&theme=0",
        iframeStyle: "border-radius:12px",
        iframeHeight: "352",
        iframeAllow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        iframeLoading: "lazy"
    },
    {
        id: 2,
        title: "Titre 2",
        platform: "Disponible sur Spotify",
        embedUrl: "https://open.spotify.com/embed/track/2eHhJbfyd3Wm7C62ze0KKL?utm_source=generator&theme=0",
        iframeStyle: "border-radius:12px",
        iframeHeight: "352",
        iframeAllow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        iframeLoading: "lazy"
    },
    {
        id: 3,
        platform: "Disponible sur Spotify",
        embedUrl: "https://open.spotify.com/embed/track/4JKSVCeSEJCVoZELrxLuy4?utm_source=generator&theme=0",
        iframeStyle: "border-radius:12px",
        iframeHeight: "352",
        iframeAllow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        iframeLoading: "lazy"
    },
    {
        id: 4,
        title: "Titre 2",
        platform: "Disponible sur Spotify",
        embedUrl: "https://open.spotify.com/embed/track/3V8Qq9IG6lVxY2cczSnXIH?utm_source=generator&theme=0",
        iframeStyle: "border-radius:12px",
        iframeHeight: "352",
        iframeAllow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        iframeLoading: "lazy"
    },
    {
        id: 5,
        platform: "Disponible sur Spotify",
        embedUrl: "https://open.spotify.com/embed/track/4IRjUlhjOlWkVaRpeHLsGt?utm_source=generator&theme=0",
        iframeStyle: "border-radius:12px",
        iframeHeight: "352",
        iframeAllow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        iframeLoading: "lazy"
    },
    {
        id: 6,
        title: "Titre 2",
        platform: "Disponible sur Spotify",
        embedUrl: "https://open.spotify.com/embed/track/6IWfv0IFN9W52GLnrvgYZA?utm_source=generator&theme=0",
        iframeStyle: "border-radius:12px",
        iframeHeight: "352",
        iframeAllow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        iframeLoading: "lazy"
    }
];

const videoList = [
    {
        id: 1,
        title: "HIMRA - BÂTON NON NON (Clip Officiel)",
        youtubeId: "3Eiq6mv8Vlo",
        youtubeUrl: "https://youtu.be/3Eiq6mv8Vlo?si=JTTtl4eLaK4AWAMr"
    },
    {
        id: 2,
        title: "HIMRA - I BORI LA Feat ENFANT NOIR (clip officiel)",
        youtubeId: "G9l5AO1D4To",
        youtubeUrl: "https://www.youtube.com/watch?v=G9l5AO1D4To"
    },
    {
        id: 3,
        title: "HIMRA - NUMBER ONE (FT. MINZ) [Official Music Video]",
        youtubeId: "b16_UBiP4G0",
        youtubeUrl: "https://www.youtube.com/watch?v=b16_UBiP4G0"
    },
    {
        id: 4,
        title: "HIMRA - DAGBACHI [Official Music Video]",
        youtubeId: "-QB-RvT3yj8",
        youtubeUrl: "https://www.youtube.com/watch?v=-QB-RvT3yj8"
    },
    {
        id: 5,
        title: "HIMRA - NUMBER ONE (FT. MINZ) [Official Music Video]",
        youtubeId: "B1LG8jSyZEs",
        youtubeUrl: "https://www.youtube.com/watch?v=B1LG8jSyZEs"
    },
    {
        id: 6,
        title: "HIMRA - GANJAMAN (FT. KWAKU DMC, REGGIE, O'KENNETH & BEEZTRAP KOTM) [Official Music Video]",
        youtubeId: "4v8tZ6NNDzU",
        youtubeUrl: "https://www.youtube.com/watch?v=4v8tZ6NNDzU"
    }
    
];

// Liste des albums & EP
const albumEpList = [
    {
        id: 1,
        title: "EP",
        year: 2025,
        embedUrl: "https://open.spotify.com/embed/album/2Sp3t61MrPQUPn71nv6QZm?utm_source=generator&theme=0"
    },
    {   id: 2,
        title: "ALBUM",
        year: 2024,
        embedUrl: "https://open.spotify.com/embed/album/3yNYy5fvug5JKo755SZaEE?utm_source=generator&theme=0"
    },
    {
        id: 3,
        title: "ALBUM",
        year: 2024,
        embedUrl: "https://open.spotify.com/embed/album/7gIZh8UnIfZYmmVqV2cnPB?utm_source=generator&theme=0"
    },
    {   id: 4,
        title: "ALBUM",
        year: 2023,
        embedUrl: "https://open.spotify.com/embed/album/4ximljxY4QV5VOMuM5PWM0?utm_source=generator&theme=0"
    },{
        id: 5,
        title: "ALBUM",
        year: 2023,
        embedUrl: "https://open.spotify.com/embed/album/6a2w4q4kAcHHcJkODBCC6M?utm_source=generator&theme=0"
    },
    {   id: 6,
        title: "EP",
        year: 2021,
        embedUrl: "https://open.spotify.com/embed/album/7rSTB7BYBJle8dmFidw3eX?utm_source=generator&theme=0"
    },
    // Ajoute d'autres albums/EP ici si besoin
];

/**
 * Composants de l'interface
 * Cette section définit les templates HTML pour chaque section du site
 * Les composants sont stockés dans un objet pour une meilleure organisation
 * Chaque composant est une chaîne de caractères contenant du HTML
 * Les composants sont injectés dynamiquement dans le DOM lors de l'initialisation
 */
const components = {
    navbar: `
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="flame-text">HIMRA</span>
            </a>
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-links">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#à-propos">À propos</a></li>
                <li><a href="#musique">Musique</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    `,
    
    hero: `
        <div class="container">
            <h1 class="fade-in">
                <span class="block flame-text">HIMRA</span>
                <span class="White-gradient">Le Maître de la Drill Africaine</span>
            </h1>
            <p class="fade-in">
                La voix de la rue ivoirienne, le roi de la drill
            </p>
            <div class="hero-buttons fade-in">
                <a href="#musique" class="cta-button">
                    <i class="fas fa-play"></i>
                    Écouter maintenant
                </a>
                <a href="#contact" class="cta-button outline">
                    Me contacter
                </a>
            </div>
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>
        </div>
    `,
    
    about: `
        <div class="container">
            <div class="about-grid">
                <div class="about-image reveal">
                    <div class="image-frame">
                        <img src="images/ab67616100005174c35eda06cefddc1b9f24522f.jpeg" alt="Himra portrait">
                    </div>
                </div>
                <div class="about-content reveal">
                    <h2 class="section-title">À Propos</h2>
                    <p>
                       Himra est un rappeur ivoirien dont le style unique mêle drill, afrobeats et récits de rue. Né à Abidjan, il s'inspire du vécu de la jeunesse pour livrer des textes vrais, bruts et puissants.
                    </p>
                    <p>
                        Grâce à sa voix reconnaissable et ses projets marquants, Himra s'impose comme l'un des artistes les plus prometteurs de la scène urbaine ivoirienne. Il incarne une nouvelle génération d'artistes engagés, ambitieux et fiers de leurs racines.
                        </p>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">10</span>
                            <span class="stat-label">Années d'expérience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">40+</span>
                            <span class="stat-label">Singles & Collaborations</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">400K+</span>
                            <span class="stat-label">Streams mensuel Spotify</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">15+</span>
                            <span class="stat-label">Concerts</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    music: `
        <div class="container">
            <div class="text-center mb-12 reveal">
                <h2 class="section-title">Ma Musique</h2>
                <p class="section-subtitle" style="margin-bottom: 2.5rem;">
                    Découvrez mes derniers titres et clips pour vous plonger dans mon univers musical
                </p>
                <div class="music-nav-btns">
                    <a href="https://open.spotify.com/artist/TON_ID_SPOTIFY" class="cta-button" target="_blank" rel="noopener">Tout sur Spotify</a>
                    <a href="https://music.youtube.com/channel/TON_ID_YOUTUBE" class="cta-button" target="_blank" rel="noopener">Tout sur YouTube Music</a>
                    <a href="https://www.youtube.com/channel/TON_ID_YOUTUBE" class="cta-button" target="_blank" rel="noopener">Tous les Clips sur YouTube</a>
                </div>
            </div>

            <div class="video-section-bg reveal" style="margin-bottom:2.5rem;">
                <h3 class="section-title gold-gradient">Derniers Singles</h3>
                <div class="music-grid">
                    ${musicList.map(track => `
                        <div class="music-card">
                            <div class="music-card-content">
                                <p class="platform">${track.platform}</p>
                                <div class="music-embed">
                                    <iframe 
                                        style="${track.iframeStyle}"
                                        src="${track.embedUrl}"
                                        width="100%"
                                        height="${track.iframeHeight}"
                                        frameBorder="0"
                                        allowfullscreen=""
                                        allow="${track.iframeAllow}"
                                        loading="${track.iframeLoading}"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="video-section-bg reveal" style="margin-bottom:2.5rem;">
                <h3 class="section-title gold-gradient">Albums & EP</h3>
                <div class="music-grid">
                    ${albumEpList.map(album => `
                        <div class="music-card">
                            <div class="music-card-content">
                                <h4 class="albumname">${album.title} (${album.year})</h4>
                                <div class="music-embed">
                                    <iframe
                                        style="border-radius:12px"
                                        src="${album.embedUrl}"
                                        width="100%"
                                        height="352"
                                        frameBorder="0"
                                        allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="video-section-bg reveal">
                <h3 class="section-title gold-gradient">Clips Vidéo</h3>
                <div class="video-grid">
                    ${videoList.map(video => `
                        <div class="video-card reveal">
                            <a href="${video.youtubeUrl}" target="_blank" rel="noopener" class="video-thumbnail-link">
                                <img class="video-thumbnail" src="https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg" alt="Miniature de ${video.title}" style="width:100%;display:block;border-radius:8px;transition:transform 0.3s;">
                                <span class="video-overlay">
                                    <i class="fas fa-play"></i>
                                </span>
                            </a>
                            <div class="video-content">
                                <h4>${video.title}</h4>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `,

    
    
    
    contact: `
        <div class="container">
            <div class="text-center mb-12 reveal">
                <h2 class="section-title">Contact</h2>
                <p class="section-subtitle">
                    Restez connectés et suivez mon actualité sur les réseaux sociaux
                </p>
            </div>

            <div class="contact-grid">
                <div class="contact-info reveal">
                    <div class="contact-card">
                        <h3 class="gold-gradient">Réseaux Sociaux</h3>
                        <div class="social-links">
                            <a href="https://www.instagram.com/himra_saiyen/" target="_blank" class="social-link">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@himraofficiel3231/featured" target="_blank" class="social-link">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="mailto:contact@himra.com" class="social-link">
                                <i class="fas fa-envelope"></i>
                            </a>
                            <a href="https://wa.me/..." target="_blank" class="social-link">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://open.spotify.com/intl-fr/artist/39SBljHcUD66edvRmiRqlS" target="_blank" class="social-link" title="Spotify">
                                <i class="fab fa-spotify"></i>
                            </a>
                        </div>
                        
                        <h3 class="gold-gradient">Booking</h3>
                        <div class="contact-details">
                            <p>
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:booking@himra.com">booking@himra.com</a>
                            </p>
                            <p>
                                <i class="fas fa-phone"></i>
                                <a href="tel:+226XXXXXXXX">+226 XX XX XX XX</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form-container reveal">
                    <form class="contact-form">
                        <h3 class="gold-gradient">Envoyez-moi un message</h3>
                        
                        <div class="form-group">
                            <label for="name">Nom</label>
                            <input type="text" id="name" name="name" required placeholder="Votre nom">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="Votre email">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required placeholder="Votre message"></textarea>
                        </div>
                        
                        <button type="submit" class="submit-btn">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    
    footer: `
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="flame-text">HIMRA</a>
                    <p>Le Maître de la Drill Africaine</p>
                </div>
                
                <div class="footer-social">
                    <a href="https://www.instagram.com/himra_saiyen/" target="_blank" class="social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@himraofficiel3231/featured" target="_blank" class="social-link">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="mailto:contact@himra.com" class="social-link">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/..." target="_blank" class="social-link">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://open.spotify.com/intl-fr/artist/39SBljHcUD66edvRmiRqlS" target="_blank" class="social-link" title="Spotify">
                        <i class="fab fa-spotify"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-copyright">
                <p>&copy; ${new Date().getFullYear()} Himra Music. Tous droits réservés.</p>
                <p class="footer-links">
                    <a href="mentions-legales.html" class="footer-link">Mentions Légales</a>
                </p>
            </div>
        </div>
    `
};

/**
 * Initialisation des composants
 * Cette fonction injecte tous les composants dans le DOM
 * Elle est appelée au chargement de la page
 * - Injecte la navbar
 * - Injecte les sections principales (accueil, à propos, musique, contact)
 * - Injecte le footer
 * - Initialise le menu mobile et le formulaire de contact
 */
function initComponents() {
    // Injection de la navbar
    navbar.innerHTML = components.navbar;
    
    // Injection des sections
    document.querySelector('#accueil').innerHTML = components.hero;
    document.querySelector('#à-propos').innerHTML = components.about;
    document.querySelector('#musique').innerHTML = components.music;
    document.querySelector('#contact').innerHTML = components.contact;
    document.querySelector('#footer').innerHTML = components.footer;
    
    // Initialisation du menu mobile
    initMobileMenu();
    
    // Initialisation du formulaire de contact
    initContactForm();
}

/**
 * Gestion du menu mobile
 * Cette fonction gère l'affichage/masquage du menu sur mobile
 * - Ajoute/retire la classe 'active' au menu
 * - Ajoute/retire la classe 'active' au bouton du menu
 * Utilise un toggle pour basculer entre les états
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

/**
 * Gestion du formulaire de contact
 * Cette fonction initialise le formulaire de contact
 * - Empêche le rechargement de la page à la soumission
 * - Prépare la gestion des données du formulaire
 * Note : La logique d'envoi des données n'est pas implémentée
 */
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Ici, vous pouvez ajouter la logique d'envoi du formulaire
            console.log('Formulaire soumis');
        });
    }
}

/**
 * Animation au défilement
 * Cette fonction gère les animations d'apparition des éléments
 * Utilise l'Intersection Observer API pour détecter quand les éléments sont visibles
 * - Observe tous les éléments avec les classes 'fade-in' et 'reveal'
 * - Ajoute la classe 'visible' quand l'élément entre dans le viewport
 * - Déclenche l'animation CSS associée
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .reveal');
    
    if (elements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => observer.observe(element));
    }
}

/**
 * Initialisation au chargement de la page
 * Point d'entrée principal de l'application
 * S'exécute quand le DOM est complètement chargé
 * Initialise tous les composants et animations
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initialisation des composants...');
    initComponents();
    console.log('Initialisation des animations...');
    initScrollAnimations();
}); 