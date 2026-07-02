import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Gera arquivos HTML/CSS estáticos
  basePath: "/landing_page_pessoal", // Descomente esta linha se NÃO for usar um domínio próprio
  images: {
    unoptimized: true, // O GitHub Pages não tem servidor Node para otimizar imagens
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
