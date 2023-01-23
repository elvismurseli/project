const tableBody = document.querySelector('#cart table tbody')

const getLS = () => JSON.parse(localStorage.getItem('products')) || []

const products = getLS()

if (products.length <= 0) tableBody.innerHTML = 'Nothing in the cart'
else {
    tableBody.innerHTML = products.map((product, index) => {
        return `<tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>$${product.price}</td>
                    <td>${product.desc}</td>
                </tr>
        `
    }).join('')
}