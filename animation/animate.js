import gsap from "gsap";
const animate = () => {
    const element = document.getElementById('transition-element')
    gsap.to(element, { duration: 1, x: 2 , opacity : 1} );
}


export default animate