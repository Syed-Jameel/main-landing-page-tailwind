import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

const montserrat = Montserrat({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        {/* <header className="fixed top-0 left-0 right-0 z-50 ">
          <Navbar />
        </header> */}
        <section>
          {children}
          <ScrollToTopButton />
        </section>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
