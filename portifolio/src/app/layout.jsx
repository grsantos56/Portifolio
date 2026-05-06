import './globals.css';

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio profissional moderno',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-escuro text-claro antialiased">
        {children}
      </body>
    </html>
  );
}
