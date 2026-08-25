# 🛒 Amazon Landing Page

A responsive **Amazon-inspired e-commerce landing page** built to practice and demonstrate modern frontend development concepts using **HTML, Tailwind CSS, and JavaScript**.

The project focuses on recreating the structure and user experience of an e-commerce homepage while implementing interactive features such as product rendering, search, filtering, navigation, and dynamic UI updates.

> 🚧 **Project Status:** Actively under development. More features, improvements, and refinements will be added.

---

## 🌐 Live Demo

🔗 **Live Demo:** *https://amazon-landing-page-rust.vercel.app/*

---

## 📸 Preview

> Screenshots will be added after the current UI improvements are completed.

---

## ✨ Features

### 🧭 Navigation & Layout

* Amazon-inspired navigation bar
* Search bar with product search functionality
* Category navigation
* Responsive layout structure
* Sticky navigation/filter sections
* Mobile-friendly hamburger menu

### 🛍️ Product Section

* Dynamic product rendering using JavaScript
* Product cards with:

  * Product image
  * Product name
  * Price
  * Rating
  * Category
* Product data loaded dynamically

### 🔎 Search

* Search products by name
* Dynamic search results
* Search works with the product dataset

### 🎯 Product Filtering

* Filter products by price
* Filter products by rating
* Filter products by category
* Multiple filters can be combined

### 🛒 Cart

* Add products to cart
* Dynamic cart item count
* Cart state maintained using browser storage

### 🎨 UI & UX

* Tailwind CSS utility classes
* Hover effects and transitions
* Responsive product layouts
* Interactive buttons and controls
* Clean e-commerce-style interface

---

## 🛠️ Tech Stack

| Technology            | Purpose                             |
| --------------------- | ----------------------------------- |
| **HTML5**             | Page structure and semantic markup  |
| **Tailwind CSS**      | Styling and responsive UI           |
| **JavaScript (ES6+)** | Interactivity and application logic |
| **Fetch API**         | Retrieving product data             |
| **JSON**              | Handling product data               |
| **LocalStorage**      | Persisting client-side data         |
| **Vite**              | Development environment             |

---

## 📂 Project Structure

```text
LandingPage/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── scripts/
│   └── styles/
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

> The project structure may change as development continues.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Brijesh-Sharma2004/LandingPage.git
```

### 2. Navigate to the project

```bash
cd LandingPage
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local development URL

Vite will provide a local URL in the terminal, usually:

```text
http://localhost:5173
```

---

## 🧠 What I Learned

Building this project helped me strengthen my understanding of:

* Structuring a real-world frontend project
* Writing reusable JavaScript functions
* Working with arrays and objects
* Using `map()`, `filter()`, and other array methods
* DOM manipulation
* Event handling
* Search and filtering logic
* Combining multiple filters
* Fetching data from APIs
* Converting JSON responses into JavaScript objects
* Working with `async/await`
* Managing data using `localStorage`
* Building responsive layouts with Tailwind CSS
* Creating reusable UI components
* Debugging frontend issues

---

## 🔧 Challenges & Solutions

### Combining Search and Filters

One of the challenges was making search and multiple filters work together instead of one feature overriding another.

The solution was to treat the displayed products as the result of multiple conditions:

```text
Original Products
       ↓
    Search
       ↓
   Category
       ↓
   Price Filter
       ↓
   Rating Filter
       ↓
Final Products
```

This approach makes the filtering system easier to extend with additional conditions.

---

## 🔮 Future Improvements

The project is still under development. Planned improvements include:

* [x] Complete mobile responsive design
* [x] Improve hamburger menu functionality
* [ ] Add product details page
* [ ] Add dedicated cart page
* [ ] Add quantity controls in cart
* [ ] Improve search functionality
* [ ] Add sorting by price and rating
* [ ] Add category-based navigation
* [ ] Improve filter UI and UX
* [ ] Add loading states
* [ ] Add error handling for API requests
* [ ] Add product pagination
* [ ] Add wishlist functionality
* [ ] Improve accessibility
* [ ] Deploy the project
* [ ] Add screenshots and live demo

---

## 🎯 Project Goals

The main goal of this project is to move beyond static webpage development and understand how a real-world frontend application is structured.

I am using this project to practice:

**UI Development → JavaScript Logic → API Integration → State Management → Responsive Design**

---

## ⚠️ Disclaimer

This project is created **for educational and portfolio purposes only**.

It is an Amazon-inspired frontend project and is **not affiliated with, endorsed by, or sponsored by Amazon**.

Amazon and related trademarks belong to their respective owners.

---

## 👨‍💻 Author

### Brijesh Sharma

B.Tech CSE Student | Frontend Developer | DSA Enthusiast

**GitHub:**
https://github.com/Brijesh-Sharma2004

---

## ⭐ Feedback

If you have suggestions or feedback about the project, feel free to open an issue or connect with me on GitHub.

---

### 📌 Note

This project represents my ongoing learning journey in frontend development. The codebase and features will continue to evolve as I learn and implement new concepts.
