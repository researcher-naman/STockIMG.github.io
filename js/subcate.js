const subnav = document.querySelectorAll('.Mcate1');

subnav.forEach((Mcate1) => {
      const targetId = Mcate1.dataset.target;
      const cate1 = document.getElementById(targetId);

    Mcate1.addEventListener('mouseenter', () => {
      cate1.classList.remove('animate__fadeOutUp');
      cate1.classList.add('animate__fadeInDown');
      cate1.style.display = 'block';
    });
  
    Mcate1.addEventListener('mouseleave', () => {
      cate1.classList.remove('animate__fadeInDown');
      cate1.style.display = 'none';
    });

  });