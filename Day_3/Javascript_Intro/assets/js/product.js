console.log("Product page linked!")

const productData = [{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
},{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "500.00",
    offer: "400.00",
    rating: "4.5"
}];



var productList = ``;

productData.map((data,i)=>{
    productList += `
    <div class="single-product-entity">
    <div class="product-card">
        <img src="${data.image}" class="product-card-image" alt="">
        <div class="product-card-body">
            <p class="product-title">
                ${data.name}
            </p>
            <p  class="product-price">
                Rp${data.price}
            </p>
            <p class="product-offer-price">
                <strike>Rp${data.offer}</strike>
            </p>
            <p class="product-rating">
                ⭐ ${data.rating} rating
            </p>
            <div class="badge">4 GB RAM</div>
            <div class="badge">128 GB ROM</div>
            <button class="action-button">
                Add to Cart
            </button>
        </div>
    </div>
</div>
        `
})


// function printdata() {
    var productSection = document.getElementById("product-sec");

    productSection.innerHTML = productList;
// }