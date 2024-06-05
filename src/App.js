import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Crap Handy Shopping Tote', price: 250, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLGtCtVIoWjNlVmgdcRu4Xb1Y_aS7eVEucg&s', rating: "7/10" },
  { id: 2, name: 'Weverse Shop Gift', price: 400, image: 'https://www.kpoptown.com/157766-large_default/-weverse-shop-gift-smart-album-newjeans-single-album-how-sweet-random-ver-weverse-albums-ver.jpg', rating: "6/10" },
  { id: 3, name: 'Paper Bag', price: 250, image: 'https://homebakersmart.co.in/cdn/shop/products/NR6rbMHn4RIB4nHB4tp.jpg?v=1688715414', rating: "5/10" },
  { id: 4, name: 'Polymer Transparent Plastic Bottles', price: 620, image: 'https://5.imimg.com/data5/ANDROID/Default/2022/6/CA/BE/NO/37316633/product-jpeg.jpg', rating: "7/10" },
  { id: 5, name: 'Baby Boy and Baby Girls, New Born Baby', price: 1050, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vwuVTbi8BlTpbDIehrls58ewmLawfwfFNw&s', rating: "8/10" },
  { id: 6, name: 'Hot Wheels royalty', price: 720, image: 'https://www.shutterstock.com/image-photo/hot-wheels-kids-toys-cars-260nw-2220113543.jpg', rating: "6/10" },
  { id: 7, name: 'Griots Garage 3 Mini Random Orbital Polisher Kit', price: 890, image: 'https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/large/12360460_ttg_gg008_pri_larg.jpg', rating: "5/10" },
  { id: 8, name: 'Actionable Tips to Optimize Images - Lezzat', price: 12000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrg6KtfY1-mjRFHWjxL6AodX0PbH1CJ8tloZCpo_3RuHzu7doYxPjOpTfePPUgPclhark&usqp=CAU', rating: "7/10" },
  { id: 9, name: 'zimba - Tool Set Construction Tools ', price: 910, image: 'https://www.zimbapro.in/uploads/1694777399.jpg', rating: "7.5/10" },
  { id: 10, name: 'Sander | Black & Orange | VonHaus', price: 3500, image: 'https://www.vonhaus.com/media/catalog/product/cache/0a32174fc8ed1b23175c42f7f0b91bb6/o/r/orbital-sander_image_03.jpg', rating: "5/10" },
];

const ShoppingPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(prevItems => prevItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }));
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <span className='start'>Start Bootstrap</span>
          <span className='home'>Home | About | Shop</span>
        </div>
        <div className="top-bar-right">
        🛒 Cart: {cartItems.length}
        </div>
      </div>
      <div className="shop-info">
        <div className="shop-info-content">
          <h1>Shop in style</h1>
          <p className='con'> with this shop homepage template</p>
        </div>
      </div>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div><h3>{product.name}</h3></div>
            <div><b>Rs.</b> {product.price}</div>
            <div><b>Rating:</b> {product.rating}</div>
            {cartItems.find(item => item.id === product.id) ? (
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;