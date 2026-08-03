import "./globals.css";

export const metadata = {
  title: "Seven SEAS | Shiva Dhanuskodi",
  description:
    "Seven SEAS (Solutions for Enterprise Applications & Services) by Shiva R Dhanuskodi, migrated to Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
