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