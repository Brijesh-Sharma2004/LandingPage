const products = [
  {
    image: "images/airpods.jpg",
    name: "Apple AirPods Pro (2nd Gen)",
    rating: "⭐⭐⭐⭐⭐ 4.8",
    priceRuppes: 22999,
    description:
      "Active Noise Cancellation, Transparency Mode, USB-C Charging Case, Up to 30 Hours Battery.",
    category: "Electronics",
    type: "Airpods",
  },
  {
    image: "images/s25ultra.jpg",
    name: "Samsung Galaxy S25 Ultra",
    rating: "⭐⭐⭐⭐⭐ 4.7",
    priceRuppes: 129999,
    description:
      "6.9-inch AMOLED Display, 200MP Camera, Snapdragon Processor, 5000mAh Battery.",
    category: "Electronics",
    type: "Mobile Phone",
  },
  {
    image: "images/headphones.jpg",
    name: "Sony WH-1000XM5",
    rating: "⭐⭐⭐⭐⭐ 4.8",
    priceRuppes: 29990,
    description:
      "Industry-leading Noise Cancellation, 30 Hours Battery, Bluetooth 5.2, Premium Comfort.",
    category: "Electronics",
    type: "HeadPhones",
  },
  {
    image: "images/laptop.jpg",
    name: "ASUS ROG Strix G16",
    rating: "⭐⭐⭐⭐⭐ 4.6",
    priceRuppes: 139990,
    description: "Intel Core i7, RTX 4060, 16GB RAM, 1TB SSD, 165Hz Display.",
    category: "Electronics",
    type: "laptop",
  },
  {
    image: "images/apple-watch.jpg",
    name: "Apple Watch Series 10",
    rating: "⭐⭐⭐⭐⭐ 4.8",
    priceRuppes: 49900,
    description:
      "Always-On Retina Display, GPS, Heart Rate Monitoring, Fitness Tracking, Water Resistant.",
    category: "Electronics",
    type: "Watch",
  },
  {
    image: "images/logitech-mouse.jpg",
    name: "Logitech MX Master 3S",
    rating: "⭐⭐⭐⭐⭐ 4.9",
    priceRuppes: 9995,
    description:
      "Wireless Ergonomic Mouse, 8K DPI Sensor, USB-C Fast Charging, Multi-Device Support.",
    category: "Electronics",
    type: "Mouse",
  },
  {
    image: "images/canon-camera.jpg",
    name: "Canon EOS R50 Mirrorless Camera",
    rating: "⭐⭐⭐⭐⭐ 4.7",
    priceRuppes: 74990,
    description:
      "24.2MP APS-C Sensor, 4K Video Recording, Dual Pixel Autofocus, 18-45mm Lens Kit.",
    category: "Electronics",
    type: "Camera",
  },
  {
    image: "images/dell-xps15.jpg",
    name: "Dell XPS 15 Laptop",
    rating: "⭐⭐⭐⭐⭐ 4.7",
    priceRuppes: 169999,
    description:
      "Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 4050, 15.6-inch OLED Display.",
    category: "Electronics",
    type: "laptop",
  },
  {
    image: "images/iphone16pro.jpg",
    name: "Apple iPhone 16 Pro",
    rating: "⭐⭐⭐⭐⭐ 4.9",
    priceRuppes: 119900,
    description:
      "A18 Pro Chip, 256GB Storage, Pro Camera System, Titanium Design, Super Retina XDR Display.",
    category: "Electronics",
    type: "Mobile Phone",
  },
  {
    image: "images/samsung-tv.jpg",
    name: "Samsung 55-inch 4K Smart TV",
    rating: "⭐⭐⭐⭐⭐ 4.6",
    priceRuppes: 59999,
    description:
      "Crystal UHD Display, HDR10+, Smart Hub, Voice Assistant, Dolby Digital Audio.",
    category: "Electronics",
    type: "LED TV",
  },
  {
    image: "images/jbl-flip6.jpg",
    name: "JBL Flip 6 Speaker",
    rating: "⭐⭐⭐⭐⭐ 4.7",
    priceRuppes: 11999,
    description:
      "Portable Bluetooth Speaker, IP67 Waterproof, 12 Hours Battery Life, Powerful Bass.",
    category: "Electronics",
    type: "Speaker",
  },
  {
    image: "images/legion5.jpg",
    name: "Lenovo Legion 5",
    rating: "⭐⭐⭐⭐⭐ 4.8",
    priceRuppes: 124990,
    description:
      "AMD Ryzen 7, RTX 4060, 16GB RAM, 1TB SSD, 165Hz Gaming Display.",
    category: "Electronics",
    type: "laptop",
  },
  {
    image: "images/kindle.jpg",
    name: "Kindle Paperwhite",
    rating: "⭐⭐⭐⭐⭐ 4.8",
    priceRuppes: 16999,
    description:
      "6.8-inch Glare-Free Display, Adjustable Warm Light, Waterproof, Weeks of Battery Life.",
    category: "Electronics",
    type: "Kindle",
  },
];

displayproducts(products);

const allproductsBtn = document.getElementById("all-products");

allproductsBtn.addEventListener("click", () => {
  displayproducts(products);
  setActiveButton(allproductsBtn, "all");
});

// ! local storage for productcount..

let ProductCount = JSON.parse(localStorage.getItem("productcount")) || [];

document.getElementById("cart-count").textContent = ProductCount.length;
function addtoCart(product) {
  ProductCount.push(product);

  document.getElementById("cart-count").textContent = ProductCount.length;

  localStorage.setItem("productcount", JSON.stringify(ProductCount));
}

// ! banner background..

const images = [
  "images/amazon_banner.jpg",
  "images/amazon_banner2.jpg",
  "images/amazon_banner3.jpg",
  "images/amazon_banner4.jpg",
];

const bannerImage = document.getElementById("banner-image");

let currentImage = 0;

bannerImage.src = images[currentImage];
setInterval(() => {
  currentImage++;

  if (currentImage === images.length) currentImage = 0;

  bannerImage.src = images[currentImage];
}, 3000);

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ! filter used----

const abovePriceBtn = document.getElementById("above-price");

function setActiveButton(clickedButton, group) {
  document
    .querySelectorAll(`.filter-btn[data-group="${group}"]`)
    .forEach((button) => {
      button.classList.remove("bg-yellow-400");
      button.classList.add("bg-gray-200", "hover:bg-gray-300");
    });

  clickedButton.classList.remove("bg-gray-200", "hover:bg-gray-300");
  clickedButton.classList.add("bg-yellow-400", "hover:bg-yellow-500");
}

let isfilterOn = false;

abovePriceBtn.addEventListener("click", () => {
  isfilterOn = !isfilterOn;
  if (isfilterOn) {
    console.log("on");
    abovePrice();
    setActiveButton(abovePriceBtn, "price");
  } else {
    console.log("off");
  }
});

function abovePrice() {
  const expensiveproducts = products.filter((product) => {
    return product.priceRuppes > 30000;
  });

  displayproducts(expensiveproducts);
}

const underPriceBtn = document.getElementById("under-price");

underPriceBtn.addEventListener("click", () => {
  underPrice();
  setActiveButton(underPriceBtn, "price");
});

function underPrice() {
  const expensiveproducts = products.filter((product) => {
    return product.priceRuppes < 30000;
  });

  displayproducts(expensiveproducts);
}

const ratingBtn = document.getElementById("rating-btn");

ratingBtn.addEventListener("click", () => {
  rating();
  setActiveButton(ratingBtn, "rating");
});

function rating() {
  const ratingproducts = products.filter((product) => {
    return parseFloat(product.rating.match(/\d+(\.\d+)?/)[0]) >= 4;
  });

  displayproducts(ratingproducts);
}

const electronicsBtn = document.getElementById("Electronics-btn");

electronicsBtn.addEventListener("click", () => {
  electroCategory();
  setActiveButton(electronicsBtn, "category");
});

function electroCategory() {
  const Electroproducts = products.filter((product) => {
    return product.category === "Electronics";
  });

  displayproducts(Electroproducts);
}

const searchInput = document.getElementById("search-input");
const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase().trim();

  if (searchText === "") {
    suggestions.classList.add("hidden");
    suggestions.innerHTML = "";
  }

  const searchedProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText) ||
      product.type.toLowerCase().includes(searchText)
    );
  });

  if (searchedProducts.length === 0) {
    suggestions.classList.add("hidden");
    suggestions.innerHTML = "";
  }

  suggestions.innerHTML = searchedProducts
    .map((product) => {
      return `
    <div class="suggestion-item px-4 py-3 hover:bg-gray-100 cursor-pointer" data-name="${product.name}">
    ${product.name} </div>`;
    })
    .join("");

  suggestions.classList.remove("hidden");

  // displayproducts(searchedProducts);
});

suggestions.addEventListener("click", (event) => {
  const item = event.target.closest(".suggestion-item");

  if (!item) return;

  const productName = item.dataset.name;

  searchInput.value = productName;

  suggestions.classList.add("hidden");

  searchedProducts(productName);
});

function searchedProducts(searchText) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  displayproducts(filteredProducts);
}

function displayproducts(productsToDisplay) {
  let productsHTML = "";

  productsToDisplay.forEach((product) => {
    productsHTML += `
    <div class="bg-white p-4 rounded shadow flex flex-col hover:shadow-xl transition duration-300">
                    <img src="${product.image}" class="w-full h-52 object-contain">
                    <h3 class="text-lg font-semibold">${product.name}</h3>
                    <p class="text-yellow-500">${product.rating}</p>
                    <p class="text-2xl font-bold">₹${product.priceRuppes.toLocaleString("en-IN")}</p>
                    <p class="text-gray-600 text-sm line-clamp-3">${product.description}</p>
                    <button class="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full font-medium cursor-pointer js-add-to-cart">Add to Cart</button>
                </div>
                `;
  });

  document.querySelector(".js-product-grid").innerHTML = productsHTML;

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", (product) => {
      console.log("Product Added");
      addtoCart(product);
    });
  });
}

const catagories = [
  "All",
  "Electronics",
  "Laptops",
  "Mobiles",
  "Clothing",
  "Books",
  "Shoes",
  "Watches",
  "Beauty",
  "Home",
  "Furniture",
  "Sports",
  "Toys",
  "Gaming",
  "Accessories",
  "Groceries",
  "Jewelry",
  "Automotive",
];

const catagoriesBtn = document.getElementById("catagories-btn");

// const container = document.getElementById("filter-container");

// container.scrollBy({
//   left: 200,
//   behavior: "smooth"
// });

catagories.forEach((catagory) => {
  const option = document.createElement("option");

  option.textContent = catagory;
  option.classList.add("catagories-btn");

  catagoriesBtn.appendChild(option);
});
