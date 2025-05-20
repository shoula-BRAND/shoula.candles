// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "شمعة الفانيلا",
        price: "45 ر.س",
        image: "vanilla-candle.jpg",
        description: "شمعة عطرية برائحة الفانيلا الدافئة، تحترق لمدة تصل إلى 40 ساعة",
        details: "مصنوعة من شمع الصويا الطبيعي، خالية من المواد الضارة"
    },
    {
        id: 2,
        name: "شمعة اللافندر",
        price: "50 ر.س",
        image: "lavender-candle.jpg",
        description: "للاسترخاء والهدوء برائحة اللافندر المميزة",
        details: "تساعد على الاسترخاء وتحسين جودة النوم"
    },
    {
        id: 3,
        name: "شمعة الحمضيات",
        price: "55 ر.س",
        image: "citrus-candle.jpg",
        description: "انتعاش الحمضيات لتنشيط الجو وتحسين المزاج",
        details: "مزيج من رائحة البرتقال والليمون والجريب فروت"
    }
];

// سلة التسوق
let cart = [];

// عرض المنتجات في الصفحة
function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="price">${product.price}</span>
                <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// إضافة منتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    
    // رسالة تأكيد
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'تمت الإضافة إلى السلة',
        showConfirmButton: false,
        timer: 1500
    });
}

// تحديث عدد العناصر في السلة
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// إرسال نموذج الاتصال
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // هنا يمكنك إضافة كود إرسال النموذج
    Swal.fire({
        icon: 'success',
        title: 'تم إرسال رسالتك!',
        text: 'سنقوم بالرد عليك في أقرب وقت ممكن',
        confirmButtonText: 'حسناً'
    });
    
    this.reset();
});

// عند تحميل الصفحة
window.onload = function() {
    displayProducts();
    
    // إضافة SweetAlert
    const sweetAlertScript = document.createElement('script');
    sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    document.head.appendChild(sweetAlertScript);
    
    // إضافة خط Tajawal للعربية
    const tajawalFont = document.createElement('link');
    tajawalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap';
    tajawalFont.rel = 'stylesheet';
    document.head.appendChild(tajawalFont);
};