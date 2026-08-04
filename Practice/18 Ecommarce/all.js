function getProducts(parameter = localStorage.getItem('myParameter')) {
    document.querySelector('input').value = parameter;

    document.querySelector('b').innerText = JSON.parse(localStorage.getItem('morningCartProduct')).length;
    var filterProduct = JSON.parse(localStorage.getItem("myProducts"));
    if (parameter == "price low to high") {
        for (const key in filterProduct) {
            filterProduct[key].sort((a,b)=>{
                return a.price-b.price;
            });
        }
    } else if (parameter == "price high to low") {
        for (const key in filterProduct) {
            filterProduct[key].sort((a,b)=>{
                return b.price-a.price;
            });
        }
    } else {
        for (const key in filterProduct) {
            filterProduct[key] = filterProduct[key].filter((data)=>{
               return data.company.toLowerCase().includes(parameter.toLowerCase());
            });
        }
    }

    const products = filterProduct;
    for (const key in products) {

        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.append(key);
        section.appendChild(h2);

        let div = document.createElement('div');
        for (const element of products[key]) {
            let main = document.createElement('main');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let h5 = document.createElement('h5');
            let img = document.createElement('img');
            let p = document.createElement('p');
            let button = document.createElement('button');

            h3.append(element.company);
            h4.append(element.model);
            h5.append(element.price);
            img.src = element.image;
            p.append(element.description);
            button.append("Add Cart");

            main.appendChild(h3);
            main.appendChild(img);
            main.appendChild(h4);
            main.appendChild(h5);
            main.appendChild(p);
            main.appendChild(button);

            div.appendChild(main);
        } 
        section.appendChild(div);


        document.querySelector('article').appendChild(section);
    }
}
getProducts();




document.querySelector('input').onchange = function (e) {
    localStorage.setItem("myParameter",e.target.value);
    
    location.href = "index.html";
}


document.body.addEventListener('click',function(e){
    var cartfilter = JSON.parse(localStorage.getItem('morningCartProduct'));
    if(e.target.tagName == "BUTTON"){
       cartfilter.push(e.target.parentElement.children[2].innerText);
       localStorage.setItem("morningCartProduct",JSON.stringify(cartfilter));
    }else if(e.target.tagName == "SPAN"){
        location.href = "cart.html";
    }

    console.log(cartfilter);
});



// text : html
// tag access : innerHTML = dfgh

// How to Create Tag :
// let h1 = document.createElement('h1');



// How to Add Inner Content :
// 1. text
// h1.append("Heading 1");

// h1.append("<span>Heading 1</span>");

// 2. tag :
// let span = document.createElement("span");
// span.append("Hello");

// h1.appendChild(span);
// console.log(h1);