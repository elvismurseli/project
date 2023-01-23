const productsArr = [
    {
        src: `https://m.media-amazon.com/images/I/51VpABY-b6L.__AC_SX300_SY300_QL70_FMwebp_.jpg`,
        name: `Logitech G305`,
        price: 136.50,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/71L-flqtTwL._AC_SX679_.jpg`,
        name: `Razer Basilisk V3 Pro`,
        price: 159.66,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/61CGHv6kmWL.__AC_SX300_SY300_QL70_FMwebp_.jpg`,
        name: `BENGOO G9000 Stereo Gaming Headset`,
        price: 25.99,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/81yd9W+0doL._AC_SX679_.jpg`,
        name: `SteelSeries Apex 5 Hybrid Mechanical Gaming Keyboard`,
        price: 69.99,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/71BKQhFzDmL._AC_SX466_.jpg`,
        name: `Razer Kraken Gaming Headset`,
        price: 44.99,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/41MnqIc22VL._AC_.jpg`,
        name: `OffiClever Ergonomic Office Leather Chair`,
        price: 249.99,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/61UGJ7z-sUL.__AC_SX300_SY300_QL70_FMwebp_.jpg`,
        name: `Snpurdiri 60% Wired Gaming Keyboard`,
        price: 28.99,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SX679_.jpg`,
        name: `Redragon S101 Wired Gaming Keyboard`,
        price: 43.99,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/71sJ5u+1OZL._AC_SX466_.jpg`,
        name: `ASTRO Gaming A10 Wired Gaming Headset`,
        price: 39.99,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/81EQdpTXK9L.__AC_SX300_SY300_QL70_FMwebp_.jpg`,
        name: `ErgoTune Supreme Ergonomic Office Chair`,
        price: 549.00,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    },
    {
        src: `https://m.media-amazon.com/images/I/61D+22uRyIL._AC_SX679_.jpg`,
        name: `Ergonomic Gaming Executive Desk Chair`,
        price: 75.89,
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eveniet architecto esse? Adipisci quas atque necessitatibus aspernatur eum id, molestias hic eligendi, alias, ut harum asperiores architecto sunt vero doloribus. Mollitia debitis ullam nesciunt maxime autem repudiandae iste eveniet nihil.`,
    }
]

const getLS = () => JSON.parse(localStorage.getItem('products')) || []

const products = getLS()

//  SHOW PRODUCTS TO DOM 
const productsWrapperEl = document.querySelector('.products-wrapper')
productsWrapperEl.innerHTML = productsArr.map((product, index) => {
    return `
        <div class="product-card" onclick="showModal(event, ${index})">
            <div class="product-card-image">
                <img src="${product.src}" alt="${product.name}" loading="lazy" />
            </div>
            <div>
                <h4>${product.name}</h4>
                <h1>$${product.price}</h1>
                <p>More info</p>
            </div>
        </div>
    `
}).join('')

// CHANGE NAVABR BACKGROUND
window.addEventListener('scroll', () => {
    if (window.scrollY >= 485) {
        document.querySelector('nav').classList.add('scroll-nav')
    } else {
        document.querySelector('nav').classList.remove('scroll-nav')
    }
})

// ADD PRODUCT TO MODAL
const modalEl = document.querySelector('.modal')
function showModal (e, i) {
    modalEl.style.display = 'block'
    modalEl.innerHTML = `
        <i class="fa-solid fa-xmark" onclick="removeModal()"></i>
        <div class="modal-inner">
            <div class="product-card">
                <div class="product-card-image">
                    <img src="${productsArr[i].src}" alt="${productsArr[i].name}" loading="lazy" />
                </div>
                <div>
                    <h4>${productsArr[i].name}</h4>
                    <h1>$${productsArr[i].price}</h1>
                </div>
            </div>
            <div class="product-info">
                <h1>$${productsArr[i].price}</h1>
                <h2>${productsArr[i].name}</h2>
                <p>${productsArr[i].desc}</p>
                <button class="btn cart-btn" data-id="${productsArr[i].name}" onclick="addToLS(event, ${i})">Add to Cart</button>
            </div>
        </div>
    `
    const findFilter = products.filter(pr => pr.name == document.querySelector('.cart-btn').getAttribute('data-id'))
    if (findFilter.length > 0) {
        document.querySelector('.cart-btn').innerText = 'Remove from Cart'
    } else {
        document.querySelector('.cart-btn').innerText = 'Add to Cart'
    }
}

// REMOVE MODAL
function removeModal () {
    modalEl.style.display = 'none'
}

// LOCALSTORAGE
function addToLS(e, i) {
    const obj = {
        src: productsArr[i].src,
        name: productsArr[i].name,
        price: productsArr[i].price,
        desc: productsArr[i].desc
    }

    if (products.length <= 0) {
        products.push(obj)
        localStorage.setItem('products', JSON.stringify(products))
        e.target.innerText = 'Remove from Cart'
    } else {
        const findFilter = products.filter(pr => pr.name == e.target.getAttribute('data-id'))
        if (findFilter.length > 0) {
            const findIndexx = products.findIndex(pr => pr.name == findFilter[0].name)
            products.splice(findIndexx, 1)
            localStorage.setItem('products', JSON.stringify(products))
            e.target.innerText = 'Add to Cart'
        } else {
            products.push(obj)
            localStorage.setItem('products', JSON.stringify(products))
            e.target.innerText = 'Remove from Cart'
        }
    }
}