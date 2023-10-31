import { Inter, Poppins } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Traversy Media",
  description: "Web Development tutorials and courses",
  keywords: "web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
