export const linkPointsTo = (ev,fun) => {
  ev.preventDefault(); 
  const linkHref = ev.target.href; 
  console.log('Link points to:', linkHref );
  
  fun();
};
