// console.log(localStorage);

// localStorage.clear();


// localStorage.setItem('user', JSON.stringify({name: 'vasyl'}));
//
// console.log(localStorage);

// let  item = localStorage.getItem('user');
//
// console.log(item);
//
// console.log(JSON.parse(item));


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://img2.zakaz.ua/1.1612232018.ad72436478c_2021-02-03_Tatyana_L/1.1612232018.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.350nowm.jpg.350x.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://aquamarket.ua/65083-large_default/galicia-yabluchno-grushevij-02-l-galichina-sik-naturalnij-bez-dodavannya-cukru.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://florium.ua/media/catalog/product/cache/1/file/9df78eab33525d08d6e5fb8d27136e95/_/_/__1_1_68.jpg'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://images.prom.ua/668543501_chaj-chernyj-zavarnoj.jpg'
    },
];

products.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.innerText = product.title;

    let addToFavoriteBtn = document.createElement('button');
    addToFavoriteBtn.innerText = 'add to favorite';
    addToFavoriteBtn.onclick = function () {
            let array = JSON.parse(localStorage.getItem('products')) || [];
            array.push(product);
            localStorage.setItem('products', JSON.stringify(array))
    };

    productDiv.appendChild(addToFavoriteBtn)

    document.body.appendChild(productDiv)
})