import "./globals.css";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

export const metadata = {
  title: "Home | Luxe - Đẳng Cấp Thời Trang Cao Cấp", // Tiêu đề mặc định cho toàn ứng dụng
  description: "Mua sắm hàng hiệu cao cấp tại Luxe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <header className="fixed w-full bg-white z-50 border-b border-gray-100">
          <Header />
        </header>
        <main className="bg-[#F8F8F8]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}