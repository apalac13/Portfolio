import "./globals.css";
import { notoSans, notoSerif } from "./fonts";

export const metadata = {
  title: "Ana Bradaric",
  description: "Ana Bradaric",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
