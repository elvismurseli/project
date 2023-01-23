const tableBody = document.querySelector('#cart table tbody')

const getLS = () => JSON.parse(localStorage.getItem('products')) || []

const products = getLS()

populateDOM()

function removeFromLS(e) {
    const findIndex = products.findIndex(pr => pr.name === e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText)
    products.splice(findIndex, 1)
    localStorage.setItem('products', JSON.stringify(products))
    populateDOM()
}

function populateDOM(){
    if (products.length <= 0) tableBody.innerHTML = 'Nothing in the cart'
    else {
        tableBody.innerHTML = products.map((product, index) => {
            return `<tr>
                        <td>${index + 1}</td>
                        <td>${product.name}</td>
                        <td>$${product.price}</td>
                        <td>${product.desc}</td>
                        <td class="x-btn" onclick="removeFromLS(event)"><i class="fa-solid fa-times"></i></td>
                    </tr>
            `
        }).join('')
    }
}