var swiper = new Swiper(".mySwiper", {
  autoplay:true,
});

        // aos script for scroll animation 
      AOS.init({
        offset:300,
        duration:1000,
      });


      // featured project 
      var swiper = new Swiper(".myFetured", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView:2,
        spaceBetween:50,
        autoplay:true,
      });  


      var swiper = new Swiper(".myProcess", {
        spaceBetween: 10,
        slidesPerView:2,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          autoplay:true,
        },
      });
    
      var swiper = new Swiper(".myHiring", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView:3,
        spaceBetween:50,
        // autoplay:true,
      });  

      // number counter 
      
      const counters = document.querySelectorAll('.value');
      const speed = 200;
      
      counters.forEach( counter => {
         const animate = () => {
            const value = +counter.getAttribute('akhi');
            const data = +counter.innerText;
           
            const time = value / speed;
           if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
              }else{
                counter.innerText = value;
              }
           
         }
         
         animate();
      });
      



      // progress bar 
      const _PRG = document.getElementById('p'), 
			_OUT = document.querySelector('[for=p]'), 
			K = 5, TMAX = K*_PRG.max;

function load(t = 0) {
	if(t <= TMAX) {
		if(t%K === 0) _OUT.value = _PRG.value = t/K;
		requestAnimationFrame(load.bind(this, t + (Math.random() > .5)))
	}
};

load();