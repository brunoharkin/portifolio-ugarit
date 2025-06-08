import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, Brain, Sparkles, BarChart3 } from "lucide-react";
import UgaritLogo from "../assets/UgaritLogo.svg";
import UgaritLogoImg from "../../Screenshot_2025-05-14_13.42.23-removebg-preview.png";
import HeroBg from "../assets/hero-bg.svg";
import LogoMarquee from "../components/LogoMarquee";
import TestimonialCarousel from "../components/TestimonialCarousel";
import TypewriterText from "../components/TypewriterText";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 100]);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isVisible && count < 23) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count, isVisible]);

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={HeroBg} alt="" className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
            
            {/* Gradientes de fundo */}
            <div className="absolute top-0 right-0 w-1/3 h-64 bg-[#9442fe]/20 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-[#00f0ff]/20 blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              style={{ opacity: heroOpacity, y: heroY }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <span className="mr-2 flex items-center">
                  {/* Ícone Brain Lucide com cor de cérebro humano */}
                  <Brain className="w-5 h-5 text-[#FF6F91] drop-shadow-[0_0_6px_#FF6F91]" strokeWidth={2.2} />
                </span>
                <span className="text-sm text-white/90">Laboratório de Automação Inteligente</span>
              </div>

              {/* Título Principal */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  Agentes <span className="bg-gradient-to-r from-[#00f0ff] via-[#6B8AFF] to-[#9442fe] text-transparent bg-clip-text">Humanizados</span><span className="text-white"> que </span><span className="bg-gradient-to-r from-[#9442fe] via-[#FFB86C] to-[#00f0ff] text-transparent bg-clip-text">Transformam</span>
                </h1>
              </div>

              {/* Subtítulo */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Não somos uma agência de chatbots. Somos um laboratório que cria <span className="font-semibold text-[#6B8AFF]">agentes humanizados</span> que decidem com lógica, sentem com linguagem e aprendem com dados reais.
              </p>

              {/* Cards de Benefícios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="rounded-2xl bg-white/10 border border-[#00f0ff]/30 p-6 text-center shadow-lg backdrop-blur-md">
                  <div className="flex justify-center mb-3">
                    <Brain className="w-8 h-8 text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff] animate-pulse" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Inteligência Real</h3>
                  <p className="text-gray-300 text-sm">Agentes que pensam e se adaptam</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-[#00f0ff]/30 p-6 text-center shadow-lg backdrop-blur-md">
                  <div className="flex justify-center mb-3">
                    <Sparkles className="w-8 h-8 text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff] animate-pulse" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Personalização Cognitiva</h3>
                  <p className="text-gray-300 text-sm">Únicos como sua empresa</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-[#00f0ff]/30 p-6 text-center shadow-lg backdrop-blur-md">
                  <div className="flex justify-center mb-3">
                    <Zap className="w-8 h-8 text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff] animate-pulse" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Performance Mensurável</h3>
                  <p className="text-gray-300 text-sm">Resultados que você pode ver</p>
                </div>
              </div>

              {/* Frase Destacada */}
              <div className="max-w-3xl mx-auto mb-10 flex items-center">
                <div className="w-1 h-16 bg-yellow-400 mr-4 rounded"></div>
                <p className="italic text-lg text-gray-200">
                  "Liberamos o tempo dos visionários impacientes. Como um laboratório de automação, nossa missão é desacelerar o tempo para você, permitindo que seu negócio salte uma década à frente."
                </p>
              </div>

              {/* Botões */}
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 border border-[#00f0ff]/30 text-white font-medium rounded-full flex items-center space-x-2 group hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300"
                >
                  <span>Ver Portfólio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center space-x-2 group hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Saiba Mais</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Produtos & Serviços Section */}
        <section id="produtos-servicos" className="py-24 bg-black relative overflow-hidden">
          {/* Glow de fundo */}
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#00f0ff]/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#9442fe]/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#00f0ff]/30 shadow-[0_0_12px_#00f0ff40]">
                <span className="mr-2 flex items-center">
                  <BarChart3 className="w-5 h-5 text-[#00f0ff] drop-shadow-[0_0_8px_#00f0ff] animate-pulse" strokeWidth={2.2} />
                </span>
                <span className="text-sm text-white/90">Produtos & Serviços</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#00f0ff] via-[#6B8AFF] to-[#9442fe] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">
              Soluções que <span className="text-[#6B8AFF]">Evoluem</span> com seu Negócio
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Do laboratório para sua empresa: agentes humanizados e plataformas SaaS que transformam processos em vantagem competitiva.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Card Agentes Humanizados */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#00f0ff]/40 bg-transparent group transition-all duration-300 hover:shadow-[0_0_40px_#00f0ff80] hover:border-[#00f0ff] flex flex-col h-full justify-between">
                {/* Glow animado */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00f0ff]/20 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-all duration-300 pointer-events-none"></div>
                <div className="flex items-center gap-3 px-8 py-6 bg-transparent">
                  <Brain className="w-10 h-10 text-white drop-shadow-[0_0_16px_#00f0ff] animate-pulse" strokeWidth={2.2} />
                  <span className="text-2xl font-bold neon-gradient-text drop-shadow-[0_0_8px_#00f0ff]">Agentes Humanizados</span>
                </div>
                <div className="flex-1 flex flex-col px-8 py-6 justify-between">
                  <div>
                    <p className="text-gray-200 mb-4">Criamos mentes digitais únicas que executam tarefas com precisão, autonomia e inteligência.</p>
                    <div className="mb-4">
                      <span className="font-semibold text-white">Principais Recursos:</span>
                      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                        <li>Agentes em Código Puro (Alta Complexidade)</li>
                        <li>Agentes No-Code (Implementação Rápida)</li>
                        <li>Personalização Cognitiva Total</li>
                        <li>Memória Contextual e Contínua</li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center border border-[#00f0ff]/40 shadow-[0_0_10px_#00f0ff60] min-h-[110px]">
                        <span className="text-[#00f0ff] text-2xl mb-1 animate-pulse">&lt;/&gt;</span>
                        <span className="font-bold text-white text-sm mb-1">Código Puro</span>
                        <ul className="text-xs text-gray-200 text-left list-disc list-inside space-y-0.5 mt-1">
                          <li>Projetos complexos</li>
                          <li>Integrações robustas</li>
                          <li>Arquitetura personalizada</li>
                        </ul>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center border border-[#00f0ff]/40 shadow-[0_0_10px_#00f0ff60] min-h-[110px]">
                        <span className="text-[#00f0ff] text-2xl mb-1 animate-pulse">⚡</span>
                        <span className="font-bold text-white text-sm mb-1">No-Code</span>
                        <ul className="text-xs text-gray-200 text-left list-disc list-inside space-y-0.5 mt-1">
                          <li>Implementação rápida</li>
                          <li>Necessidades específicas</li>
                          <li>Sem programação</li>
                        </ul>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center border border-[#00f0ff]/40 shadow-[0_0_10px_#00f0ff60] min-h-[110px]">
                        <span className="text-[#00f0ff] text-2xl mb-1 animate-pulse">🔗</span>
                        <span className="font-bold text-white text-sm mb-1">Integração Total</span>
                        <ul className="text-xs text-gray-200 text-left list-disc list-inside space-y-0.5 mt-1">
                          <li>Conexão com sistemas</li>
                          <li>APIs diversas</li>
                          <li>Automação de dados</li>
                        </ul>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center border border-[#00f0ff]/40 shadow-[0_0_10px_#00f0ff60] min-h-[110px]">
                        <span className="text-[#00f0ff] text-2xl mb-1 animate-pulse">🖥️</span>
                        <span className="font-bold text-white text-sm mb-1">Infraestrutura Dedicada</span>
                        <ul className="text-xs text-gray-200 text-left list-disc list-inside space-y-0.5 mt-1">
                          <li>VPS isolada</li>
                          <li>Segurança avançada</li>
                          <li>Alta disponibilidade</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full max-w-xs mx-auto mb-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#00F0FF] via-[#6B8AFF] to-[#9442FE] text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_#00F0FF60] hover:shadow-[0_0_40px_#00F0FF90] transition-all mt-auto"
                    onClick={() => {
                      const el = document.getElementById('produtos-servicos');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explorar Agentes Humanizados
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Card Produtos SaaS */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#FFB86C]/40 bg-transparent group transition-all duration-300 hover:shadow-[0_0_40px_#FFB86C80] hover:border-[#FFB86C] flex flex-col h-full justify-between">
                {/* Glow animado */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFB86C]/20 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-all duration-300 pointer-events-none"></div>
                <div className="flex items-center gap-3 px-8 py-6 bg-transparent">
                  <BarChart3 className="w-10 h-10 text-white drop-shadow-[0_0_16px_#FFB86C] animate-pulse" strokeWidth={2.2} />
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#FFB86C] to-[#FF6F91] bg-clip-text text-transparent drop-shadow-[0_0_8px_#FFB86C]">Produtos SaaS</span>
                </div>
                <div className="flex-1 flex flex-col px-8 py-6 justify-between">
                  <div>
                    <p className="text-gray-200 mb-4">Utilizamos soluções líderes de mercado para gestão inteligente e criamos dashboards de performance sob medida para seu negócio.</p>
                    <div className="mb-4">
                      <span className="font-semibold text-white">Principais Recursos:</span>
                      <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                        <li>CRM Chatwoot (Gestão Inteligente, integração completa)</li>
                        <li>Dashboards de Performance (criados sob medida)</li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center border border-[#FFB86C]/40 shadow-[0_0_10px_#FFB86C60] min-h-[110px]">
                        <span className="text-[#FFB86C] text-2xl mb-1 animate-pulse">🤖</span>
                        <span className="font-bold text-white text-sm mb-1">CRM Chatwoot</span>
                        <span className="text-xs text-gray-200 text-center mb-1">Relacionamento com IA embarcada</span>
                        <ul className="text-xs text-gray-300 text-left list-disc list-inside space-y-0.5 mt-1">
                          <li>Fluxos automáticos e inteligentes</li>
                          <li>Integrações com canais e banco de dados</li>
                          <li>Agentes conectados ao seu cliente em tempo real</li>
                        </ul>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4 flex flex-col items-center border border-[#FFB86C]/40 shadow-[0_0_10px_#FFB86C60] min-h-[110px]">
                        <span className="text-[#FFB86C] text-2xl mb-1 animate-pulse">📊</span>
                        <span className="font-bold text-white text-sm mb-1">Dashboards Inteligentes</span>
                        <span className="text-xs text-gray-200 text-center mb-1">Métricas que guiam. Dados que convertem.</span>
                        <ul className="text-xs text-gray-300 text-left list-disc list-inside space-y-0.5 mt-1">
                          <li>Visualização em tempo real</li>
                          <li>Indicadores sob medida</li>
                          <li>ROI e performance em uma tela</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full max-w-xs mx-auto mb-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#00F0FF] via-[#6B8AFF] to-[#9442FE] text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_#00F0FF60] hover:shadow-[0_0_40px_#00F0FF90] transition-all mt-auto"
                    onClick={() => {
                      const el = document.getElementById('produtos-servicos');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explorar Produtos SaaS
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-20 bg-black relative">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-white/90 font-semibold text-sm mb-6 shadow-lg">Metodologia de Entrega</div>
              <h2 className="text-5xl font-extrabold mb-4 neon-gradient-text">
                Como entregamos resultados
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Nossa metodologia exclusiva garante eficiência, transparência e entregas de alto impacto em cada etapa do projeto.</p>
            </div>
            {/* Timeline */}
            <div className="relative flex flex-col items-center">
              {/* Linha vertical neon */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-gradient-to-b from-[#00F0FF] via-[#9442FE] via-[#FFD600] to-[#00FF85] rounded-full z-0" style={{ height: 'calc(100% - 80px)' }}></div>

              {/* Fase 1 - Direita */}
              <div className="relative w-full flex flex-col md:flex-row mb-10 md:mb-16 items-center">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8 items-center mb-4 md:mb-0">
                  <div className="border-2 border-[#3BA3FF] rounded-2xl p-4 md:p-8 w-full max-w-xl text-left text-white bg-black/60" style={{ boxShadow: '0 0 24px 4px #3BA3FF, 0 0 8px 2px #3BA3FF' }}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                      <span className="bg-[#1A2B4D] text-[#3BA3FF] px-3 py-1 rounded-full text-xs font-semibold">Fase 1</span>
                      <span className="text-xs text-[#A3B8D8] font-bold">Semana 1-2</span>
                    </div>
                    <div className="font-bold text-lg md:text-2xl mb-2">Fundamentos & Análise</div>
                    <div className="text-[#A3B8D8] mb-4 text-sm md:text-base">Compreensão profunda do negócio e definição da arquitetura do agente.</div>
                    <div className="font-bold mb-1 text-sm md:text-base">Atividades:</div>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-center gap-2 text-[#A3B8D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Análise de processos e fluxos existentes</li>
                      <li className="flex items-center gap-2 text-[#A3B8D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Mapeamento de integrações necessárias</li>
                      <li className="flex items-center gap-2 text-[#A3B8D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Definição da personalidade do agente</li>
                      <li className="flex items-center gap-2 text-[#A3B8D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Estruturação da base de conhecimento</li>
                    </ul>
                    <hr className="border-[#22304A] mb-3" />
                    <div className="font-bold mb-1 text-sm md:text-base">Entregas:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#1A2B4D] text-[#3BA3FF] px-3 py-1 rounded-full text-xs font-semibold">Documento de Arquitetura</span>
                      <span className="bg-[#1A2B4D] text-[#3BA3FF] px-3 py-1 rounded-full text-xs font-semibold">Wireframes de Conversação</span>
                      <span className="bg-[#1A2B4D] text-[#3BA3FF] px-3 py-1 rounded-full text-xs font-semibold">Estratégia de Dados</span>
                    </div>
                  </div>
                </div>
                {/* Ícone central azul */}
                <div className="flex flex-col items-center z-10 justify-center w-full md:w-32 my-6 md:my-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#3BA3FF] flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg border-4 border-[#10192B] mx-auto">
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7 md:w-8 md:h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4.5c-4.5 0-8.25 2.25-8.25 5.25 0 1.5 1.5 2.25 2.25 2.25.75 0 1.5-.75 1.5-1.5s-.75-1.5-1.5-1.5c-.75 0-1.5.75-1.5 1.5 0 3 3.75 5.25 8.25 5.25s8.25-2.25 8.25-5.25c0-.75-.75-1.5-1.5-1.5s-1.5.75-1.5 1.5.75 1.5 1.5 1.5c.75 0 2.25-.75 2.25-2.25 0-3-3.75-5.25-8.25-5.25z' /></svg>
                  </div>
                </div>
              </div>

              {/* Fase 2 - Esquerda */}
              <div className="relative w-full flex flex-col md:flex-row mb-10 md:mb-16 items-center">
                <div className="w-1/2"></div>
                <div className="w-1/2 flex justify-start pl-8 items-center">
                  <div className="border-2 border-[#9442FE] rounded-2xl p-4 md:p-8 w-full max-w-xl text-left text-white bg-black/60" style={{ boxShadow: '0 0 24px 4px #9442FE, 0 0 8px 2px #9442FE' }}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                      <span className="bg-[#2B1A4D] text-[#9442FE] px-3 py-1 rounded-full text-xs font-semibold">Fase 2</span>
                      <span className="text-xs text-[#C3A3D8] font-bold">Semana 3-4</span>
                    </div>
                    <div className="font-bold text-lg md:text-2xl mb-2">Desenvolvimento & Treinamento</div>
                    <div className="text-[#C3A3D8] mb-4 text-sm md:text-base">Construção do agente com código personalizado e treinamento inicial.</div>
                    <div className="font-bold mb-1 text-sm md:text-base">Atividades:</div>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-center gap-2 text-[#C3A3D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Desenvolvimento em código puro ou No-Code</li>
                      <li className="flex items-center gap-2 text-[#C3A3D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Implementação de integrações</li>
                      <li className="flex items-center gap-2 text-[#C3A3D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Treinamento com dados específicos</li>
                      <li className="flex items-center gap-2 text-[#C3A3D8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Configuração de infraestrutura dedicada</li>
                    </ul>
                    <hr className="border-[#2B1A4D] mb-3" />
                    <div className="font-bold mb-1 text-sm md:text-base">Entregas:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#2B1A4D] text-[#9442FE] px-3 py-1 rounded-full text-xs font-semibold">Agente Funcional (Beta)</span>
                      <span className="bg-[#2B1A4D] text-[#9442FE] px-3 py-1 rounded-full text-xs font-semibold">Dashboard de Monitoramento</span>
                      <span className="bg-[#2B1A4D] text-[#9442FE] px-3 py-1 rounded-full text-xs font-semibold">Documentação Técnica</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fase 3 - Direita */}
              <div className="relative w-full flex flex-col md:flex-row mb-10 md:mb-16 items-center">
                <div className="w-1/2 flex justify-end pr-8 items-center">
                  <div className="border-2 border-[#FFD600] rounded-2xl p-4 md:p-8 w-full max-w-xl text-left text-white bg-black/60" style={{ boxShadow: '0 0 24px 4px #FFD600, 0 0 8px 2px #FFD600' }}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                      <span className="bg-[#2B2B1A] text-[#FFD600] px-3 py-1 rounded-full text-xs font-semibold">Fase 3</span>
                      <span className="text-xs text-[#E8E6B8] font-bold">Semana 5-6</span>
                    </div>
                    <div className="font-bold text-lg md:text-2xl mb-2">Testes & Refinamento</div>
                    <div className="text-[#E8E6B8] mb-4 text-sm md:text-base">Testes intensivos e otimização baseada em performance real.</div>
                    <div className="font-bold mb-1 text-sm md:text-base">Atividades:</div>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-center gap-2 text-[#E8E6B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Testes de stress e performance</li>
                      <li className="flex items-center gap-2 text-[#E8E6B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Ajuste fino de respostas</li>
                      <li className="flex items-center gap-2 text-[#E8E6B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Validação de segurança</li>
                      <li className="flex items-center gap-2 text-[#E8E6B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Otimização de conversões</li>
                    </ul>
                    <hr className="border-[#2B2B1A] mb-3" />
                    <div className="font-bold mb-1 text-sm md:text-base">Entregas:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#2B2B1A] text-[#FFD600] px-3 py-1 rounded-full text-xs font-semibold">Relatório de Performance</span>
                      <span className="bg-[#2B2B1A] text-[#FFD600] px-3 py-1 rounded-full text-xs font-semibold">Agente Otimizado</span>
                      <span className="bg-[#2B2B1A] text-[#FFD600] px-3 py-1 rounded-full text-xs font-semibold">Checklist de Qualidade</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center z-10 justify-center w-full md:w-32 my-6 md:my-0">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FFD600] flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg border-4 border-[#1A1A14] mx-auto">
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7 md:w-8 md:h-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><circle cx='12' cy='12' r='8' stroke='currentColor' strokeWidth='2' fill='none'/><circle cx='12' cy='12' r='3' fill='currentColor'/></svg>
                  </div>
                </div>
              </div>

              {/* Fase 4 - Esquerda */}
              <div className="relative w-full flex flex-col md:flex-row mb-10 md:mb-16 items-center">
                <div className="w-1/2"></div>
                <div className="w-1/2 flex justify-start pl-8 items-center">
                  <div className="border-2 border-[#00FF85] rounded-2xl p-4 md:p-8 w-full max-w-xl text-left text-white bg-black/60" style={{ boxShadow: '0 0 24px 4px #00FF85, 0 0 8px 2px #00FF85' }}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                      <span className="bg-[#1A4D2B] text-[#00FF85] px-3 py-1 rounded-full text-xs font-semibold">Fase 4</span>
                      <span className="text-xs text-[#A3D8B8] font-bold">Semana 7+</span>
                    </div>
                    <div className="font-bold text-lg md:text-2xl mb-2">Deploy & Monitoramento</div>
                    <div className="text-[#A3D8B8] mb-4 text-sm md:text-base">Lançamento em produção com monitoramento contínuo e suporte dedicado.</div>
                    <div className="font-bold mb-1 text-sm md:text-base">Atividades:</div>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-center gap-2 text-[#A3D8B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Deploy em ambiente de produção</li>
                      <li className="flex items-center gap-2 text-[#A3D8B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Configuração de alertas</li>
                      <li className="flex items-center gap-2 text-[#A3D8B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Treinamento da equipe</li>
                      <li className="flex items-center gap-2 text-[#A3D8B8]"><svg className="w-5 h-5" fill="none" stroke="#00FF85" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Monitoramento de KPIs</li>
                    </ul>
                    <hr className="border-[#1A4D2B] mb-3" />
                    <div className="font-bold mb-1 text-sm md:text-base">Entregas:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#1A4D2B] text-[#00FF85] px-3 py-1 rounded-full text-xs font-semibold">Agente em Produção</span>
                      <span className="bg-[#1A4D2B] text-[#00FF85] px-3 py-1 rounded-full text-xs font-semibold">Manual de Operação</span>
                      <span className="bg-[#1A4D2B] text-[#00FF85] px-3 py-1 rounded-full text-xs font-semibold">Suporte Contínuo 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão CTA */}
              <div className="flex justify-center w-full relative" style={{ zIndex: 2 }}>
                <a href="#contato" className="neon-button px-10 py-4 rounded-full text-lg font-bold shadow-lg mt-24 block">Quero acelerar meus resultados</a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Agents Section */}
        <section className="py-24 bg-black relative">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <span className="text-sm text-white/90">Produtos e Serviços</span>
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#6B8AFF]">Agentes Humanizados</span>{" "}
                <span className="text-white">sob medida</span>
              </h2>
              <p className="text-xl text-gray-300">
                Cada agente é único, construído como uma peça de engenharia viva. Não entregamos "bots genéricos" — desenhamos mentes digitais para executar tarefas com precisão, autonomia e inteligência.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AgentCard
                title="Monitoramento de Transações"
                description="Monitora transações em tempo real e envia alertas para comportamentos suspeitos."
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                delay={0}
              />
              <AgentCard
                title="Atendimento Automático"
                description="Responde a solicitações de clientes 24/7 integrando-se a canais de comunicação."
                image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                delay={0.2}
              />
              <AgentCard
                title="Integração com Firebase"
                description="Sincroniza dados entre Firebase e outras plataformas em tempo real."
                image="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                delay={0.4}
              />
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to={createPageUrl("Portfolio")}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 border border-[#00f0ff]/30 text-white font-medium rounded-full flex items-center mx-auto space-x-2"
                >
                  <span>Ver Portfólio Completo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Case de Sucesso Section */}
        <section className="py-24 bg-black relative">
          <div className="container mx-auto px-6 relative">
            {/* Decorative gradient line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50"></div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black backdrop-blur-md border border-[#00F0FF]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <svg className="w-4 h-4 mr-2 text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm text-white/90">Case de Sucesso</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              <span className="text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">OakLab:</span>{" "}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">
                De 72% a 89% de qualificação
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Lado Esquerdo - Informações */}
              <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">O Desafio</h3>
                    <p className="text-gray-300">
                      A OakLab, startup de biotecnologia, chegou até nós com um problema crítico: 
                      <span className="text-[#00F0FF] font-semibold drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]"> 72% dos leads se perdiam</span> antes do contato humano. 
                      O time de vendas estava sobrecarregado e a qualificação era inconsistente.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">Nossa Solução</h3>
                    <p className="text-gray-300">
                      Criamos um agente inteligente conectado ao CRM e à base de dúvidas técnicas do produto. 
                      O agente qualifica leads automaticamente, responde questões técnicas e alimenta o time de 
                      vendas com insights reais.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">O Resultado</h3>
                    <p className="text-gray-300">
                      Em apenas 3 semanas, a taxa de qualificação aumentou para <span className="text-[#00F0FF] font-semibold drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">89%</span>. 
                      O agente agora aprende sozinho com as objeções mais comuns e gera relatórios semanais com insights acionáveis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Métricas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Taxa de Qualificação */}
                <div className="col-span-2 bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                  <style jsx>{`
                    @keyframes loadBar {
                      0% { width: 0%; }
                      100% { width: var(--target-width); }
                    }
                    @keyframes pulse {
                      0%, 100% { opacity: 1; }
                      50% { opacity: 0.7; }
                    }
                    .animate-load-bar {
                      animation: loadBar 1.5s ease-out forwards, pulse 2s ease-in-out infinite;
                    }
                  `}</style>

                  <h4 className="text-xl mb-6 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Taxa de Qualificação</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Antes</span>
                        <span className="text-gray-400">72%</span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/10">
                        <div 
                          className="h-full bg-[#FF6B6B] rounded-full shadow-[0_0_10px_rgba(255,107,107,0.5)] animate-load-bar"
                          style={{"--target-width": "72%"}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Depois</span>
                        <span className="text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">89%</span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/10">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00F0FF] to-[#9442FE] rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] animate-load-bar"
                          style={{"--target-width": "89%"}}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[#4ADE80] text-sm drop-shadow-[0_0_3px_rgba(74,222,128,0.5)]">+17%</span>
                    </div>
                  </div>
                </div>

                {/* Conversões */}
                <motion.div 
                  className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)] group hover:border-[#00F0FF]/40 transition-all duration-300"
                  onViewportEnter={() => setIsVisible(true)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-[#4ADE80] text-2xl font-bold drop-shadow-[0_0_3px_rgba(74,222,128,0.5)]">+{count}%</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Conversões</h4>
                </motion.div>

                {/* Implementação */}
                <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#9442FE]/20 shadow-[0_0_25px_rgba(148,66,254,0.1)] group hover:border-[#9442FE]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#9442FE] drop-shadow-[0_0_3px_rgba(148,66,254,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-2xl font-bold text-white">3 sem</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Implementação</h4>
                </div>

                {/* Disponibilidade */}
                <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)] group hover:border-[#00F0FF]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-2xl font-bold text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">24/7</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Disponibilidade</h4>
                </div>

                {/* Memória */}
                <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#9442FE]/20 shadow-[0_0_25px_rgba(148,66,254,0.1)] group hover:border-[#9442FE]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#9442FE] drop-shadow-[0_0_3px_rgba(148,66,254,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-2xl font-bold text-[#9442FE] drop-shadow-[0_0_3px_rgba(148,66,254,0.5)]">∞</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Memória</h4>
                </div>

                {/* Citação */}
                <div className="col-span-2 bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                  <blockquote className="text-center">
                    <p className="text-xl text-gray-300 italic mb-4">
                      "Foi como adicionar um vendedor técnico com memória infinita — sem custo fixo."
                    </p>
                    <footer className="text-sm">
                      <cite className="text-[#00F0FF] font-semibold block drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">CEO da OakLab</cite>
                      <span className="text-gray-400">Startup de Biotecnologia</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#9442FE]/5 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00F0FF]/5 blur-[100px] rounded-full animate-pulse"></div>
          
          {/* Decorative gradient line at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#9442FE] to-transparent opacity-50"></div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black relative">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-5xl mx-auto bg-gradient-to-r from-[#111111] to-[#1a1a1a] p-12 rounded-2xl border border-gray-800 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9442fe]/20 blur-[100px] rounded-full"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#00f0ff]/20 blur-[100px] rounded-full"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para decolar?
                  </h2>
                  <p className="text-xl text-gray-300">
                    Fale com a Ugarit e transforme seu negócio com automação de outro nível.
                  </p>
                </div>
                <Link to={createPageUrl("Contact")}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#9442fe] text-black font-bold rounded-full whitespace-nowrap flex items-center space-x-2"
                  >
                    <span>Quero Inovar com a Ugarit</span>
                    <Zap className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

// Helper Components
const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden backdrop-blur-md border border-[#00f0ff]/20 p-8 transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        borderColor: "rgba(0, 240, 255, 0.4)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Efeito de glow no background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/5 via-transparent to-[#9442fe]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 flex items-center justify-center mb-6 group-hover:from-[#00f0ff]/30 group-hover:to-[#9442fe]/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]">
          <IconComponent name={icon} className="w-6 h-6 text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
        </div>
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00f0ff] to-[#9442fe] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(0,240,255,0.3)]">{title}</h3>
        <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">{description}</p>
      </div>

      {/* Bordas com glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#9442fe]/50 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#00f0ff]/50 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#9442fe]/50 to-transparent"></div>
      </div>
    </motion.div>
  );
};

const AgentCard = ({ title, description, image, delay }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden group h-96"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity">{description}</p>
        <Link to={createPageUrl("Portfolio")}> 
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium text-sm border border-white/30 flex items-center space-x-2"
          >
            <span>Ver em ação</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const IconComponent = ({ name, className }) => {
  switch (name) {
    case 'star':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M12 2l3.09 6.26L22 9.27l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case 'brain':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M12 8c3.5 0 6 2.5 6 6s-2.5 6-6 6-6-2.5-6-6 2.5-6 6-6zm0 0V3m0 5c-1.5 0-3 .5-4 1.5M12 8c1.5 0 3 .5 4 1.5"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="14"
            r="2"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      );
    case 'shield':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M12 9l2 2-2 2-2-2 2-2z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      );
    case 'code':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="9"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      );
    case 'award':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.circle
            cx="12"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M15.477 12.89L16.5 22l-4.5-3-4.5 3 1.023-9.11"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      );
    default:
      return null;
  }
}; 