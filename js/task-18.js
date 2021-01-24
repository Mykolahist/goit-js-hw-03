const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  let productPrice = 0;
    
    for (const product of products) {
      if (productName === product.name) {
        productPrice = product.price;
        
        return productPrice;
      }
    }
    
    return null;
  // Пиши код выше этой строки
}
