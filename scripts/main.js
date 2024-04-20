const menuEmanil =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHanIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarroIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productList = [];




menuEmanil.addEventListener('click',toggleDesktopMenu);
menuHanIcon.addEventListener('click',toggleMobileMenu);
menuCarroIcon.addEventListener('click',toggleCarroAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarroAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}


productList.push({
    name: 'Maquillaje',
    price: 120,
    image: 'https://media.istockphoto.com/id/1296705483/es/foto/elabora-productos-basados-en-podios-blancos-sobre-fondo-rosa-en-pastel.jpg?s=2048x2048&w=is&k=20&c=QLk-QdKfqaxqt1FXKiiKMhD3wSjMDvk1ijQCBWTG6Do=',
});

productList.push({
    name: 'Maquillaje2',
    price: 220,
    image: 'https://media.istockphoto.com/id/1296705483/es/foto/elabora-productos-basados-en-podios-blancos-sobre-fondo-rosa-en-pastel.jpg?s=2048x2048&w=is&k=20&c=QLk-QdKfqaxqt1FXKiiKMhD3wSjMDvk1ijQCBWTG6Do=',
});

productList.push({
    name: 'Maquillaje3',
    price: 320,
    image: 'https://media.istockphoto.com/id/1296705483/es/foto/elabora-productos-basados-en-podios-blancos-sobre-fondo-rosa-en-pastel.jpg?s=2048x2048&w=is&k=20&c=QLk-QdKfqaxqt1FXKiiKMhD3wSjMDvk1ijQCBWTG6Do=',
});


/* <div class="product-card">
    <img src="https://media.istockphoto.com/id/1296705483/es/foto/elabora-productos-basados-en-podios-blancos-sobre-fondo-rosa-en-pastel.jpg?s=2048x2048&w=is&k=20&c=QLk-QdKfqaxqt1FXKiiKMhD3wSjMDvk1ijQCBWTG6Do=" alt="maquillaje">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>maquillaje</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
 */

function showProducts(arr) {
    for ( product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.appendChild(productFigureImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

showProducts(productList);