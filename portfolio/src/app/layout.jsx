import "./globals.css";
import { notoSans, notoSerif } from "./fonts";

export const metadata = {
  title: "Ana Bradaric",
  description: "Ana Bradaric",
  icons: {
    icon: "/anabradaric.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
