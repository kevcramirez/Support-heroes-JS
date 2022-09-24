window.drawer = {
    drawer_state: 'true',
    updateDrawer: function (productAdded) {
        const drawer = document.querySelector('.drawer-container')
        const productName = productAdded.querySelector('h3').innerText
        const productPrice = productAdded.querySelector('.price').innerText
        const productImage = productAdded.querySelector('img').getAttribute('src')
        const drawerInner = `
        <h2>Product added</h2>
        <div class="drawer-inner">
            <div class="drawer-img-container">
                <img src="${productImage}" alt="">
            </div>
            <div class="detail-container">
                <h3>${productName}</h3>
                <div class="price">${productPrice}</div>
            </div>

        </div>
        `
        drawer.innerHTML = drawerInner
    },
    getProductAdded: function (button) {
        const productAdded = button.closest('.product-item')
        return productAdded
    },
    showDrawer: function () {
        const drawer = document.querySelector('.drawer-container')
        drawer.classList.remove('hidden')
        setTimeout(() => {
            drawer.classList.add('hidden')
        }, 5000)
    },
    setEventListener: function () {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.product-item button')) {
                setTimeout(() => {
                    const productAdded = window.drawer.getProductAdded(e.target)
                    this.afterProductAdded(productAdded)
                }, 700);
            }
        })
    },
    afterProductAdded: (productAdded) => { }
}

window.drawer.afterProductAdded = window.JS_afterProductAdded
drawer.setEventListener()