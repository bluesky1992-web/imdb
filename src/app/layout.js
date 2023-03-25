import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDB clone ",
  description: "This is the IMDB clone website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/*Header */}
          <Header />
          {/*Navbar */}
          <Navbar />
          {/*Search box */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
