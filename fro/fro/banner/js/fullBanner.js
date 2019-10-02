let wat =    document.querySelector('.fb_wat');
let zanhua = document.querySelector('.fb_Zanhua');
let weet =   document.querySelector('.fb_weet');
let ballon = document.querySelector('.fb_ballon');
let waggel = document.querySelector('.fb_waggel');
let laag1  = document.querySelector('.fb_laag1');
let tuts   = document.querySelector('.fb_tut');
let html  = document.querySelector('.fb_html');
let css   = document.querySelector('.fb_css');
let jsc   = document.querySelector('.fb_js');

const animeren = () => {
  setTimeout( () => {wat.classList.remove('fb--uit')}, 1);
  setTimeout( () => {zanhua.classList.remove('fb--uit')}, 300);
  setTimeout( () => {weet.classList.remove('fb--uit')}, 600);
  setTimeout( () => {ballon.classList.remove('fb--uit')}, 900);
  setTimeout( () => {waggel.classList.add('fb--waggel')}, 1000);
  //over naar laag 2
  setTimeout( () => {laag1.classList.add('fb--uit')}, 1800);
  setTimeout( () => {tuts.classList.add('fb--uit')}, 2000);
  setTimeout( () => {html.classList.remove('fb--uit')}, 2300);
  setTimeout( () => {css.classList.remove('fb--uit')}, 2600);
  setTimeout( () => {jsc.classList.remove('fb--uit')}, 2900);

  // terug naar laag1
  setTimeout( () => terugzetten1(), 3500);
  setTimeout( () => {laag1.classList.remove('fb--uit')}, 4000);
  setTimeout( () => terugzetten2(), 4300);
}

const terugzetten1 = () => {
  wat.classList.add('fb--uit');
  zanhua.classList.add('fb--uit');
  weet.classList.add('fb--uit');
  ballon.classList.add('fb--uit');
  waggel.classList.remove('fb--waggel');
}
const terugzetten2 = () => {
  tuts.classList.remove('fb--uit');
  html.classList.add('fb--uit');
  css.classList.add('fb--uit');
  jsc.classList.add('fb--uit');
}
animeren();

setInterval( () => animeren(), 4000);


// banner linken
const gaNaarPagina = () => window.open('http://24577.hosts.ma-cloud.nl/bewijzenmap/periode1.1/fro/project/index.html', '-blank');
document.querySelector('.fb').addEventListener('click',gaNaarPagina);
