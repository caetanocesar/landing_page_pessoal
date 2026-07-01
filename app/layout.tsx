import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Caetano César | Desenvolvedor de Software, Web e Mobile",
  description: "Desenvolvedor e Programador de Sistemas, Web, Mobile e IA. Atendimento para empresas em Pedro Leopoldo, Belo Horizonte (RMBH) e remoto (home office) para todo o Brasil.",
  keywords: [
    "desenvolvedor de software",
    "programador",
    "desenvolvedor web",
    "programador web",
    "desenvolvedor mobile",
    "programador mobile",
    "desenvolvedor de sistemas",
    "programador de sistemas",
    "desenvolvedor de inteligência artificial",
    "programador de inteligência artificial",
    "automação de processos",
    "automação de inteligencia artificial",
    "Pedro Leopoldo",
    "Belo Horizonte",
    "Confins",
    "Matozinhos",
    "São José da Lapa",
    "Vespasiano",
    "Capim Branco",
    "Região Metropolitana de BH",
    "home office",
    "remoto",
    "todo o Brasil",
    "tecnologia para empresas"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
