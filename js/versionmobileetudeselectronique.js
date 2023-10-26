
window.addEventListener('DOMContentLoaded', (event) => {
    if (window.innerWidth <= 768) { // Vous pouvez ajuster la largeur de l'écran selon vos besoins
        // Créez la structure mobile
        const mobileContainer = document.createElement('div');
        mobileContainer.classList.add('mobileclass');
        
        const underlineslide1 = document.createElement('div');
        underlineslide1.classList.add('underlineslide1');

        const underlinetitlepremiereslide = document.createElement('div');
        underlinetitlepremiereslide.classList.add('underlinetitlepremiereslide');
        
        const underlinetitlepremiereslide2 = document.createElement('div');
        underlinetitlepremiereslide2.classList.add('underlinetitlepremiereslide2');

        underlineslide1.appendChild(underlinetitlepremiereslide);
        underlineslide1.appendChild(underlinetitlepremiereslide2);
        mobileContainer.appendChild(underlineslide1);

        const textpremiereslide = document.querySelector('.textpremiereslide');
        const titlepremiereslide = document.querySelector('.titlepremiereslide');
        
        mobileContainer.appendChild(textpremiereslide);
        titlepremiereslide.appendChild(mobileContainer);
    }
});

