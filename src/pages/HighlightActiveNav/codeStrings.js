const code1 = `<div class="side-bar">
  <nav class="navigation">
    <ul>
      <li>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#gallery">Gallery</a>
      </li>
    </ul>
  </nav>
  </div>
  <div class="main-content">
  <section id="about">
    <h1>About</h1>
  </section>
  <section id="products">
    <h1>Products</h1>
  </section>
  <section id="services">
    <h1>Services</h1>
  </section>
  <section id="contact">
    <h1>Contact</h1>
  </section>
  <section id="gallery">
    <h1>Gallery</h1>
  </section>
</div>`

const code2 = `// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section
      on screen is, add .active class to corresponding navigation link,
      else remove it
    - To know which link needs an active class, we use sectionId variable
      we are getting while looping through sections as an selector
    */
    if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
      document.querySelector(".navigation a[href*=" + sectionId + "]")
        .classList
        .add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]")
        .classList
        .remove("active");
    }
  });
}`

export default {
  code1, code2,
}