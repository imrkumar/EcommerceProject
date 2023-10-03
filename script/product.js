var ptemplate = Handlebars.compile($("#template").html());
var productdata=[

    {
        pname:" Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt ",
        price:"₹600",
        url :"assets/mens_wear/m1.jpg",
        brand: "Lymio"
    
    },
    {
        pname:"Shirt for Men | Tropical Leaf Printed Rayon Shirts for Men",
        price:"₹500",
        url :"assets/mens_wear/m2.jpg",
        brand: "Leriya Fashion"
    },
    {
        pname:"Regular Men's Cotton Designer T-Shirt (EB1T67)",
        price:"₹700",
        url :"assets/mens_wear/m3.jpg",
        brand:"EYEBOGLER"
    },
    {
        pname:" Combo of Men's Cotton Regular Fit Full Sleeve Casual Shirt",
        price:"₹600",
        url :"assets/mens_wear/m4.jpg",
        brand : "Zombom"
    },
    {
        pname:"Men's Super Combed Cotton Checkmate Boxer Shorts ",
        price:"₹500",
        url :"assets/mens_wear/m5.jpg",
        brand :"Chromozome"
    },
    {
        pname:"Stylish Men Multicolored Cotton Shorts-Pack of 2",
        price:"₹700",
        url :"assets/mens_wear/m6.jpg",
        brand :"hotfits"
    },
    {
        pname:" Shirt for Men || Soft Rayon Multi Printed Shirts for Men ",
        price:"₹600",
        url :"assets/mens_wear/m7.jpg",
        brand :"OM SAI LATEST CREATION"
    },
    {
        pname:"Men's Rayon Shirt And Shorts Combo Suit",
        price:"₹900",
        url :"assets/mens_wear/m8.jpg",
        brand :"N T CREATION"
    },
    {
        pname:"Men's Skinny Jeans (XCYA01711-B7_Dark Blue",
        price:"₹900",
        url :"assets/mens_wear/m9.jpg",
        brand :"Parx"
    },
    {
        pname:"Men's Stretch Jogger Jeans",
        price:"₹750",
        url :"assets/mens_wear/m10.jpg",
        brand :"Neostreak"
    },
  
    {
        pname:"Men's Regular Fit Causal Trouser",
        price:"₹600",
        url :"assets/mens_wear/m11.jpg",
        brand :"TOPLOT"
    },
    {
        pname:"Men's Solid Lycra Slim Fit Stretchable Casual Wear",
        price:"₹500",
        url :"assets/mens_wear/m12.jpg",
        brand :"Boostrix"
    },
];

for(var i=0;i<productdata.length;i++){
   
    var temp = ptemplate(productdata[i]);
    $(".main").append(temp);
}

    







  