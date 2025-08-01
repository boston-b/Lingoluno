import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","600"] });

export const metadata = {
  title: "Lingoluno",
  description: "Coming soon. Release target Q2 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`theme-dark ${poppins.className}`}>{children}</body>
    </html>
  );
}
