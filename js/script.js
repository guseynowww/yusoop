"use strict";

import {MDCTabBar} from '@material/tab-bar';

window.addEventListener('DOMContentLoaded', function() {
    

    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

    // Slider

    const slides = document.querySelectorAll('.review_item'),
          prev = document.querySelector('.review_arrow_left'),
          next = document.querySelector('.review_arrow_right');
    
    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = '';

        
    }
    

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
          
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    }); 
    
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } 

    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    } 

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === "") {
            closeModal();
        }
    });
    
    function showThanksModal() {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.style.display = 'none';
        openModal();
    }

    
});