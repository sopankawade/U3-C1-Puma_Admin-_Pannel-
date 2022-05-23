

    let data = JSON.parse(localStorage.getItem("products")) || [];

    //console.log("data", data);

    let container = document.getElementById("all_products");

    data.forEach(function(elem,index) {
        let div = document.createElement("div");
        div.style.border="1px solid red";
        div.setAttribute("id", "div1")
        //console.log(el);

        let image = document.createElement("img");
        image.src = elem.image;

        let type = document.createElement("p");
        type.innerText = elem.type;

        let desc = document.createElement("p");
        desc.innerText = elem.desc;

        let price = document.createElement("p");
        price.innerText = elem.price;

        let btn = document.createElement("button");
        btn.setAttribute("id", "remove_product")
        btn.innerText = "Remove Product";
        btn.addEventListener("click", function() {
            removeProduct(elem, index);
        });

        div.append(image, type, desc, price, btn);

        container.append(div);
    })

function removeProduct(elem,index) {
    console.log(elem,index);
    data.splice(index, 1);
    console.log(data);
    localStorage.setItem("products", JSON.stringify(data));

    window.location.reload();
}

