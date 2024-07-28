import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header>Header Component</header>
        <main>{children}</main>
        <footer>Footer Component</footer>
      </body>
    </html>
  );
};

export default RootLayout;
