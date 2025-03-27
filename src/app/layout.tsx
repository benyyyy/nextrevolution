import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "nextrevolution",
  description: "Generated by create next app",
};

export default function RootLayout({ children} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
     {/* <header className="bg-blue-200">Header</header> */}
        {children}
  {/* <footer className="bg-blue-200">footer</footer> */}
      </body>
    </html>
  );
}
