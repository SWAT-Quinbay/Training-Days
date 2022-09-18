console.log("Product page linked!")

const productData = [{
    image: "https://static-01.daraz.com.bd/p/586ca833a054ecac033d8625c7ec2c86.jpg",
    name: "Dekoruma Setsu Extendable Dining Table - Meja Makan Minimalis dari Kayu Olahan",
    price: "$ 500.00",
    offer: "$ 400.00",
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
                    <p class="product-price">
                        ${data.price}
                    </p>
                    <p class="product-offer-price">
                        <strike>${data.offer}</strike>
                    </p>
                    <p class="rating">
                        ${data.rating}
                    </p>
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

    console.log(productSection)
// }