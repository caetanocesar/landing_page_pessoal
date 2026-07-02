"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import perfilImg from "../public/perfil.jpg";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Scroll spy to update active section in navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "technologies", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xqevygpv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <>
      {/* TopNavBar */}
      <nav
        className="w-full sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-secondary-container shadow-sm transition-all duration-300"
        id="navbar"
      >
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          {/* Brand */}
          <a
            className="font-headline-sm text-headline-sm font-extrabold text-primary tracking-tighter hover:scale-95 transition-all"
            href="#home"
          >
            Caetano César
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              className={`transition-colors pb-1 ${activeSection === "home"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
              href="#home"
            >
              Início
            </a>
            <a
              className={`transition-colors pb-1 ${activeSection === "about"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
              href="#about"
            >
              Sobre Mim
            </a>
            <a
              className={`transition-colors pb-1 ${activeSection === "services"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
              href="#services"
            >
              Serviços
            </a>
            <a
              className={`transition-colors pb-1 ${activeSection === "technologies"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
              href="#technologies"
            >
              Tecnologias
            </a>
            <a
              className={`transition-colors pb-1 ${activeSection === "contact"
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
              href="#contact"
            >
              Contato
            </a>
          </div>

          {/* Trailing Action */}
          <a
            className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-primary-container text-on-primary font-label-bold text-label-bold rounded hover:translate-y-[-2px] transition-transform duration-200 shadow-sm hover:shadow-md"
            href="#contact"
          >
            Fale Comigo
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-surface/95 backdrop-blur-lg border-b border-secondary-container transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-72 opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col items-center gap-4 px-margin-mobile">
            <a
              className={`w-full text-center py-2 transition-colors ${activeSection === "home" ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a
              className={`w-full text-center py-2 transition-colors ${activeSection === "about" ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mim
            </a>
            <a
              className={`w-full text-center py-2 transition-colors ${activeSection === "services" ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              href="#services"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              className={`w-full text-center py-2 transition-colors ${activeSection === "technologies" ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              href="#technologies"
              onClick={() => setIsMenuOpen(false)}
            >
              Tecnologias
            </a>
            <a
              className={`w-full text-center py-2 transition-colors ${activeSection === "contact" ? "text-primary font-bold" : "text-on-surface-variant"
                }`}
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a
              className="w-full text-center py-3 bg-primary-container text-on-primary font-label-bold text-label-bold rounded shadow-sm"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto flex flex-col-reverse lg:flex-row items-center gap-stack-lg lg:gap-16"
          id="home"
        >
          <div className="flex-1 flex flex-col items-start text-left gap-stack-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-secondary-container mb-2">
              <div className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></div>
              <span className="font-code text-code text-on-surface-variant">
                Disponível para novos projetos
              </span>
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface text-balance">
              Desenvolvimento de Sistemas que{" "}
              <span className="text-primary-container relative">
                aceleram
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary-fixed-dim/50"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>
              </span>{" "}
              o crescimento do seu negócio.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
              Engenharia de software de alta performance, arquitetura escalável e interfaces elegantes.
              Transformo desafios de negócios em soluções tecnológicas robustas e eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-container text-on-primary font-label-bold text-label-bold rounded hover:translate-y-[-2px] transition-all duration-200 shadow-md hover:shadow-lg h-12"
                href="#contact"
              >
                Solicitar orçamento
                <span className="material-symbols-outlined ml-2" style={{ fontSize: "18px" }}>
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            {/* Abstract decorative shape behind image */}
            <div className="absolute inset-0 bg-primary-fixed rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-secondary-container bg-surface-container-lowest">
              <Image
                alt="Foto de Caetano César"
                className="object-cover object-center filter contrast-105"
                src={perfilImg}
                fill
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto border-t border-secondary-container"
          id="about"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 w-full">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
                Sobre Mim
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-4">
                <p>
                  Sou um Desenvolvedor Fullstack com foco em entregar soluções tecnológicas robustas, escaláveis e focadas na experiência do usuário. Minha trajetória profissional tem raízes sólidas na <strong>Defensoria Pública de Minas Gerais</strong>, onde atuei desde o estágio até a efetivação como Desenvolvedor de Software.
                </p>
                <p>
                  No ecossistema <strong>Frontend e Mobile</strong>, construo interfaces modernas e fluidas utilizando <strong>React, Next.js, Tailwind CSS e Zustand</strong> na web, além de aplicativos nativos de alta performance com <strong>Flutter, Clean Architecture e BLoC</strong>.
                </p>
                <p>
                  No <strong>Backend e DevOps</strong>, minha paixão é resolver problemas complexos. Desenvolvo arquiteturas avançadas utilizando <strong>Node.js e NestJS</strong>, integrando mensageria (RabbitMQ, BullMQ), bancos de dados (PrismaORM) e rotinas de segurança (JWT/OAuth). Também tenho forte atuação em automações e chatbots com <strong>n8n</strong>, além de garantir a estabilidade do sistema com testes automatizados (QA com Selenium) e conteinerização com Docker.
                </p>
                <p>
                  Meu objetivo é construir sistemas de ponta a ponta, unindo a paixão por tecnologia com resultados tangíveis para o negócio, trabalhando em equipe e sempre disposto a compartilhar conhecimento.
                </p>
              </div>
            </div>

            <div className="flex-1 w-full bg-surface-container-low p-8 rounded-2xl border border-secondary-container">
              <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-secondary-container pb-4 mb-6">
                Experiência & Habilidades
              </h3>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary-container text-on-primary rounded flex items-center justify-center">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-on-surface">Desenvolvedor de Software</h4>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Defensoria Pública de Minas Gerais</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface mb-2">Stack Principal</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">React / Next.js</span>
                    <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">Flutter</span>
                    <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">NestJS / Node.js</span>
                    <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">n8n (Automação)</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-label-bold text-label-bold text-on-surface mb-2">Arquitetura & Ferramentas</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant font-code text-code rounded border border-secondary-container">Clean Architecture</span>
                    <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant font-code text-code rounded border border-secondary-container">BLoC / Zustand</span>
                    <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant font-code text-code rounded border border-secondary-container">RabbitMQ / BullMQ</span>
                    <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant font-code text-code rounded border border-secondary-container">PrismaORM</span>
                    <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant font-code text-code rounded border border-secondary-container">Docker / CI/CD</span>
                    <span className="px-3 py-1 bg-surface-container-lowest text-on-surface-variant font-code text-code rounded border border-secondary-container">QA Selenium</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-section-gap bg-surface-container-low border-y border-secondary-container"
          id="services"
        >
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                Especialidades Técnicas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Soluções end-to-end projetadas para escalar com a sua empresa.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Service Card 1 */}
              <div className="bg-surface-container-lowest p-8 border border-secondary-container rounded-lg flat-shadow hover:border-primary-container/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-md mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    terminal
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                  Web Dev Customizado
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Aplicações single-page rápidas e responsivas utilizando frameworks modernos como React e
                  next.js, focadas em UX e performance.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-surface-container-lowest p-8 border border-secondary-container rounded-lg flat-shadow hover:border-primary-container/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-md mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    api
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                  APIs &amp; Backend
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Desenvolvimento de APIs RESTful escaláveis com Node.js e NestJS, garantindo
                  segurança e integridade de dados.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-surface-container-lowest p-8 border border-secondary-container rounded-lg flat-shadow hover:border-primary-container/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-md mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    rocket_launch
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                  Landing Pages
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Páginas de alta conversão otimizadas para SEO e velocidade de carregamento extrema,
                  perfeitas para campanhas de marketing.
                </p>
              </div>
              {/* Service Card 4 */}
              <div className="bg-surface-container-lowest p-8 border border-secondary-container rounded-lg flat-shadow hover:border-primary-container/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-md mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    dashboard
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                  Sistemas Corporativos
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Dashboards internos, CRMs e ERPs customizados para digitalizar e otimizar processos
                  complexos de negócio.
                </p>
              </div>
              {/* Service Card 5 */}
              <div className="bg-surface-container-lowest p-8 border border-secondary-container rounded-lg flat-shadow hover:border-primary-container/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-md mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    hub
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                  Integrações
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Conexão fluida entre sistemas legados, gateways de pagamento, CRMs de terceiros e
                  serviços em nuvem.
                </p>
              </div>
              {/* Service Card 6 */}
              <div className="bg-surface-container-lowest p-8 border border-secondary-container rounded-lg flat-shadow hover:border-primary-container/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-md mb-6 group-hover:bg-primary-fixed transition-colors duration-300">
                  <span
                    className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    smart_toy
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary-container transition-colors">
                  Automação
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Scripts e bots para automatizar tarefas repetitivas, extração de dados e fluxos de
                  trabalho operacionais, poupando tempo valioso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* services and technologies Section */}
        <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto" id="technologies">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Serviços e tecnologias</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Soluções tecnológicas completas para impulsionar a transformação digital do seu negócio.
            </p>
          </div>
          <div className="flex flex-col gap-16 md:gap-24">
            {/* Service 1: Web */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="flex-1 w-full order-2 lg:order-1">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Desenvolvimento Web
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                  Criação de interfaces modernas, responsivas e de alta performance. Utilizamos as
                  tecnologias mais recentes para garantir que sua presença digital seja rápida, segura e
                  visualmente impactante.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    React
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-secondary-container flat-shadow bg-surface-container-high">
                  <Image
                    alt="Desenvolvimento Web"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZjnwXKsMHYO4xPm9Yx4pm-SbbwNaWCcdN2m9KVy09WHh9vSDyKzSpZCGyRST29q5zyJR1JDsWEcxMog4WmkAS5WrhTzvz-B-0rIetaHfOZLXe8BY8HGvR-eXSZJnC6K2Msia1l9NibjsKj6NjTJDqARyi3S9umiLMekouPr9l2MRFPou2fIfIEdc6J8EikvZkXQEa_y56-XVDS5tGQBf2NQwzc03n3w_BDdg8KSmjiF4ld8PtMZkU4Mzgwe-1OStwqozLGT0wv-4y"
                    fill
                  />
                </div>
              </div>
            </div>

            {/* Service 2: Mobile */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-secondary-container flat-shadow bg-surface-container-high">
                  <Image
                    alt="Desenvolvimento Mobile"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-QvCv_dRGZ3tj58tmd1S378rCE5TbjDkZoXVZPcugC-TqMeThmZaUyE_vffRmOKoVPqJzNpT3bADkbAtRr9QV8MFckQOV8QQtvhyJF1vE_pzKXvZ0WkPlZ6xgtbN5Mdlu8vn4ZZdWS5OjevRtdlHyq3pnU-zsree-BfIAL9y87GyJdB1X_aEQCBTIBDXX8PfFvlbpyIOGxf5IMpkPQToYxdnykhAbDVI4LUdgs0KUxQdnIoMCo0YhuxoEQh5_JrZxgJXl7MCllfgh"
                    fill
                  />
                </div>
              </div>
              <div className="flex-1 w-full">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Desenvolvimento Mobile
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                  Aplicativos nativos e híbridos focados na melhor experiência do usuário. Transformamos sua
                  ideia em uma ferramenta poderosa disponível na palma da mão dos seus clientes.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    Flutter
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    Dispositivos Android
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    Dispositivos ios
                  </span>
                </div>
              </div>
            </div>

            {/* Service 3: Backend */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="flex-1 w-full order-2 lg:order-1">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Desenvolvimento Backend
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                  Arquiteturas robustas e escaláveis para suportar grandes volumes de dados. Foco total em
                  segurança, integridade e APIs de alta disponibilidade para o seu ecossistema.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    NestJS
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-secondary-container flat-shadow bg-surface-container-high">
                  <Image
                    alt="Desenvolvimento Backend"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEsPWO7PAmbeOOwhsmd-h85Phwfm13L8ZtpI4iu0Ij1gYnyJPBUbaSvMyu9cNES_ZrqRwGwPbEJpvZ9nxZ-KFRpp5TxabEZH7Df0WCa5-r_6vkEbCLxM6-fN7TWw59wQTsiYsGkcq5ny4AcVlPiBSlYGZvLPOJMnIQE9qDGcSDCKc-qPlvlLeMOJhWqsadC14iCa4_J9NKbWPtk8QwbRcweeGAP8S3CDXEdRlk_seJ45aqMSk2jPHoSjMVv_If9_wcDRuBRGA2miE1"
                    fill
                  />
                </div>
              </div>
            </div>

            {/* Service 4: AI Automation */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-secondary-container flat-shadow bg-surface-container-high">
                  <Image
                    alt="Automações com IA"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJVW85DOW53tN04zcmSbD2zh5X2wXHl-uUd7iTIsJI2j_Uo622brL8rdtmOLdIos2bk_JDhUA1Vnj3rdBcPXWMe5vQJrIOUPmN4Gr1x9jv3NabVkd6gotJYPP2cNGLASYn3-HFEpeHoHgtc1t6Nzogi0C5ZIwyPgIHgyuDlNBqJEdoVowMHacHlvA9Kk5CXPCkTHafLcMAW0UA4gRBsWM_dc-SnrPmuCBBVuLoJAz3GaauDHvtIWwbITKY2TkM_YdkDR2RH2byb8OT"
                    fill
                  />
                </div>
              </div>
              <div className="flex-1 w-full">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Automações com IA
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                  Integração de inteligência artificial para otimizar processos e reduzir custos
                  operacionais. Criamos fluxos inteligentes que aprendem e evoluem com o seu negócio.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    n8n
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-primary font-code text-code rounded border border-secondary-container">
                    Monitoramentos com IA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & CTA Section */}
        <section
          className="py-section-gap bg-surface-container-lowest border-t border-secondary-container"
          id="contact"
        >
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6">
                Vamos transformar sua ideia em um{" "}
                <span className="text-primary-container">sistema de alto nível.</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                Pronto para escalar sua operação com tecnologia sólida? Entre em contato para discutirmos a
                arquitetura ideal para o seu próximo projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="flex flex-col gap-8 bg-surface-container-low p-8 rounded-lg border border-secondary-container w-full">
                <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-secondary-container pb-4">
                  Entre em contato
                </h3>
                <div className="flex flex-col gap-6">
                  <a
                    className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-secondary-container rounded hover:border-primary-container hover:shadow-md transition-all group"
                    href="https://www.linkedin.com/in/caetanocesar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <FaLinkedinIn className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-bold text-label-bold text-on-surface">LinkedIn</span>
                      <span className="font-code text-code text-on-surface-variant">/in/caetanocesar</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-secondary-container group-hover:text-primary-container transition-colors">
                      arrow_outward
                    </span>
                  </a>

                  <a
                    className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-secondary-container rounded hover:border-primary-container hover:shadow-md transition-all group"
                    href="https://wa.me/5500999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-bold text-label-bold text-on-surface">WhatsApp</span>
                      <span className="font-code text-code text-on-surface-variant">Resposta rápida</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-secondary-container group-hover:text-primary-container transition-colors">
                      arrow_outward
                    </span>
                  </a>

                  <a
                    className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-secondary-container rounded hover:border-primary-container hover:shadow-md transition-all group"
                    href="https://www.instagram.com/caetano._dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <FaInstagram className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-bold text-label-bold text-on-surface">Instagram</span>
                      <span className="font-code text-code text-on-surface-variant">@caetano._dev</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-secondary-container group-hover:text-primary-container transition-colors">
                      arrow_outward
                    </span>
                  </a>

                  <a
                    className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-secondary-container rounded hover:border-primary-container hover:shadow-md transition-all group"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=caetanocesar35dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-bold text-label-bold text-on-surface">E-mail</span>
                      <span className="font-code text-code text-on-surface-variant">caetanocesar35dev@gmail.com</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-secondary-container group-hover:text-primary-container transition-colors">
                      arrow_outward
                    </span>
                  </a>

                  <a
                    className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-secondary-container rounded hover:border-primary-container hover:shadow-md transition-all group"
                    href="https://github.com/XxxCaetanoxxX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center rounded text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                      <FaGithub className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-bold text-label-bold text-on-surface">GitHub</span>
                      <span className="font-code text-code text-on-surface-variant">/Caetano</span>
                    </div>
                    <span className="material-symbols-outlined ml-auto text-secondary-container group-hover:text-primary-container transition-colors">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>

              {/* Direct Form */}
              <div className="flex flex-col gap-8 bg-surface-container-low p-8 rounded-lg border border-secondary-container w-full">
                <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-secondary-container pb-4">
                  Envie uma mensagem
                </h3>
                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4 animate-fade-in">
                    <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary-container">
                      Mensagem Enviada!
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                      Agradecemos o contato. Responderemos o mais breve possível para iniciarmos seu projeto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-label-bold text-label-bold text-on-surface">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus === "sending"}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 bg-surface-container-lowest border-b-2 border-secondary-container focus:border-primary-container focus:outline-none transition-all rounded-t-md text-on-surface"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-label-bold text-label-bold text-on-surface">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus === "sending"}
                        placeholder="seu.email@email.com"
                        className="w-full px-4 py-3 bg-surface-container-lowest border-b-2 border-secondary-container focus:border-primary-container focus:outline-none transition-all rounded-t-md text-on-surface"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-label-bold text-label-bold text-on-surface">
                        Como posso ajudar?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus === "sending"}
                        placeholder="Descreva seu projeto ou necessidade..."
                        className="w-full px-4 py-3 bg-surface-container-lowest border-b-2 border-secondary-container focus:border-primary-container focus:outline-none transition-all rounded-t-md text-on-surface resize-none"
                      />
                    </div>
                    {formStatus === "error" && (
                      <p className="text-red-500 dark:text-red-400 font-body-sm text-body-sm text-center">
                        Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou use as redes sociais.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full py-4 bg-primary-container text-on-primary font-label-bold text-label-bold rounded hover:translate-y-[-2px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <span className="material-symbols-outlined text-[18px]">send</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-secondary-container">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-stack-md">
          <a
            className="font-headline-sm text-headline-sm text-on-surface hover:text-primary-container transition-colors"
            href="#home"
          >
            Caetano César
          </a>
          <p className="font-label-bold text-label-bold text-secondary text-center">
            © 2026 Caetano César. Construído com precisão.
          </p>
          <div className="flex items-center gap-4">
            <a
              aria-label="Repositório de código"
              className="text-secondary hover:text-primary-container transition-colors opacity-80 hover:opacity-100 flex items-center justify-center"
              href="https://github.com/XxxCaetanoxxX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              aria-label="Compartilhar perfil"
              className="text-secondary hover:text-primary-container transition-colors opacity-80 hover:opacity-100 flex items-center justify-center"
              href="https://www.linkedin.com/in/caetanocesar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
