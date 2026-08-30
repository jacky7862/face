// FacadePro Academy - Simple interactions

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Cart / Enrollment form: read selected class from URL
  const params = new URLSearchParams(window.location.search);
  const classId = params.get('class');
  const classData = {
    basic: {
      name: 'Basic Facade Cleaning Techniques',
      price: '$149',
      desc: 'Learn fundamental methods for safe and effective exterior surface cleaning.',
      img: 'images/class-basic.jpg'
    },
    advanced: {
      name: 'Advanced Soft Wash & Pressure Methods',
      price: '$249',
      desc: 'Master soft washing, chemical selection, and pressure techniques for complex surfaces.',
      img: 'images/class-advanced.jpg'
    },
    commercial: {
      name: 'Commercial High-Rise & Safety Prep',
      price: '$349',
      desc: 'Professional training for high-rise work, safety protocols, and commercial contracts.',
      img: 'images/class-commercial.jpg'
    }
  };

  const selectedBox = document.getElementById('selected-product');
  if (selectedBox && classId && classData[classId]) {
    const c = classData[classId];
    selectedBox.innerHTML = `
      <img src="${c.img}" alt="${c.name}">
      <div>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <div class="price">${c.price}</div>
      </div>
    `;
    const hidden = document.getElementById('selected-class');
    if (hidden) hidden.value = c.name;
  }

  // Form submission (demo – shows success, no real backend)
  const forms = document.querySelectorAll('form[data-demo]');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const success = form.parentElement.querySelector('.success-msg') || form.querySelector('.success-msg');
      if (success) {
        success.classList.add('show');
        form.reset();
        // optional: scroll to message
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        alert('Thank you! We have received your details and will contact you shortly to personalize your online class.');
      }
    });
  });
});
