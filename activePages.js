const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(Link => { 
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    } 
})
console.log(activePage);