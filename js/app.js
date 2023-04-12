const product = [
  {
    id: 0,
    image: "images/png/gg-1.jpg",
    title: "Z Flip Foldable Mobile",
    price: 1200,
  },
  {
    id: 2,
    image: "images/png/dd-2.png",
    title: "Air Pods Pro",
    price: 60,
  },
  {
    id: 3,
    image: "images/png/ee-3.jpg",
    title: "250D DSLR Camera ",
    price: 230,
  },
  {
    id: 4,
    image: "images/png/aa-1.jpg",
    title: "Head phones",
    price: 100,
}
];
let cardItem = document.getElementById("cardItem")

const categories = [...new Set(product.map((item) => {return item}))];
let i = 0
document.getElementById("root").innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return( `<div class="box">
                <div class="img-box">
                    <img class="images" src="${image}" alt='${title}'>
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>$${price}.99</h2>` +                   
                    "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
                `</div>
            </div>`
    )
}).join('');

var cart = [];
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
    cart.splice(a, 1)
    displaycart()
}
function displaycart(a){
    let j = 0, total = 0
    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "$ " +0+".00";
    if(cart.length==0){
        cardItem.innerHTML = "Your carst is empty";
    } else {
        cardItem.innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return `
            <div class="cart-item">
                <div class="row-img">
                    <img class="rowImg" src="${image}" alt='${title}'>
                </div>
                <p style="font-size:12px;">${title}</p>
                <h2 style="font-size:15px;">$${price}.99</h2>
                <i class="fa-solid fa-trash" onclick='delElement("+(j++)+")'></i>
            </div>
            `;
        }).join("");
    }
}