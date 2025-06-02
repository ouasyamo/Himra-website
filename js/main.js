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
        title: "Attack",
        platform: "Spotify",
        imageUrl: "images/saamou.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/track/3YNVBH9e3rVHToCBxnWVyu?si=bb3ddd7dd36b4120"
    },
    {
        id: 2,
        title: "Mouman",
        platform: "Spotify",
        imageUrl: "images/Mouman.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/track/1IlXL5jl4iIbTs12xqbLwK?si=9d682bcb21fe405b"
    },
    {
        id: 3,
        title: "GANGSTA",
        platform: "Spotify",
        imageUrl: "images/Gangsta.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/album/6Ek2Al5uVyvk6hhEJVPcbM?si=R-8myZOtQhel48onS46lqg"
    },
    {
        id: 4,
        title: "Pas dans les débats (feat. Himra)",
        platform: "Spotify",
        imageUrl: "images/pasdanslesdebas.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/album/3C2FWgMh8JQr41D8u4c55t?si=GNzarCf3Tl6ss9ee4Sdheg"
    },
    {
        id: 5,
        title: "G3N3RATION N3RF (feat. Kerchak)",
        platform: "Spotify",
        imageUrl: "images/aka.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/track/3V8Qq9IG6lVxY2cczSnXIH?si=ff9e2c27e07c4f08"
    },
    {
        id: 6,
        title: "I BORI LA (feat. Enfant Noir)",
        platform: "Spotify",
        imageUrl: "images/aka.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/track/4IRjUlhjOlWkVaRpeHLsGt?si=76b646b20a344222"
    },
    {
        id: 7,
        title: "LE TEMPS (feat. Ismael Isaac)",
        platform: "Spotify",
        imageUrl: "images/aka.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/track/6IWfv0IFN9W52GLnrvgYZA?si=0be88564794e4971"
    }
];

const videoList = [
    {
        id: 1,
        title: "Saamou ft. Himra - Attack (Clip Officiel)",
        youtubeId: "foq514nlWXw",
        youtubeUrl: "https://youtu.be/foq514nlWXw?si=h_O1fELejj4yUSk5"
    },
    {
        id: 2,
        title: "HIMRA - BÂTON NON NON (Clip Officiel)",
        youtubeId: "3Eiq6mv8Vlo",
        youtubeUrl: "https://youtu.be/3Eiq6mv8Vlo?si=JTTtl4eLaK4AWAMr"
    },
    {
        id: 3,
        title: "HIMRA - I BORI LA Feat ENFANT NOIR (clip officiel)",
        youtubeId: "G9l5AO1D4To",
        youtubeUrl: "https://www.youtube.com/watch?v=G9l5AO1D4To"
    },
    {
        id: 4,
        title: "HIMRA - NUMBER ONE (FT. MINZ) [Official Music Video]",
        youtubeId: "b16_UBiP4G0",
        youtubeUrl: "https://www.youtube.com/watch?v=b16_UBiP4G0"
    },
    {
        id: 5,
        title: "HIMRA - DAGBACHI [Official Music Video]",
        youtubeId: "-QB-RvT3yj8",
        youtubeUrl: "https://www.youtube.com/watch?v=-QB-RvT3yj8"
    },
    {
        id: 6,
        title: "HIMRA - NUMBER ONE (FT. MINZ) [Official Music Video]",
        youtubeId: "B1LG8jSyZEs",
        youtubeUrl: "https://www.youtube.com/watch?v=B1LG8jSyZEs"
    },
    {
        id: 7,
        title: "HIMRA - GANJAMAN (FT. KWAKU DMC, REGGIE, O'KENNETH & BEEZTRAP KOTM) [Official Music Video]",
        youtubeId: "4v8tZ6NNDzU",
        youtubeUrl: "https://www.youtube.com/watch?v=4v8tZ6NNDzU"
    }
];

// Liste des albums & EP
const albumEpList = [
    {
        id: 1,
        title: "BIG AKA 4 AKA KAI EP",
        year: 2025,
        imageUrl: "images/aka.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/album/2Sp3t61MrPQUPn71nv6QZm?si=XY3gUZNiRwyYixKewEW0uw"
    },
    {   id: 2,
        title: "JEUNE & RICHE (DELUXE)",
        year: 2024,
        imageUrl: "images/jeune.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/album/3yNYy5fvug5JKo755SZaEE?si=Ju4AV4DMRIauRGsGBPzZVw"
    },
    {
        id: 3,
        title: "JEUNE & RICHE",
        year: 2025,
        imageUrl: "images/jeuneri.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/album/7gIZh8UnIfZYmmVqV2cnPB?si=Uc2sQmW1S9qTWBWgzdrG4g"
    },
    {   id: 4,
        title: "1X",
        year: 2023,
        imageUrl: "images/1x.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/album/4ximljxY4QV5VOMuM5PWM0?si=vtgFeT42SOqmu48X67tlkA"
    },{
        id: 5,
        title: "IDK2",
        year: 2023,
        imageUrl: "images/idk2.jpeg",
        spotifyUrl: "https://open.spotify.com/intl-fr/album/6a2w4q4kAcHHcJkODBCC6M?si=OKhnAKmFQEGafEghpyuhHQ"
    },
    {   id: 6,
        title: "Ivoire Drill King",
        year: 2021,
        imageUrl: "images/idk.jpeg",
        spotifyUrl: "https://open.spotify.com/album/7rSTB7BYBJle8dmFidw3eX?si=BDQOUqmiTZqZQphgyOGWGg"
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
                        <img src="./images/himra-portrait.jpeg" alt="Himra portrait">
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
                            <span class="stat-number">7</span>
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
                    <a href="https://open.spotify.com/intl-fr/artist/39SBljHcUD66edvRmiRqlS" class="cta-button" target="_blank" rel="noopener">Ma page Spotify</a>
                    <a href="https://www.youtube.com/@himraofficiel3231/featured" class="cta-button" target="_blank" rel="noopener">Tous les Clips sur YouTube</a>
                </div>
            </div>

            <div class="video-section-bg reveal" style="margin-bottom:2.5rem;">
                <h3 class="section-title gold-gradient">Derniers Singles</h3>
                <div class="music-grid">
                    ${musicList.map(track => `
                        <div class="music-card">
                            <div class="music-card-content">
                                <h4>${track.title}</h4>
                                <img src="${track.imageUrl}" alt="${track.title}" style="width:100%;border-radius:12px;margin-bottom:1rem;">
                                <a href="${track.spotifyUrl}" target="_blank" rel="noopener">
                                    <button class="cta-button">Écouter sur Spotify</button>
                                </a>
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
                                <img src="${album.imageUrl}" alt="${album.title}" style="width:100%;border-radius:12px;margin-bottom:1rem;">
                                <a href="${album.spotifyUrl}" target="_blank" rel="noopener">
                                    <button class="cta-button">Écouter sur Spotify</button>
                                </a>
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
                                <a href="mailto:ouasyamopro@gmail.com">ouasyamopro@gmail.com</a>
                            </p>
                            <p>
                                <i class="fas fa-phone"></i>
                                <a href="tel:+22607348023">+226 07 34 80 23</a>
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
