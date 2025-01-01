document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to open a modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    }

    // Function to close a modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        }
    }
    // Modal for contact form
    const contactModal = document.getElementById('contactModal');
    const openContactModalButton = document.getElementById('openContactModal');
    const closeContactModalSpan = contactModal ? contactModal.querySelector('.close') : null;
    if (openContactModalButton) {
        openContactModalButton.onclick = function() {
            openModal('contactModal');
        }
    }
    if(closeContactModalSpan){
        closeContactModalSpan.onclick = function() {
            closeModal('contactModal');
        }
    }

    window.onclick = function(event) {
        if (event.target === contactModal) {
            closeModal('contactModal');
        }
    }

    //Modal for timetable phys-math
    const scheduleModalPhysMath = document.getElementById('scheduleModalPhysMath');
    const openScheduleModalPhysMath = document.getElementById('openScheduleModalPhysMath');
    const closeScheduleModalPhysMathSpan = scheduleModalPhysMath ? scheduleModalPhysMath.querySelector('.close') : null;
    if (openScheduleModalPhysMath) {
        openScheduleModalPhysMath.onclick = function() {
            openModal('scheduleModalPhysMath');
        }
    }
    if(closeScheduleModalPhysMathSpan){
        closeScheduleModalPhysMathSpan.onclick = function() {
            closeModal('scheduleModalPhysMath');
        }
    }

    window.onclick = function(event) {
        if (event.target === scheduleModalPhysMath) {
            closeModal('scheduleModalPhysMath');
        }
    }

    //Modal for timetable chem-bio
    const scheduleModalChemBio = document.getElementById('scheduleModalChemBio');    const openScheduleModalChemBio = document.getElementById('openScheduleModalChemBio');
    const closeScheduleModalChemBioSpan = scheduleModalChemBio ? scheduleModalChemBio.querySelector('.close') : null;
    if(openScheduleModalChemBio){
        openScheduleModalChemBio.onclick = function() {
            openModal('scheduleModalChemBio');
        }
    }
    if(closeScheduleModalChemBioSpan){
        closeScheduleModalChemBioSpan.onclick = function() {
            closeModal('scheduleModalChemBio');
        }
    }

    window.onclick = function(event) {
        if (event.target === scheduleModalChemBio) {
            closeModal('scheduleModalChemBio');
        }
    }

    //Modal for timetable soc-econ
    const scheduleModalSocEcon = document.getElementById('scheduleModalSocEcon');
    const openScheduleModalSocEcon = document.getElementById('openScheduleModalSocEcon');
    const closeScheduleModalSocEconSpan = scheduleModalSocEcon ? scheduleModalSocEcon.querySelector('.close') : null;
    if(openScheduleModalSocEcon){
        openScheduleModalSocEcon.onclick = function() {
            openModal('scheduleModalSocEcon');
        }
    }
    if(closeScheduleModalSocEconSpan){
        closeScheduleModalSocEconSpan.onclick = function() {
            closeModal('scheduleModalSocEcon');
        }
    }
    window.onclick = function(event) {
        if (event.target === scheduleModalSocEcon) {
            closeModal('scheduleModalSocEcon');
        }
    }

    //Modal for timetable soc-hum
    const scheduleModalSocHum = document.getElementById('scheduleModalSocHum');
    const openScheduleModalSocHum = document.getElementById('openScheduleModalSocHum');
    const closeScheduleModalSocHumSpan = scheduleModalSocHum ? scheduleModalSocHum.querySelector('.close') : null;
    if(openScheduleModalSocHum){
        openScheduleModalSocHum.onclick = function() {
            openModal('scheduleModalSocHum');
        }
    }
    if(closeScheduleModalSocHumSpan){
        closeScheduleModalSocHumSpan.onclick = function() {
            closeModal('scheduleModalSocHum');
        }
    }
    window.onclick = function(event) {
        if (event.target === scheduleModalSocHum) {
            closeModal('scheduleModalSocHum');
        }
    }

    // Form submit handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            alert('Форма отправлена!');
            contactForm.reset();
            closeModal('contactModal');
        });
    }
});
