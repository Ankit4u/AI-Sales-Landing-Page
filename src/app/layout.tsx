"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/css/style.css'
import '../../public/assets/css/responsive.css'
import '../../public/assets/css/meanmenu.min.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header/>
         {children}
        <Footer/>
      </body>
    </html>
  );
}
