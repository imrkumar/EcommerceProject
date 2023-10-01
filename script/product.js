var ptemplate = Handlebars.compile($("#template").html());
var productdata=[

    {
        pname:"Causal shirt for Men",
        price:600,
        url :"assets/mens_wear/m1.jpg"
    },
    {
        pname:"Causal shirt for Men",
        price:500,
        url :"assets/mens_wear/m2.jpg"
    },
    {
        pname:"",
        price:700,
        url :"assets/mens_wear/m3.jpg"
    },
    {
        pname:" Cotton shirt for Men",
        price:650,
        url :"assets/mens_wear/m4.jpg"
    },
    {
        pname:"Shorts for Men",
        price:500,
        url :"assets/mens_wear/m5.jpg"
    },
    {
        pname:"Combo Shorts for Men",
        price:700,
        url :"assets/mens_wear/m6.jpg"
    },
    {
        pname:" Stylis shirt for Men ",
        price:600,
        url :"assets/mens_wear/m7.jpg"
    },
    {
        pname:"Combo shirt&shorts for Men",
        price:900,
        url :"assets/mens_wear/m8.jpg"
    },
    {
        pname:" Slim Fit Stretch Jeans",
        price:750,
        url :"assets/mens_wear/m9.jpg"
    },
    {
        pname:"Men's Skinny Fit Stretch Jeans",
        price:900,
        url :"assets/mens_wear/m10.jpg"
    },
    {
        pname:"Slim Fit Casual Trousers",
        price:600,
        url :"assets/mens_wear/m11.jpg"
    },
    {
        pname:"Men Casual Pants",
        price:500,
        url :"assets/mens_wear/m12.jpg"
    },
];

for(var i=0;i<productdata.length;i++){
   
    var temp = ptemplate(productdata[i]);
    $(".main").append(temp);
}

    







  