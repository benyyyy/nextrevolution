
export default function RootLayout({ children} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
     <header className="bg-blue-200">auth header</header>
        {children}
  <footer className="bg-blue-200">auth footer</footer>
      </body>
    </html>
  );
}
