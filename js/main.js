'use strict';

{
    const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img')
        img.src = image;

        const li = document.createElement('li');
        if (index === currentIndex){
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            thumbnails[currentIndex].classList.remove('current');
            currentIndex = index ;
            thumbnails[currentIndex].classList.add('current');
        })


        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);

    });

    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        // const target = currentIndex + 1;
        let target = currentIndex + 1;
        if (target === images.length) {
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if (target < 0) {
            target = images.length - 1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });




}