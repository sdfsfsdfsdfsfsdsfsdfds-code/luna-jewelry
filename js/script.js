const PRODUCTS = [

{
 id:"halo-ring",
 name:"Halo Ring",
 category:"ring",
 price:4850000,

 short:"حلقه‌ای ظریف برای استفاده روزمره؛ ساده ولی چشم‌گیر.",

 description:
 "Halo Ring برای کسیه که دنبال یک حلقه مرتب و راحت می‌گرده. طراحی‌اش شلوغ نیست و به‌راحتی می‌تونه کنار بقیه زیورآلاتت قرار بگیره.",

 material:"طلای ۱۸ عیار",
 weight:"۳.۲ گرم",
 color:"طلایی",
 size:"قابل سفارش در سایزهای مختلف",

 images:[
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85"
 ]
},

{
 id:"luna-pendant",
 name:"Luna Pendant",
 category:"necklace",
 price:6200000,

 short:"گردنبند ظریف با آویز ساده و قابل استفاده هر روز.",

 description:
 "یک آویز ساده که لازم نیست برای پوشیدنش مناسبت خاصی منتظر بمونی. با لباس‌های ساده خیلی خوب خودش رو نشون می‌ده.",

 material:"طلای ۱۸ عیار",
 weight:"۴.۱ گرم",
 color:"طلایی",
 size:"زنجیر ۴۵ سانتی‌متر",

 images:[
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85"
 ]
},

{
 id:"elan-earrings",
 name:"Élan Earrings",
 category:"earring",
 price:3950000,

 short:"گوشواره سبک و جمع‌وجور برای استایل‌های روزانه.",

 description:
 "Élan وزن زیادی نداره و ظاهرش هم شلوغ نیست. اگر دنبال گوشواره‌ای هستی که بیشتر روزها بتونی استفاده کنی، این مدل انتخاب ساده‌ایه.",

 material:"طلای ۱۸ عیار",
 weight:"۲.۶ گرم",
 color:"طلایی",
 size:"۲.۱ سانتی‌متر",

 images:[
  "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1000&q=85"
 ]
},

{
 id:"solitaire",
 name:"Solitaire",
 category:"ring",
 price:7400000,

 short:"حلقه‌ای با نگین مرکزی و ظاهر کلاسیک.",

 description:
 "Solitaire ظاهر کلاسیک‌تری داره؛ تمرکز اصلی روی نگین وسطه و بقیه طراحی ساده نگه داشته شده تا خود حلقه دیده بشه.",

 material:"طلای ۱۸ عیار",
 weight:"۳.۸ گرم",
 color:"طلایی",
 size:"قابل سفارش",

 images:[
  "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85"
 ]
},

{
 id:"celeste-chain",
 name:"Celeste Chain",
 category:"necklace",
 price:5650000,

 short:"زنجیر ظریف با فرم ساده و کاربردی.",

 description:
 "Celeste یک زنجیر مینیماله که می‌تونی به تنهایی یا کنار گردنبندهای دیگه استفاده‌اش کنی.",

 material:"طلای ۱۸ عیار",
 weight:"۳.۹ گرم",
 color:"طلایی",
 size:"۴۵ سانتی‌متر",

 images:[
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=85"
 ]
},

{
 id:"nova-drop",
 name:"Nova Drop",
 category:"earring",
 price:4300000,

 short:"گوشواره آویز با حرکت ظریف و ظاهر زنانه.",

 description:
 "Nova Drop کمی از مدل‌های روزمره بلندتره و موقع حرکت خودش رو بیشتر نشون می‌ده؛ برای وقتی که می‌خوای گوشواره بیشتر به چشم بیاد.",

 material:"طلای ۱۸ عیار",
 weight:"۳ گرم",
 color:"طلایی",
 size:"۳.۵ سانتی‌متر",

 images:[
  "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=85"
 ]
}

];



/* -------------------------
   GENERAL
------------------------- */

const app = document.getElementById("app");

function money(number){

 return new Intl.NumberFormat("fa-IR")
   .format(number) + " تومان";

}

function getProduct(id){

 return PRODUCTS.find(product => product.id === id);

}

function getCart(){

 return JSON.parse(
   localStorage.getItem("luna_cart") || "[]"
 );

}

function saveCart(cart){

 localStorage.setItem(
   "luna_cart",
   JSON.stringify(cart)
 );

 updateCartCount();

}

function updateCartCount(){

 const count =
   getCart().reduce(
     (total,item)=>total + item.qty,
     0
   );

 document
   .querySelectorAll(".cart-count")
   .forEach(el=>{
     el.textContent = count;
   });

}

function toast(message){

 let element =
   document.querySelector(".toast");

 if(!element){

   element=document.createElement("div");

   element.className="toast";

   document.body.appendChild(element);

 }

 element.textContent=message;

 element.classList.add("show");

 setTimeout(()=>{
   element.classList.remove("show");
 },2200);

}



/* -------------------------
   HEADER
------------------------- */

function header(){

 return `

<header>

 <div class="container nav">

   <a class="logo" href="index.html">
     LUNA
     <small>JEWELRY</small>
   </a>

   <nav class="nav-links">

     <a href="index.html">خانه</a>

     <a href="products.html">محصولات</a>

     <a href="about.html">درباره ما</a>

     <a href="guide.html">راهنمای خرید</a>

     <a href="support.html">پشتیبانی</a>

     <a class="cart-link" href="cart.html">
       🛒
       سبد خرید
       <span class="cart-count">0</span>
     </a>

   </nav>

   <button class="menu">
     ☰
   </button>

 </div>

</header>

`;

}



/* -------------------------
   FOOTER
------------------------- */

function footer(){

 return `

<footer>

 <div class="container footer-grid">

   <div>

     <div class="footer-logo">
       LUNA
     </div>

     <p>
       جواهراتی که قرار نیست برای جلب توجه
       شلوغ باشند.
     </p>

   </div>


   <div>

     <h4>صفحات</h4>

     <a href="products.html">
       محصولات
     </a>

     <a href="about.html">
       درباره ما
     </a>

     <a href="guide.html">
       راهنمای خرید
     </a>

   </div>


   <div>

     <h4>کمک</h4>

     <a href="support.html">
       پشتیبانی
     </a>

     <a href="cart.html">
       سبد خرید
     </a>

     <a href="order.html">
       ثبت سفارش
     </a>

   </div>


   <div>

     <h4>تماس</h4>

     <a href="tel:09026543241">
       09026543241
     </a>

     <a
       href="https://instagram.com/luna.jewelry"
       target="_blank">

       @luna.jewelry

     </a>

   </div>

 </div>


 <div
   class="container"
   style="
   border-top:1px solid var(--line);
   margin-top:35px;
   padding-top:20px;
   "
 >

 © 2026 LUNA Jewelry

 </div>

</footer>

`;

}



/* -------------------------
   PRODUCT CARD
------------------------- */

function productCard(product){

 return `

<article class="product-card">

 <a
   href="product.html?id=${product.id}"
   class="product-image"
 >

   <img
     src="${product.images[0]}"
     alt="${product.name}"
   >

 </a>


 <div class="product-info">

   <h3>
     ${product.name}
   </h3>

   <p>
     ${product.short}
   </p>


   <div class="product-bottom">

     <span class="price">
       ${money(product.price)}
     </span>

     <button
       class="small-btn"
       onclick="addToCart('${product.id}')"
     >
       افزودن به سبد
     </button>

   </div>

 </div>

</article>

`;

}



/* -------------------------
   HOME
------------------------- */

function homePage(){

 app.innerHTML = `

 ${header()}

 <main>


 <section class="hero">

   <div class="container hero-content">

     <div class="eyebrow">
       LUNA JEWELRY / EST. 2026
     </div>

     <h1>
       ساده.
       <br>
       <span>خاص.</span>
       <br>
       ماندگار.
     </h1>

     <p>
       جواهراتی برای استفاده واقعی؛
       طراحی‌های ظریف، بدون شلوغی
       و با جزئیاتی که از نزدیک بیشتر دیده می‌شوند.
     </p>


     <div class="buttons">

       <a
         class="btn btn-gold"
         href="products.html"
       >
         دیدن محصولات
       </a>

       <a
         class="btn"
         href="about.html"
       >
         داستان LUNA
       </a>

     </div>

   </div>

 </section>



 <section class="section">

   <div class="container">

     <div class="section-head">

       <div>

         <div class="eyebrow">
           SELECTED PIECES
         </div>

         <h2 class="section-title">
           چند انتخاب از
           <span>LUNA</span>
         </h2>

       </div>

       <p>
         محصولات رو ساده معرفی کردیم؛
         قیمت، جنس و جزئیات رو ببین
         و اگر خوشت اومد وارد صفحه محصول شو.
       </p>

     </div>


     <div
       class="products-grid"
       id="featured-products"
     ></div>

   </div>

 </section>



 <section class="section cream">

   <div class="container about-grid">

     <div class="about-text">

       <div class="eyebrow">
         OUR IDEA
       </div>

       <h2 class="section-title">
         زیبایی لازم نیست
         <span>شلوغ</span>
         باشد.
       </h2>

       <p>
         LUNA از یک ایده ساده شروع شده:
         جواهر باید قابل پوشیدن باشد،
         با زندگی روزمره جور دربیاید
         و بعد از مدتی هم هنوز دوستش داشته باشی.
       </p>

       <a
         class="btn"
         href="about.html"
       >
         بیشتر درباره ما
       </a>

     </div>


     <div class="about-box">

       <strong>01</strong>

       <p>
         «کمتر، اما با دقت بیشتر.»
       </p>

     </div>

   </div>

 </section>


 </main>

 ${footer()}

 <div class="toast"></div>

 `;


 const container =
   document.getElementById("featured-products");

 container.innerHTML =
   PRODUCTS
   .slice(0,3)
   .map(productCard)
   .join("");

}



/* -------------------------
   PRODUCTS PAGE
------------------------- */

function productsPage(){

 app.innerHTML = `

 ${header()}

 <main>

 <section class="page-hero">

   <div class="container">

     <div class="eyebrow">
       LUNA / COLLECTION
     </div>

     <h1>
       محصولات
     </h1>

     <p>
       مدل‌ها رو بر اساس نوع زیورآلات ببین.
       برای هر محصول صفحه جدا با عکس و جزئیات کامل داریم.
     </p>

   </div>

 </section>


 <section class="section">

   <div class="container">

     <div class="filters">

       <button
         class="filter active"
         data-category="all"
       >
         همه
       </button>

       <button
         class="filter"
         data-category="ring"
       >
         انگشتر
       </button>

       <button
         class="filter"
         data-category="necklace"
       >
         گردنبند
       </button>

       <button
         class="filter"
         data-category="earring"
       >
         گوشواره
       </button>

     </div>


     <div
       class="products-grid"
       id="all-products"
     ></div>

   </div>

 </section>

 </main>

 ${footer()}

 <div class="toast"></div>

 `;


 renderProducts(PRODUCTS);


 document
   .querySelectorAll(".filter")
   .forEach(button=>{

     button.addEventListener(
       "click",
       ()=>{

         document
           .querySelectorAll(".filter")
           .forEach(b=>{
             b.classList.remove("active");
           });

         button.classList.add("active");

         const category =
           button.dataset.category;

         if(category==="all"){

           renderProducts(PRODUCTS);

         }else{

           renderProducts(
             PRODUCTS.filter(
               p=>p.category===category
             )
           );

         }

       }
     );

   });

}


function renderProducts(products){

 const container =
   document.getElementById("all-products");

 if(!container)return;

 container.innerHTML =
   products.map(productCard).join("");

}



/* -------------------------
   PRODUCT DETAIL
------------------------- */

function productPage(){

 const id =
   new URLSearchParams(location.search)
   .get("id") || "halo-ring";

 const product =
   getProduct(id);

 if(!product){

   location.href="products.html";

   return;

 }


 app.innerHTML = `

 ${header()}

 <main>

 <section class="section">

 <div class="container">

 <div class="product-detail">


 <div class="gallery">

   ${product.images.map(image=>`

     <img
       src="${image}"
       alt="${product.name}"
     >

   `).join("")}

 </div>


 <div>

   <div class="eyebrow">
     LUNA / ${product.category.toUpperCase()}
   </div>

   <h1 class="detail-title">
     ${product.name}
   </h1>

   <div class="price">
     ${money(product.price)}
   </div>


   <p class="detail-description">
     ${product.description}
   </p>


   <div class="details">

     <div>
       <span>جنس</span>
       <b>${product.material}</b>
     </div>

     <div>
       <span>وزن تقریبی</span>
       <b>${product.weight}</b>
     </div>

     <div>
       <span>رنگ</span>
       <b>${product.color}</b>
     </div>

     <div>
       <span>اندازه</span>
       <b>${product.size}</b>
     </div>

   </div>


   <div class="quantity">

     <button
       onclick="changeDetailQuantity(-1)"
     >
       −
     </button>

     <span id="detailQuantity">
       1
     </span>

     <button
       onclick="changeDetailQuantity(1)"
     >
       +
     </button>

   </div>


   <div class="buttons">

     <button
       class="btn btn-gold"
       onclick="addDetailToCart('${product.id}')"
     >
       افزودن به سبد
     </button>

     <a
       class="btn"
       href="order.html?product=${product.id}"
     >
       سفارش همین محصول
     </a>

   </div>


   <p
     style="
     color:#777;
     font-size:11px;
     margin-top:20px;
     "
   >
     اگر سایز یا جزئیات خاصی می‌خوای،
     هنگام ثبت سفارش در توضیحات بنویس.
   </p>

 </div>


 </div>

 </div>

 </section>

 </main>

 ${footer()}

 <div class="toast"></div>

 `;

}



function changeDetailQuantity(amount){

 const element =
   document.getElementById("detailQuantity");

 let quantity =
   Number(element.textContent);

 quantity =
   Math.max(1,quantity+amount);

 element.textContent=quantity;

}


function addDetailToCart(id){

 const quantity =
   Number(
     document.getElementById(
       "detailQuantity"
     ).textContent
   );

 addToCart(id,quantity);

}



/* -------------------------
   CART
------------------------- */

function cartPage(){

 app.innerHTML = `

 ${header()}

 <main>

 <section class="page-hero">

   <div class="container">

     <div class="eyebrow">
       LUNA / CART
     </div>

     <h1>
       سبد خرید
     </h1>

     <p>
       محصولات انتخابی‌ات اینجا می‌مونن
       تا قبل از ثبت سفارش مرورشون کنی.
     </p>

   </div>

 </section>


 <section class="section">

   <div class="container cart-layout">

     <div
       class="cart-list"
       id="cartList"
     ></div>

     <div
       id="cartSummary"
     ></div>

   </div>

 </section>

 </main>

 ${footer()}

 <div class="toast"></div>

 `;

 renderCart();

}


function renderCart(){

 const list =
   document.getElementById("cartList");

 const summary =
   document.getElementById("cartSummary");

 const cart=getCart();


 if(!cart.length){

   list.innerHTML=`

     <div style="
       border:1px dashed var(--line);
       padding:70px 20px;
       text-align:center;
       color:#999;
     ">

       سبد خریدت هنوز خالیه.

       <br><br>

       <a
         class="btn btn-gold"
         href="products.html"
       >
         دیدن محصولات
       </a>

     </div>

   `;

   summary.innerHTML="";

   return;

 }


 let total=0;


 list.innerHTML =
 cart.map(item=>{

   const product =
     getProduct(item.id);

   const subtotal =
     product.price * item.qty;

   total += subtotal;


   return `

   <div class="cart-item">

     <img
       src="${product.images[0]}"
       alt="${product.name}"
     >

     <div>

       <h3>
         ${product.name}
       </h3>

       <p style="color:#999;font-size:12px">
         ${money(product.price)}
       </p>

       <div class="quantity">

         <button
           onclick="changeCartQuantity('${product.id}',-1)"
         >
           −
         </button>

         <span>
           ${item.qty}
         </span>

         <button
           onclick="changeCartQuantity('${product.id}',1)"
         >
           +
         </button>

       </div>

     </div>


     <button
       class="small-btn"
       onclick="removeFromCart('${product.id}')"
     >
       حذف
     </button>

   </div>

   `;

 }).join("");


 summary.innerHTML=`

 <div class="summary">

   <h2>
     خلاصه سفارش
   </h2>

   <div class="summary-row">

     <span>
       تعداد
     </span>

     <span>
       ${cart.reduce((s,i)=>s+i.qty,0)}
     </span>

   </div>


   <div class="summary-row">

     <span>
       مبلغ محصولات
     </span>

     <span>
       ${money(total)}
     </span>

   </div>


   <div class="summary-total">
     ${money(total)}
   </div>


   <a
     href="order.html"
     class="btn btn-gold"
     style="
     display:block;
     text-align:center;
     margin-top:20px;
     "
   >
     ادامه و ثبت سفارش
   </a>

 </div>

 `;

}



/* -------------------------
   CART ACTIONS
------------------------- */

function addToCart(id,quantity=1){

 const cart=getCart();

 const item =
   cart.find(
     item=>item.id===id
   );


 if(item){

   item.qty += quantity;

 }else{

   cart.push({
     id:id,
     qty:quantity
   });

 }


 saveCart(cart);

 toast("محصول به سبد خرید اضافه شد.");

}


function changeCartQuantity(id,amount){

 const cart=getCart();

 const item =
   cart.find(
     item=>item.id===id
   );

 if(!item)return;

 item.qty =
   Math.max(
     1,
     item.qty+amount
   );

 saveCart(cart);

 renderCart();

}


function removeFromCart(id){

 saveCart(
   getCart()
   .filter(item=>item.id!==id)
 );

 renderCart();

 toast("محصول از سبد حذف شد.");

}



/* -------------------------
   ORDER PAGE
------------------------- */

function orderPage(){

 app.innerHTML = `

 ${header()}

 <main class="cream">

 <section class="section">

 <div class="container">

 <div class="section-head">

   <div>

     <div
       class="eyebrow"
       style="color:#92713d"
     >
       LUNA / ORDER
     </div>

     <h1 class="section-title">
       ثبت سفارش
     </h1>

   </div>

   <p>
     اطلاعات رو دقیق وارد کن تا
     برای هماهنگی سفارش باهات تماس بگیریم.
   </p>

 </div>


 <div class="form-layout">


 <div class="form-box">

   <form id="orderForm">

     <div class="form-grid">


       <div class="field">

         <label>
           نام و نام خانوادگی *
         </label>

         <input
           required
           placeholder="مثلاً سارا احمدی"
         >

       </div>


       <div class="field">

         <label>
           شماره موبایل *
         </label>

         <input
           required
           type="tel"
           placeholder="09xxxxxxxxx"
         >

       </div>


       <div class="field">

         <label>
           شهر *
         </label>

         <input
           required
           placeholder="تهران"
         >

       </div>


       <div class="field">

         <label>
           کد پستی
         </label>

         <input
           placeholder="۱۰ رقم"
         >

       </div>


       <div class="field full">

         <label>
           آدرس کامل *
         </label>

         <textarea
           required
           placeholder="خیابان، کوچه، پلاک، واحد..."
         ></textarea>

       </div>


       <div class="field">

         <label>
           روش ارسال
         </label>

         <select>

           <option>
             پست پیشتاز
           </option>

           <option>
             پیک داخل شهر
           </option>

         </select>

       </div>


       <div class="field">

         <label>
           سایز / جزئیات خاص
         </label>

         <input
           placeholder="اگر لازم است بنویس"
         >

       </div>


       <div class="field full">

         <label>
           توضیحات سفارش
         </label>

         <textarea
           placeholder="مثلاً زمان مناسب تماس یا توضیح دیگری که لازم است بدانیم"
         ></textarea>

       </div>


     </div>


     <button
       class="btn btn-gold"
       style="
       width:100%;
       margin-top:22px;
       "
     >
       ثبت سفارش و درخواست تماس
     </button>


   </form>

 </div>


 <div id="orderSummary"></div>


 </div>

 </div>

 </section>

 </main>

 ${footer()}

 <div class="toast"></div>

 `;


 renderOrderSummary();


 document
   .getElementById("orderForm")
   .addEventListener(
     "submit",
     submitOrder
   );

}



function renderOrderSummary(){

 const container =
   document.getElementById(
     "orderSummary"
   );

 const cart=getCart();


 if(!cart.length){

   container.innerHTML=`

     <div class="summary">

       <h2>
         سبد خرید خالیه
       </h2>

       <a
         class="btn btn-gold"
         href="products.html"
       >
         انتخاب محصول
       </a>

     </div>

   `;

   return;

 }


 let total=0;


 container.innerHTML=`

 <div class="summary">

   <h2>
     سفارش شما
   </h2>

   ${cart.map(item=>{

     const product=
       getProduct(item.id);

     const subtotal=
       product.price*item.qty;

     total+=subtotal;


     return `

       <div class="summary-row">

         <span>
           ${product.name}
           × ${item.qty}
         </span>

         <span>
           ${money(subtotal)}
         </span>

       </div>

     `;

   }).join("")}


   <div class="summary-total">

     ${money(total)}

   </div>

 </div>

 `;

}



function submitOrder(event){

 event.preventDefault();

 if(!getCart().length){

   toast("سبد خرید خالیه.");

   return;

 }


 localStorage.removeItem(
   "luna_cart"
 );

 updateCartCount();


 app.innerHTML=`

 ${header()}

 <main class="section">

 <div
   class="container"
   style="
   max-width:650px;
   text-align:center;
   "
 >

   <div class="eyebrow">
     LUNA
   </div>

   <h1 class="section-title">
     درخواستت ثبت شد.
   </h1>

   <p style="
   color:#999;
   margin:25px 0;
   ">

     اطلاعات سفارش دریافت شد.
     برای هماهنگی نهایی با شماره‌ای
     که وارد کردی تماس می‌گیریم.

   </p>

   <a
     href="index.html"
     class="btn btn-gold"
   >
     بازگشت به خانه
   </a>

 </div>

 </main>

 ${footer()}

 `;

}



/* -------------------------
   ABOUT
------------------------- */

function aboutPage(){

 app.innerHTML=`

 ${header()}

 <main>

 <section class="page-hero">

   <div class="container">

     <div class="eyebrow">
       ABOUT LUNA
     </div>

     <h1>
       داستان ما
     </h1>

     <p>
       یک برند کوچک با نگاه ساده به جواهرات:
       طراحی خوب، استفاده راحت و جزئیات واقعی.
     </p>

   </div>

 </section>


 <section class="section">

 <div class="container about-grid">

   <div class="about-text">

     <div class="eyebrow">
       WHY LUNA
     </div>

     <h2 class="section-title">
       برای آدم‌های واقعی،
       نه فقط ویترین.
     </h2>

     <p>
       ما دوست داریم محصولی که در سایت می‌بینی
       همان چیزی باشد که وقتی به دستت می‌رسد
       انتظارش را داشتی.
     </p>

     <p>
       برای همین درباره جنس، اندازه و کاربرد
       محصول ساده حرف می‌زنیم.
     </p>

     <p>
       قرار نیست هر مدل برای همه مناسب باشد.
       هر محصول شخصیت خودش را دارد.
     </p>

   </div>


   <div class="about-box">

     <strong>
       L
     </strong>

     <p>
       Made to be worn,
       not just displayed.
     </p>

   </div>

 </div>

 </section>


 <section class="section cream">

 <div class="container">

   <div class="section-head">

     <h2 class="section-title">
       سه اصل
       <span>LUNA</span>
     </h2>

   </div>


   <div class="guide-grid">


     <div class="guide-card">

       <div class="guide-number">
         01
       </div>

       <h3>
         ساده
       </h3>

       <p>
         طراحی‌ای که لازم نیست
         با جزئیات زیاد خودش را ثابت کند.
       </p>

     </div>


     <div class="guide-card">

       <div class="guide-number">
         02
       </div>

       <h3>
         قابل استفاده
       </h3>

       <p>
         مدل‌هایی که فقط برای یک
         مناسبت ساخته نشده‌اند.
       </p>

     </div>


     <div class="guide-card">

       <div class="guide-number">
         03
       </div>

       <h3>
         شفاف
       </h3>

       <p>
         اطلاعات محصول را تا جای ممکن
         روشن و قابل فهم می‌نویسیم.
       </p>

     </div>


   </div>

 </div>

 </section>

 </main>

 ${footer()}

 `;

}



/* -------------------------
   GUIDE
------------------------- */

function guidePage(){

 app.innerHTML=`

 ${header()}

 <main>

 <section class="page-hero">

   <div class="container">

     <div class="eyebrow">
       SHOPPING GUIDE
     </div>

     <h1>
       راهنمای خرید
     </h1>

     <p>
       اگر اولین بارته از LUNA خرید می‌کنی،
       این چند مرحله کمکت می‌کنه راحت‌تر تصمیم بگیری.
     </p>

   </div>

 </section>


 <section class="section">

 <div class="container">

 <div class="guide-grid">


   <div class="guide-card">

     <div class="guide-number">
       01
     </div>

     <h3>
       محصولت رو انتخاب کن
     </h3>

     <p>
       از صفحه محصولات مدل موردنظرت
       رو باز کن و عکس‌ها و مشخصاتش رو ببین.
     </p>

   </div>


   <div class="guide-card">

     <div class="guide-number">
       02
     </div>

     <h3>
       جزئیات رو چک کن
     </h3>

     <p>
       جنس، وزن، اندازه و توضیح محصول
       در صفحه اختصاصی نوشته شده.
     </p>

   </div>


   <div class="guide-card">

     <div class="guide-number">
       03
     </div>

     <h3>
       به سبد اضافه کن
     </h3>

     <p>
       تعداد رو مشخص کن و محصول رو
       به سبد خریدت اضافه کن.
     </p>

   </div>


   <div class="guide-card">

     <div class="guide-number">
       04
     </div>

     <h3>
       سفارش رو ثبت کن
     </h3>

     <p>
       اطلاعات تماس و آدرس رو وارد کن
       تا برای هماهنگی باهات تماس بگیریم.
     </p>

   </div>


 </div>

 </div>

 </section>


 <section class="section cream">

 <div class="container about-grid">

   <div class="about-text">

     <div class="eyebrow">
       CARE
     </div>

     <h2 class="section-title">
       مراقبت از
       <span>جواهرات</span>
     </h2>

     <p>
       بهتره جواهرات رو موقع حمام،
       ورزش و کار با مواد شوینده کنار بذاری.
     </p>

     <p>
       بعد از استفاده با یک پارچه نرم خشک‌شون کن
       و داخل جعبه یا کیسه جدا نگه دار.
     </p>

   </div>


   <div class="about-box">

     <strong>
       LUNA
     </strong>

     <p>
       برای تمیزکاری حرفه‌ای یا بررسی محصول،
       قبل از انجام کار با ما تماس بگیر.
     </p>

   </div>

 </div>

 </section>

 </main>

 ${footer()}

 `;

}



/* -------------------------
   SUPPORT
------------------------- */

function supportPage(){

 app.innerHTML=`

 ${header()}

 <main>

 <section class="page-hero">

   <div class="container">

     <div class="eyebrow">
       SUPPORT
     </div>

     <h1>
       پشتیبانی
     </h1>

     <p>
       سؤال داری؟
       جواب چند مورد رایج رو اینجا گذاشتیم.
     </p>

   </div>

 </section>


 <section class="section">

 <div class="container">

 <div class="faq">


   <div class="faq-item">

     <div class="faq-question">
       چطور سفارش ثبت کنم؟
       <span>+</span>
     </div>

     <div class="faq-answer">
       محصول رو به سبد اضافه کن،
       وارد صفحه ثبت سفارش شو و اطلاعات تماس
       و آدرس رو وارد کن.
     </div>

   </div>


   <div class="faq-item">

     <div class="faq-question">
       چقدر طول می‌کشه سفارش آماده بشه؟
       <span>+</span>
     </div>

     <div class="faq-answer">
       زمان آماده‌سازی بسته به محصول
       و موجودی می‌تونه متفاوت باشه.
       زمان دقیق هنگام هماهنگی سفارش اعلام می‌شه.
     </div>

   </div>


   <div class="faq-item">

     <div class="faq-question">
       می‌تونم درباره سایز سؤال کنم؟
       <span>+</span>
     </div>

     <div class="faq-answer">
       بله. برای سایز یا هر جزئیات محصول
       می‌تونی قبل از سفارش با ما تماس بگیری.
     </div>

   </div>


   <div class="faq-item">

     <div class="faq-question">
       چطور با LUNA تماس بگیرم؟
       <span>+</span>
     </div>

     <div class="faq-answer">
       شماره تماس:
       09026543241
       <br>
       Instagram:
       @luna.jewelry
     </div>

   </div>


 </div>

 </div>

 </section>


 <section class="section cream">

 <div
   class="container"
   style="text-align:center"
 >

   <div class="eyebrow">
     CONTACT
   </div>

   <h2 class="section-title">
     با ما در ارتباط باش
   </h2>

   <p style="
   color:#625e58;
   margin:15px auto 25px;
   ">
     اگر درباره یک محصول مطمئن نیستی،
     قبل از سفارش سؤال کن.
   </p>

   <div
     class="buttons"
     style="justify-content:center"
   >

     <a
       class="btn btn-gold"
       href="tel:09026543241"
     >
       تماس با ما
     </a>

     <a
       class="btn"
       href="https://instagram.com/luna.jewelry"
       target="_blank"
     >
       Instagram
     </a>

   </div>

 </div>

 </section>

 </main>

 ${footer()}

 `;


 document
   .querySelectorAll(".faq-question")
   .forEach(question=>{

     question.addEventListener(
       "click",
       ()=>{
         question
           .parentElement
           .classList
           .toggle("open");
       }
     );

   });

}



/* -------------------------
   MOBILE MENU
------------------------- */

function mobileMenu(){

 const menu =
   document.querySelector(".menu");

 const links =
   document.querySelector(".nav-links");

 if(!menu)return;

 menu.addEventListener(
   "click",
   ()=>{
     links.classList.toggle("open");
   }
 );

}



/* -------------------------
   START
------------------------- */

document.addEventListener(
 "DOMContentLoaded",
 ()=>{

   const page =
     document.body.dataset.page;

   if(page==="home")
     homePage();

   if(page==="products")
     productsPage();

   if(page==="product")
     productPage();

   if(page==="cart")
     cartPage();

   if(page==="order")
     orderPage();

   if(page==="about")
     aboutPage();

   if(page==="guide")
     guidePage();

   if(page==="support")
     supportPage();


   updateCartCount();

   setTimeout(
     mobileMenu,
     50
   );

 }
);
