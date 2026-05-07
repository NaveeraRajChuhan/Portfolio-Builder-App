gsap.from('.hero-text h1',{
y:-100,
opacity:0,
duration:1.2
})


gsap.from('.hero-text p',{
y:50,
opacity:0,
duration:1.2,
delay:0.3
})


gsap.from('.hero-buttons',{
scale:0,
opacity:0,
duration:1,
delay:0.5
})


gsap.from('.feature-card',{
scrollTrigger:'.feature-card',
y:100,
opacity:0,
duration:1,
stagger:0.2
})