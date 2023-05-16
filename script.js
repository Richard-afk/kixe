 
 
 const wrapper = document.querySelector(".sliderWrapper");
 const menuItems = document.querySelectorAll(".menuItem");


menuItems.forEach((item, index)=>{
   item.addEventListener('click', ()=>{
      var selected = document.getElementsByClassName("active");
      selected[0].classList.remove("active");
      item.classList.add("active");
   })
})
   
 

 const product = [
   {
      id: 1,
      title: "Air Force 1",
      price: 24500,
      colors: [
         {
            code: "black",
            img: "assets/air.png",
         },
         {
            code: "darkblue",
            img: "assets/air2.png",
         },
      ],
   },
   {
      id: 2,
      title: "Air Jordan 1 High",
      price: 34000,
      colors: [
         {
            code: "darkgray",
            img: "assets/jordan.png",
         },
         {
            code: "aquamarine",
            img: "assets/jordan2.png",
         },
      ],
   },
   {
      id: 3,
      title: "Blazer",
      price: 41000,
      colors: [
         {
            code: "white",
            img: "assets/blazer.png",
         },
         {
            code: "green",
            img: "assets/blazer2.png",
         },
      ],
   },
   {
      id: 4,
      title: "Crater",
      price: 34000,
      colors: [
         {
            code: "black",
            img: "assets/crater.png",
         },
         {
            code: "lightgray",
            img: "assets/crater2.png",
         },
      ],
   },
   {
      id: 5,
      title: "Grey",
      price: 26000,
      colors: [
         {
            code: "#d1d1d1",
            img: "assets/hippie.png",
         },
         {
            code: "black",
            img: "assets/hippie2.png",
         },
      ],
   },
   
 ];

 // dynamically display product details

let chosenProduct = product[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentColor = document.querySelectorAll(".color"); 
const currentSize = document.querySelectorAll(".size");

menuItems.forEach((item, index)=> {
   item.addEventListener("click", ()=>{
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

       chosenProduct = product[index];
       currentProductTitle.textContent = chosenProduct.title;
       currentProductPrice.textContent = "N" + chosenProduct.price;
       currentProductImg.src = chosenProduct.colors[0].img;

//assign new color

      currentColor.forEach((color,index) => {
         color.style.background = chosenProduct.colors[index].code;
      });

   });
});


currentColor.forEach((color, index) => {
   color.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[index].img;
      
   });
});

//cycle through different sizes
currentSize.forEach((size) => {
   size.addEventListener("click", () => {
      currentSize.forEach((size) => {
         size.style.backgroundColor = ''
         size.style.color = 'gray'   
      });
      size.style.backgroundColor = 'black'
      size.style.color = 'white'
   })
}) ;
 
//close and open the payment dialogue box
const payment = document.querySelector('.payment');
const buyProduct = document.querySelector('.buyProduct')
const close = document.querySelector('.close')

buyProduct.addEventListener('click', ()=>{
   payment.style.display = 'flex'
});

close.addEventListener('click', ()=>{
   payment.style.display = 'none'
});