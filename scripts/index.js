//store the products array in localstorage as "products"
function Product(t,d,p,i) {
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function storeData(event) {
    event.preventDefault();

    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new Product(type,desc,price,image)
    //console.log(p1);

    let data = JSON.parse(localStorage.getItem("products")) ||  [];

    data.push(p1);

    console.log("data:", data)

    localStorage.setItem("products", JSON.stringify(data));

    document.getElementById("products").reset();

    
}
