const topMenu = document.getElementById('cf-top-menu');
const toogleMenuIcon = document.getElementById('cf-toogle-top-menu-icon');

document.addEventListener('click', (even)=>{

   if(toogleMenuIcon.contains(even.target)){
      topMenu.classList.toggle('cf-top-menu-explanded')
      topMenu.classList.toggle('hidden')

   }else{
      if(topMenu.classList.contains('cf-top-menu-explanded')){
         topMenu.classList.remove('cf-top-menu-explanded');
         topMenu.classList.add('hidden');
      }
   };


})