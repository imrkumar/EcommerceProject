var product=(type)=>{
     let details;
     switch(type){
        case 'Firstpage':
           details = 'templates/Firstpage.htm'
           break;
        case'mens':
            details='templates/mens.htm';
            break;
        
        case'women':
            details="templates/women.htm"
           break;
        case'bag':
            details="templates/bag.htm"
           break;
        case'elec':
           details="templates/elec.htm"
           break;
        case'fruit':
           details="templates/fruit.htm"
           break;
        case'glasses':
           details="templates/slasses.htm"
           break;
        case'kid':
           details="templates/kid.htm"
           break;
        case'laptop':
           details="templates/laptop.htm"
           break;
        case'mob':
           details="templates/mob.htm"
           break;
        case'shoes':
           details="templates/shoes.htm"
           break;
        case'veg':
           details="templates/veg.htm"
           break;
        case'watch':
           details="templates/watch.htm"
           break;
     }
    
     page(details);
}
var page=(temp )=>{
    axios.get(temp)
  .then(function (response) {
    
    console.log(response.data);
    $("main").html(response.data);
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

}
product('Firstpage');