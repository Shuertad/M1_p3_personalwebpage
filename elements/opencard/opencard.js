export const openDescription = (ev,location) => {
    if (ev.target.id !== location) {
     if(document.getElementById(location).checked === true){
       document.getElementById(location).checked = false;
     };
     return;
     };
   return;
};