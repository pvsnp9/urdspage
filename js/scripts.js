/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // program outcome header expand and collapse code 
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

});



// Contact Form Submission Handling
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hide the form container
    document.getElementById('form-container').style.display = 'none';
    // Show the success message
    document.getElementById('success-message').style.display = 'block';
});

// Show Form Again
document.getElementById('show-form-button').addEventListener('click', function() {
    // Hide the success message
    document.getElementById('success-message').style.display = 'none';
    // Show the form container
    document.getElementById('form-container').style.display = 'block';
    // Reset the form fields
    document.getElementById('enquiryForm').reset();
});