document.addEventListener('DOMContentLoaded', function() {
    // ---- Плавная прокрутка для всех ссылок-якорей ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // ---- Гамбургер-меню ----
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
  
    if (hamburgerBtn && navLinks) {
      hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  
    // ---- Универсальные функции открытия/закрытия модалок ----
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    }
  
    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'none';
      }
    }
  
    // ==== Пример: Модалка для физ-мат (phys_math.html) ====
    const scheduleModalPhysMath = document.getElementById('scheduleModalPhysMath');
    const openScheduleModalPhysMath = document.getElementById('openScheduleModalPhysMath');
    if (openScheduleModalPhysMath) {
      openScheduleModalPhysMath.onclick = function() {
        openModal('scheduleModalPhysMath');
      };
    }
    if (scheduleModalPhysMath) {
      const closeBtn = scheduleModalPhysMath.querySelector('.close');
      if (closeBtn) {
        closeBtn.onclick = () => closeModal('scheduleModalPhysMath');
      }
    }
  
    // Клик снаружи закрывает модалку
    window.addEventListener('click', function(event) {
      if (event.target === scheduleModalPhysMath) {
        closeModal('scheduleModalPhysMath');
      }
    });
  
    // ==== Аналогично: Модалка для chem_bio ====
    const scheduleModalChemBio = document.getElementById('scheduleModalChemBio');
    const openScheduleModalChemBio = document.getElementById('openScheduleModalChemBio');
    if (openScheduleModalChemBio) {
      openScheduleModalChemBio.onclick = function() {
        openModal('scheduleModalChemBio');
      };
    }
    if (scheduleModalChemBio) {
      const closeBtn = scheduleModalChemBio.querySelector('.close');
      if (closeBtn) {
        closeBtn.onclick = () => closeModal('scheduleModalChemBio');
      }
    }
    window.addEventListener('click', function(event) {
      if (event.target === scheduleModalChemBio) {
        closeModal('scheduleModalChemBio');
      }
    });
  
    // ==== Модалка для soc_econ ====
    const scheduleModalSocEcon = document.getElementById('scheduleModalSocEcon');
    const openScheduleModalSocEcon = document.getElementById('openScheduleModalSocEcon');
    if (openScheduleModalSocEcon) {
      openScheduleModalSocEcon.onclick = function() {
        openModal('scheduleModalSocEcon');
      };
    }
    if (scheduleModalSocEcon) {
      const closeBtn = scheduleModalSocEcon.querySelector('.close');
      if (closeBtn) {
        closeBtn.onclick = () => closeModal('scheduleModalSocEcon');
      }
    }
    window.addEventListener('click', function(event) {
      if (event.target === scheduleModalSocEcon) {
        closeModal('scheduleModalSocEcon');
      }
    });
  
    // ==== Модалка для soc_hum ====
    const scheduleModalSocHum = document.getElementById('scheduleModalSocHum');
    const openScheduleModalSocHum = document.getElementById('openScheduleModalSocHum');
    if (openScheduleModalSocHum) {
      openScheduleModalSocHum.onclick = function() {
        openModal('scheduleModalSocHum');
      };
    }
    if (scheduleModalSocHum) {
      const closeBtn = scheduleModalSocHum.querySelector('.close');
      if (closeBtn) {
        closeBtn.onclick = () => closeModal('scheduleModalSocHum');
      }
    }
    window.addEventListener('click', function(event) {
      if (event.target === scheduleModalSocHum) {
        closeModal('scheduleModalSocHum');
      }
    });
  });
