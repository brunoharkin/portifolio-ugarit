import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, X, ChevronRight, ChevronLeft } from "lucide-react";
import ChatInterface from "../components/ChatInterface";

export default function Portfolio() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showChat, setShowChat] = useState(false);

  const categories = [
    { id: "all", name: "Todos" },
    { id: "integration", name: "Integração" },
    { id: "automation", name: "Automação" },
    { id: "monitoring", name: "Monitoramento" },
    { id: "communication", name: "Comunicação" }
  ];

  // Array de agentes com webhookUrl, initialMessage e videoUrl individuais
  const agents = [
    {
      id: 1,
      title: "Agente Max – Farmácia Inteligente",
      category: "automation",
      description: "Atendimento automático e eficaz para redes farmacêuticas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      videoUrl: "https://drive.google.com/file/d/1y5RyIGbSS_nJ7wkSA6bodgJKSdqLWWdX/view?usp=sharing",
      longDescription: "Imagine oferecer um atendimento 24/7, sem filas, sem ruído, com respostas certeiras e pedidos registrados em tempo real. O Agente Max foi treinado com base em redes reais de farmácias e já está em produção. Ele atende, entende e executa.",
      features: [
        "Catálogo de medicamentos e produtos",
        "Localização da farmácia mais próxima",
        "Consulta de disponibilidade em estoque",
        "Pedido direto pelo WhatsApp",
        "Encaminhamento para atendimento humano (se necessário)"
      ],
      workflow: [
        "Recebimento do pedido",
        "Verificação de disponibilidade",
        "Processamento do pedido",
        "Confirmação de pagamento",
        "Entrega ou retirada"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/atendimento",
      initialMessage: "Olá! Sou o Agente Max da Farmácia. Como posso ajudar você hoje?"
    },
    {
      id: 2,
      title: "Agente de RH – Recrutamento Automatizado com Filtro Inteligente",
      category: "automation",
      description: "Receba currículos, analise perfis e pré-qualifique candidatos sem esforço",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      videoUrl: "https://drive.google.com/file/d/16EZyFQvu0zbU3syslm_WCEy68veIJIG6/view?usp=sharing",
      longDescription: "Ideal para empresas que recebem muitos currículos, mas têm pouco tempo para analisá-los. Esse agente automatiza desde a captação até a triagem dos candidatos, entregando apenas os mais alinhados com o perfil desejado.",
      features: [
        "Recebimento de currículos (PDF, DOC, etc.)",
        "Extração e análise de dados do candidato",
        "Aplicação de perguntas personalizadas",
        "Geração de score de adequação",
        "Envio dos mais qualificados para o RH"
      ],
      workflow: [
        "Recebimento do currículo",
        "Análise automática do perfil",
        "Pontuação do candidato",
        "Filtragem por requisitos",
        "Encaminhamento ao RH"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/atendimento",
      initialMessage: "Olá! Sou o Agente de RH. Como posso ajudar no seu processo seletivo?"
    },
    {
      id: 3,
      title: "Agente SDR – Qualificação e Agendamento Inteligente",
      category: "automation",
      description: "Leads entram, reuniões saem — sem fricção, sem perda de tempo",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      videoUrl: "https://drive.google.com/file/d/1pOjosSnhNkw3lgHtGJJfz5vEmJHnV4fA/view?usp=sharing",
      longDescription: "Esse agente entra em ação no fim do teste de qualquer outro agente. Ele conversa, qualifica e, se fizer sentido, agenda automaticamente uma reunião com seu time. Tudo sem parecer robótico, sempre respeitando o tempo e a atenção do lead.",
      features: [
        "Conversa com leads pós-teste",
        "Geração de interesse com base na interação",
        "Validação de perfil e intenção",
        "Agendamento direto no Google Calendar",
        "Integração com CRM"
      ],
      workflow: [
        "Qualificação inicial do lead",
        "Análise de interesse",
        "Verificação de disponibilidade",
        "Agendamento da reunião",
        "Confirmação e lembretes"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/sdr",
      initialMessage: "Olá! Sou o Agente SDR. Vamos agendar uma conversa sobre nossos serviços?"
    },
    {
      id: 4,
      title: "Agente Imobiliário – Atendimento 100% Especializado no Setor",
      category: "automation",
      description: "Venda ou aluguel de imóveis com inteligência e agilidade",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      videoUrl: "https://drive.google.com/file/d/1Rh_CCE_bUOsU4vln3ShrRVhCj_g8_pMk/view?usp=sharing",
      longDescription: "Treinado para lidar com o setor imobiliário, esse agente apresenta imóveis, filtra com base nas preferências do cliente e pode agendar visitas automaticamente.",
      features: [
        "Cadastro de imóveis com fotos e detalhes",
        "Busca por filtros (localização, preço, tipo)",
        "Atendimento por WhatsApp ou web",
        "Geração de interesse e captação de leads",
        "Agendamento de visitas e follow-ups"
      ],
      workflow: [
        "Recebimento da solicitação",
        "Filtragem de imóveis",
        "Apresentação das opções",
        "Agendamento de visitas",
        "Acompanhamento pós-visita"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/imoveis",
      initialMessage: "Olá! Sou o Agente Imobiliário. Qual tipo de imóvel você procura?"
    },
    {
      id: 5,
      title: "Agente de Conteúdo – WordPress Automatizado com IA",
      category: "automation",
      description: "Artigos novos no seu blog. Toda semana. Sem esforço.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      videoUrl: "https://drive.google.com/file/d/1SkgotaB5zkZ6DuVYs8t8grlT_cEdCAtE/view?usp=sharing",
      longDescription: "Um agente treinado para criar conteúdo de qualidade com base em palavras-chave. Ele pesquisa, escreve, envia uma prévia via WhatsApp e, com sua autorização, publica automaticamente no WordPress.",
      features: [
        "Busca por temas e tendências",
        "Escrita com SEO otimizado",
        "Confirmação via WhatsApp",
        "Postagem automática no blog",
        "Registro de conteúdo no CRM"
      ],
      workflow: [
        "Pesquisa de keywords",
        "Criação do conteúdo",
        "Revisão e aprovação",
        "Publicação automática",
        "Monitoramento de performance"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/conteudo",
      initialMessage: "Olá! Sou o Agente de Conteúdo. Vamos criar conteúdo para seu blog?"
    },
    {
      id: 6,
      title: "MCP – Agendador Inteligente com Google Calendar",
      category: "automation",
      description: "Gerencie reuniões, confirmações e lembretes de forma automática",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://drive.google.com/file/d/1rCLHUmyEsnROsesqvGpOpYtnOHTgHzDP/view?usp=sharing",
      longDescription: "Integrado ao Google Calendar, esse agente verifica horários disponíveis, agenda reuniões com base no melhor horário para o cliente e envia lembretes automáticos.",
      features: [
        "Sincronização total com Google Calendar",
        "Verificação de disponibilidade em tempo real",
        "Agendamento automatizado e personalizado",
        "Envio de lembretes pré-reunião",
        "Registro completo no CRM"
      ],
      workflow: [
        "Verificação de agenda",
        "Sugestão de horários",
        "Confirmação do agendamento",
        "Envio de lembretes",
        "Registro da reunião"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/agenda",
      initialMessage: "Olá! Sou o MCP, seu agendador inteligente. Quando podemos marcar sua reunião?"
    }
  ];

  const filteredAgents = filter === "all" 
    ? agents 
    : agents.filter(agent => agent.category === filter);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedAgent(null);
    setShowChat(false);
  };

  const handleOpenChat = () => {
    setShowChat(true);
  };

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Agent Detail Modal */}
        <AnimatePresence>
          {selectedAgent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-start pt-10 pb-20 px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl shadow-xl max-w-5xl w-full overflow-hidden"
                style={{ maxHeight: '90vh', overflowY: 'auto' }}
              >
                {/* Show chat when showChat is true */}
                {showChat ? (
                  <div className="h-[80vh]">
                    <ChatInterface 
                      agentName={selectedAgent.title}
                      agentAvatar={selectedAgent.image} // Still using image for avatar in chat
                      onClose={() => setShowChat(false)}
                      webhookUrl={selectedAgent.webhookUrl}
                      initialMessage={selectedAgent.initialMessage}
                    />
                  </div>
                ) : (
                  <>
                    {/* Replaced img with video */}
                    <div className="relative h-64 sm:h-96 bg-black"> {/* Added bg-black as fallback */}
                      {selectedAgent.videoUrl ? (
                        <video
                          key={selectedAgent.id} // Add key to force re-render on agent change
                          src={selectedAgent.videoUrl}
                          alt={`Demonstração do ${selectedAgent.title}`} // Alt text for accessibility
                          className="w-full h-full object-cover" // Use object-cover to fill the container
                          autoPlay
                          loop
                          muted
                          playsInline // Important for autoplay on mobile
                          onError={(e) => console.error("Erro ao carregar vídeo:", e)} // Basic error handling
                        >
                          Seu navegador não suporta a tag de vídeo.
                        </video>
                      ) : (
                        // Fallback image if videoUrl is not provided
                        <img
                          src={selectedAgent.image}
                          alt={selectedAgent.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>
                    </div>

                    <div className="p-8">
                      <div className="max-w-3xl mx-auto">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold">{selectedAgent.title}</h2>
                          <div className="mt-2">
                            <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                              {categories.find(c => c.id === selectedAgent.category)?.name}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div>
                            <h3 className="text-xl font-semibold mb-4 gradient-text">Sobre o Agente</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{selectedAgent.longDescription}</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold mb-4 gradient-text">Funcionalidades</h3>
                            <ul className="space-y-2">
                              {selectedAgent.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00f0ff] to-[#9442fe]"></div>
                                  </div>
                                  <span className="text-gray-300 text-lg">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold mb-4 gradient-text">Fluxo de Trabalho</h3>
                            <div className="relative pl-8">
                              {selectedAgent.workflow.map((step, index) => (
                                <div key={index} className="relative pb-8">
                                  {index !== selectedAgent.workflow.length - 1 && (
                                    <span className="absolute top-5 left-[11px] -ml-px h-full w-0.5 bg-gradient-to-b from-[#00f0ff] to-[#9442fe]" aria-hidden="true"></span>
                                  )}
                                  <div className="relative flex items-start space-x-3">
                                    <div className="relative">
                                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#9442fe] flex items-center justify-center ring-4 ring-gray-900">
                                        <span className="text-black font-bold">{index + 1}</span>
                                      </div>
                                    </div>
                                    <div className="min-w-0 flex-1 py-1.5">
                                      <div className="text-lg text-gray-300">
                                        {step}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Botão para abrir o chat */}
                          <div className="pt-8 text-center">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleOpenChat}
                              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-black bg-gradient-to-r from-[#00f0ff] to-[#9442fe] hover:from-[#00d0df] hover:to-[#8432ee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00f0ff]/50 transition-all duration-300"
                            >
                              Solicitar Este Agente
                              <Plus className="ml-2 -mr-1 h-5 w-5" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content - Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Portfólio de Agentes</h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Explore nossos agentes especializados, prontos para automatizar e otimizar diversas áreas do seu negócio.
          </p>

          {/* Category Filters */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 mb-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-[#00f0ff] to-[#9442fe] text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Agent Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredAgents.map((agent) => (
                <motion.div
                  key={agent.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full group cursor-pointer"
                  onClick={() => handleAgentClick(agent)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={agent.image}
                      alt={agent.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <span className="absolute top-4 left-4 px-2 py-0.5 text-xs rounded-full bg-gray-800/70 text-gray-300">
                      {categories.find(c => c.id === agent.category)?.name}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{agent.description}</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-sm font-medium text-[#00f0ff] group-hover:text-[#9442fe] transition-colors">
                        Ver Detalhes
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

