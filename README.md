<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="شعلة - شموع فاخرة عالية الجودة بروائح مميزة">
    <title>شعلة - شموع عالية الجودة</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="images/logo.png" alt="شعلة للشموع">
        </div>
        <nav>
            <ul>
                <li><a href="#home">الرئيسية</a></li>
                <li><a href="#products">منتجاتنا</a></li>
                <li><a href="#about">عن شعلة</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
                <li><a href="#cart"><i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <h1>شعلة - إضاءة طبيعية تنبض بالحياة</h1>
            <p>شموع عالية الجودة مصنوعة باحترافية لتضيف الدفء إلى أي مساحة</p>
            <a href="#products" class="cta-button">استكشف المنتجات</a>
        </section>

        <section id="featured-products" class="section">
            <h2>منتجاتنا المميزة</h2>
            <div class="products-grid" id="products-container">
                <!-- يتم تعبئتها بواسطة script.js -->
            </div>
        </section>

        <section id="about" class="section">
            <h2>عن شعلة</h2>
            <div class="about-content">
                <img src="images/about.jpg" alt="عن شعلة">
                <div class="about-text">
                    <h3>قصتنا</h3>
                    <p>نحن في شعلة نؤمن بأن الإضاءة الطبيعية يمكنها تحويل أي مساحة إلى مكان دافئ ومريح. منذ عام 2010، نصنع شموعًا عالية الجودة باستخدام أفضل المواد الطبيعية.</p>
                </div>
            </div>
        </section>

        <section id="contact" class="section">
            <h2>اتصل بنا</h2>
            <form id="contact-form">
                <input type="text" placeholder="اسمك الكامل" required>
                <input type="email" placeholder="بريدك الإلكتروني" required>
                <textarea placeholder="رسالتك" required></textarea>
                <button type="submit" class="cta-button">إرسال الرسالة</button>
            </form>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>روابط سريعة</h3>
                <ul>
                    <li><a href="#home">الرئيسية</a></li>
                    <li><a href="#products">المنتجات</a></li>
                    <li><a href="#about">عن شعلة</a></li>
                    <li><a href="#contact">اتصل بنا</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>وسائل التواصل</h3>
                <div class="social-media">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-snapchat"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>© 2023 شعلة للشموع. جميع الحقوق محفوظة.</p>
        </div>
    </footer>
<script src="script.js"></script>
</body>
</html>
