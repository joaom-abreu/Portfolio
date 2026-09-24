import "./globals.css";

export const metadata = {
  title: "Portfólio João Abreu",
  description: "Portfólio desenvolvido com Next.js.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="pt-BR">
      <body>{children}</body>
      </html>
  );
}