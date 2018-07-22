const wrapper = doc.querySelector('.content .wrapper');

function startDrawProducts(){
    for(let i=0;i<products.length;i++){
        drawProduct(i);
    }
}

function drawProduct(i){
    let content_products = doc.createElement('div');
    content_products.classList = 'content_products';
    wrapper.appendChild(content_products);

    const img = doc.createElement('div');
    img.className = 'image';
    content_products.appendChild(img);
    const image = doc.createElement('img');
    image.setAttribute('src', products[0][i]);
    img.appendChild(image);
    const footer = doc.createElement('div');
    footer.className = 'footer';
    content_products.appendChild(footer);

    const footer_star = doc.createElement('div');
    footer_star.className = 'footer_star';
    footer.appendChild(footer_star);
    if(i==0){
        const fancybox = doc.createElement('div');
        fancybox.className = 'fancybox-new';
        fancybox.innerHTML = 'НОВИНКА';
        content_products.appendChild(fancybox);
        for(let j=1;j<=5;j++){
            const star = doc.createElement('img');
            star.setAttribute('src', 'img/icon-star-yellow.png');
            footer_star.appendChild(star);  
        }
    }else{
        for(let j=1;j<=4;j++){
            const star = doc.createElement('img');
            star.setAttribute('src', 'img/icon-star-yellow.png');
            footer_star.appendChild(star);  
        }
        const star = doc.createElement('img');
        star.setAttribute('src', 'img/icon-star.png');
        footer_star.appendChild(star);
    }
    if(i==1){
        const fancybox = doc.createElement('div');
        fancybox.className = 'fancybox-top';
        fancybox.innerHTML = 'ХИТ ПРОДАЖ';
        content_products.appendChild(fancybox);
    }

    const footer_nameProduct = doc.createElement('div');
    footer_nameProduct.className = 'footer_name-product';
    footer_nameProduct.innerHTML = products[1][i];
    footer.appendChild(footer_nameProduct);
    const hr = doc.createElement('hr');
    footer.appendChild(hr);
    const footer_price = doc.createElement('div');
    footer_price.className = 'footer_price';
    footer_price.innerHTML = products[2][i];
    footer.appendChild(footer_price);
}