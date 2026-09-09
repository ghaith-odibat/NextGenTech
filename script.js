
const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1299.99,
      image: "https://www.techexperiencecentre.com/media/catalog/product/cache/0a9ae47c7a2c7a4cb1e050f523555f03/i/p/iphone_15_pro_max_blue_titanium.png",
      description: "The iPhone 15 Pro Max is the ultimate iPhone experience, offering the largest display, the longest battery life, and the most powerful camera system.  It's perfect for professionals, content creators, and anyone who wants the best of the best.",
      tags: ["Professional", "Content Creator", "Large Display", "Long Battery Life"]
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch",
      price: 2499.99,
      image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png",
      description: "The MacBook Pro 16-inch is the ultimate MacBook Pro experience, offering the largest display, the most powerful processor, the most dedicated GPU, and the longest battery life.  It's perfect for professionals, developers, and anyone who needs the best of the best.",
      tags: ["Professional", "Developer", "Large Display", "Long Battery Life"]
    },
    {
      id: 3,
      name: "Apple Watch Series 8",
      price: 399.99,
      image: "https://www.pngarts.com/files/8/Apple-Watch-PNG-Image-Background.png",
      description: "The Apple Watch Series 8 is a great smartwatch that's perfect for fitness enthusiasts, everyday users, and anyone looking for a stylish and functional device. It features a large display, advanced health sensors, and a long battery life.",
      tags: ["Fitness", "Health", "Stylish", "Functional"]
    },
    {
      id: 4,
      name: "iMac 24-inch",
      price: 1499.99,
      image: "https://images-cdn.ubuy.co.in/6512803162a70c31aa5ac75a-apple-imac-all-in-one-desktop-27-inch.jpg",
      description: "The iMac 24-inch is a stylish and powerful all-in-one computer that's perfect for students, everyday users, and anyone looking for a great value. It features a beautiful display, a powerful processor, and a sleek design.",
      tags: ["Student", "Everyday Use", "Stylish", "Value"]
    },
    {
      id: 5,
      name: "PlayStation 5",
      price: 499.99,
      image: "https://pacific.com.ng/wp-content/uploads/2022/09/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.png",
      description: "The PlayStation 5 is a powerful gaming console that's perfect for gamers of all levels. It features a fast processor, a beautiful display, and a wide range of games to choose from.",
      tags: ["Gaming", "High-Performance", "Games", "Controller"]
    },
    {
      id: 6,
      name: "Xbox Series X",
      price: 499.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFRrbQ9WDJ6hiIreMaoOfVVLfR6gzKlr5bw&s",
      description: "The Xbox Series X is a powerful gaming console that's perfect for gamers of all levels. It features a fast processor, a beautiful display, and a wide range of games to choose from.",
      tags: ["Gaming", "High-Performance", "Games", "Controller"]
    },
    {
      id: 7,
      name: "Nintendo Switch OLED Model",
      price: 349.99,
      image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-boxart-1200x675",
      description: "The Nintendo Switch OLED Model offers a vibrant 7-inch OLED screen with a wider color gamut and higher contrast for a stunning visual experience. It also boasts enhanced audio and a redesigned kickstand.",
      tags: ["Gaming", "Portable", "Games", "Controller"]
    },
    {
      id: 8,
      name: "Samsung Galaxy Tab S9 Ultra",
      price: 1199.99,
      image: "https://images.samsung.com/is/image/samsung/p6pim/hk_en/2307/gallery/hk-en-galaxy-tab-s9-ultra-5g-x916-sm-x916bzaetgy-thumb-537450355",
      description: "The Samsung Galaxy Tab S9 Ultra is a powerful tablet with a massive 14.6-inch AMOLED display, making it perfect for productivity, entertainment, and creativity. It's powered by the latest Qualcomm Snapdragon processor and features the S Pen.",
      tags: ["Productivity", "Entertainment", "Creativity", "S Pen"]
    },
    {
      id: 9,
      name: "iPad Pro 12.9-inch",
      price: 1099.99,
      image: "https://i5.walmartimages.com/seo/Apple-12-9-inch-iPad-Pro-2018-Wi-Fi-64GB_ef7db33d-b743-437a-8bdd-76cdbc06804b_1.3a432e7f29b7cb0896417adb46a6bc46.jpeg",
      description: "The iPad Pro 12.9-inch is a versatile tablet that's perfect for productivity, entertainment, and creativity. It features a Liquid Retina XDR display, the M2 chip for powerful performance, and support for the Apple Pencil and Magic Keyboard.",
      tags: ["Productivity", "Entertainment", "Creativity", "Sleek"]
    },
    {
      id: 10,
      name: "Lenovo Thinkpad 8th Gen",
      price: 1999.99,
      image: "https://os-jo.com/image/cache/catalog/products/laptops/21HQS0J000/ThinkPad_X1_Yoga_Gen_8_CT1_111-ezgif.com-avif-to-jpg-converter-650x400.jpg",
      description: "The Lenovo ThinkPad X1 Yoga Gen 8 is a premium 2-in-1 laptop with a 14-inch OLED display, making it perfect for professionals and anyone looking for a powerful and versatile device. It features a long battery life, powerful processors, and a comfortable keyboard.",
      tags: ["Professional", "Versatile", "Durable", "Secure"]
    },
    {
      id: 11,
      name: "Samsung Galaxy S23 Ultra",
      price: 1199.99,
      image: "https://i5.walmartimages.com/seo/Samsung-Galaxy-S23-Ultra-5G-Dual-S918B-512GB-12GB-RAM-GSM-Unlocked-Green_d2290cc8-3f71-479c-b9d7-1ba520897afe.80616f3a06fe5be8483e0662ac4d2c7d.jpeg",
      description: "The Samsung Galaxy S23 Ultra is a powerful phone that's perfect for professionals, content creators, and anyone who needs the best performance and features. It features a stunning display, a powerful processor, an exceptional camera system, and an S Pen.",
      tags: ["Professional", "Content Creator", "High-Performance", "S Pen"]
    },
    {
      id: 12,
      name: "Microsoft Surface Go 3",
      price: 549.99,
      image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=6098",
      description: "The Microsoft Surface Go 3 is a versatile 2-in-1 device that's perfect for students, everyday users, and anyone looking for a portable and productive device. It features a 10.5-inch touchscreen display, a powerful Intel processor, and a long battery life.",
      tags: ["Student", "Everyday Use", "Portable", "Productivity"]
    },
    {
      id: 13,
      name: "Lenovo IdeaPad Flex 5",
      price: 749.99,
      image: "https://p4-ofp.static.pub//fes/cms/2024/06/21/c6vmfj0lrgsczu3y090lirvas34fcu207515.png",
      description: "The Lenovo IdeaPad Flex 5 is a versatile 2-in-1 laptop that's perfect for students, everyday users, and anyone looking for a powerful and portable device. It features a 14-inch touchscreen display, a powerful AMD processor, and a long battery life.",
      tags: ["Student", "Everyday Use", "Versatile", "Portable"]
    },
    {
      id: 14,
      name: "Acer Swift 3",
      price: 799.99,
      image: "https://m.media-amazon.com/images/I/81nN5u1MEuL._AC_SL1500_.jpg",
      description: "The Acer Swift 3 is a lightweight and portable laptop that's perfect for students, professionals, and anyone looking for a stylish and powerful device. It features a 14-inch display, a powerful Intel processor, and a long battery life.",
      tags: ["Student", "Professional", "Portable", "Stylish"]
    },
    {
      id: 15,
      name: "GoPro HERO11 Black",
      price: 499.99,
      image: "https://gopro.com/on/demandware.static/-/Sites-gopro-products/default/dwd909d4f6/images/Product%20Images/cameras/CHDHX-111-master/compare-h11.png",
      description: "The GoPro HERO11 Black is a premium action camera that's perfect for anyone looking for a high-quality video and photo experience. It features a durable design, a long battery life, and a wide range of features.",
      tags: ["Action Camera", "High-Quality", "Durable", "Wide Range of Features"]
    }
  ];

const PRODUCT_PAGE_IDS = new Set([1, 2, 3, 4, 5]);
const CART_STORAGE_KEY = 'nextgentech.cart';
const API_BASE_URL = (window.NEXTGENTECH_CONFIG?.apiBaseUrl ?? '').replace(/\/+$/, '');

const productGrid = document.querySelector('.product-grid');
const cartList = document.getElementById('cartList');
const cartCount = document.getElementById('cartCount');
const totalCost = document.getElementById('totalCost');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const searchInput = document.getElementById('searchInput');

let cart = loadCart();

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (!Array.isArray(stored)) {
      return [];
    }
    return stored.filter(item => item.quantity > 0 && products.some(p => p.id === item.id));
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // Storage is unavailable in private mode and on file:// in some browsers.
  }
}

function findProduct(productId) {
  return products.find(p => p.id === productId);
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + findProduct(item.id).price * item.quantity, 0);
}

function addToCart(productId) {
  const line = cart.find(item => item.id === productId);

  if (line) {
    line.quantity += 1;
  } else if (findProduct(productId)) {
    cart.push({ id: productId, quantity: 1 });
  } else {
    return;
  }

  cartChanged();
}

function setQuantity(productId, quantity) {
  if (quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  } else {
    const line = cart.find(item => item.id === productId);
    if (!line) {
      return;
    }
    line.quantity = quantity;
  }

  cartChanged();
}

function cartChanged() {
  saveCart();
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartModal.style.display === 'block') {
    displayCart();
  }
}

function displayCart() {
  cartList.innerHTML = '';

  if (cart.length === 0) {
    cartList.textContent = 'Your cart is empty.';
    totalCost.textContent = '';
    return;
  }

  cart.forEach(item => {
    const product = findProduct(item.id);

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="50">
      <span class="cart-item-name">${product.name}</span>
      <span class="cart-item-price">$${(product.price * item.quantity).toFixed(2)}</span>
      <span class="quantity-controls">
        <button type="button" data-quantity="${item.id}" data-step="-1">&minus;</button>
        <span class="quantity">${item.quantity}</span>
        <button type="button" data-quantity="${item.id}" data-step="1">+</button>
        <button type="button" class="remove" data-remove="${item.id}">Remove</button>
      </span>
    `;
    cartList.appendChild(row);
  });

  totalCost.textContent = `Total: $${cartTotal().toFixed(2)}`;
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product';

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;

  const name = document.createElement('h3');
  name.textContent = product.name;

  const description = document.createElement('p');
  description.textContent = product.description;

  const tags = document.createElement('div');
  tags.className = 'tags';
  product.tags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'tag';
    chip.dataset.tag = tag;
    chip.textContent = tag;
    tags.appendChild(chip);
  });

  const price = document.createElement('p');
  price.textContent = `$${product.price.toFixed(2)}`;

  const addButton = document.createElement('button');
  addButton.className = 'cta';
  addButton.dataset.add = product.id;
  addButton.textContent = 'Add to Cart';

  const actions = document.createElement('div');
  actions.className = 'product-actions';
  actions.appendChild(addButton);

  if (PRODUCT_PAGE_IDS.has(product.id)) {
    const link = document.createElement('a');
    link.className = 'cta details-link';
    link.href = `product${product.id}.html`;
    link.textContent = 'View details';
    actions.appendChild(link);
  }

  card.append(image, name, description, tags, price, actions);

  return card;
}

function displayProducts(list = products) {
  productGrid.innerHTML = '';

  if (list.length === 0) {
    productGrid.textContent = 'No products match your search.';
    return;
  }

  list.forEach(product => productGrid.appendChild(createProductCard(product)));
}

async function saveOrder(order) {
  if (!API_BASE_URL) {
    return false;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    return response.ok;
  } catch {
    return false;
  }
}

productGrid.addEventListener('click', event => {
  const addButton = event.target.closest('[data-add]');
  if (addButton) {
    addToCart(Number(addButton.dataset.add));
    return;
  }

  const chip = event.target.closest('.tag');
  if (chip) {
    const tag = chip.dataset.tag;
    displayProducts(products.filter(product => product.tags.includes(tag)));
  }
});

cartList.addEventListener('click', event => {
  const stepButton = event.target.closest('[data-quantity]');
  if (stepButton) {
    const id = Number(stepButton.dataset.quantity);
    const line = cart.find(item => item.id === id);
    setQuantity(id, line.quantity + Number(stepButton.dataset.step));
    return;
  }

  const removeButton = event.target.closest('[data-remove]');
  if (removeButton) {
    setQuantity(Number(removeButton.dataset.remove), 0);
  }
});

searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim().toLowerCase();

  if (!term) {
    displayProducts();
    return;
  }

  displayProducts(products.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.tags.some(tag => tag.toLowerCase().includes(term))
  ));
});

document.getElementById('cartLink').addEventListener('click', event => {
  event.preventDefault();
  displayCart();
  cartModal.style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', () => {
  cartModal.style.display = 'none';
});

document.getElementById('checkoutButton').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  cartModal.style.display = 'none';
  checkoutModal.style.display = 'block';
});

document.getElementById('closeCheckout').addEventListener('click', () => {
  checkoutModal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === cartModal) {
    cartModal.style.display = 'none';
  } else if (event.target === checkoutModal) {
    checkoutModal.style.display = 'none';
  }
});

checkoutForm.addEventListener('submit', async event => {
  event.preventDefault();

  const order = {
    name: document.getElementById('name').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zip: document.getElementById('zip').value,
  };

  const total = cartTotal();
  const stored = await saveOrder(order);

  alert(`Order placed successfully!
Name: ${order.name}
Address: ${order.address}, ${order.city}, ${order.state} ${order.zip}
Total: $${total.toFixed(2)}

${stored ? 'Your details were saved to the server.' : 'Demo mode: no backend configured, so nothing was saved.'}`);

  cart = [];
  cartChanged();
  checkoutForm.reset();
  checkoutModal.style.display = 'none';
});

cartChanged();
displayProducts();
