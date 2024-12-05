import "@/assets/styles/global.css";
import "@/assets/styles/layout.css";
import "@/assets/styles/typography.css";

export const metadata = {
  title: "Elevate",
  description: "Make your learning fun with elevate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
