"use client";

import React from "react";
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Printer, 
  FileText, 
  Image as ImageIcon, 
  Copy, 
  FileBadge 
} from "lucide-react";

type Servico = {
  nome: string;
  descricao: string;
  icon?: React.ReactNode;
};

const servicos: Servico[] = [
  {
    nome: "Consulta SPC/SERASA",
    descricao: "Consulta ao SPC e Serasa para CPF ou CNPJ, ideal para quem precisa verificar restrições financeiras, dívidas, protestos e ações judiciais.",
    icon: <Image src="/img/serasa.png" alt="Xerox" width={200} height={40} />,
  },
  {
    nome: "Consulta INSS",
    descricao: "Emissão de extrato do INSS, ideal para quem precisa comprovar contribuições previdenciárias ou verificar o histórico de benefícios.",
    icon: <Image src="/img/inss.png" alt="Xerox" width={200} height={40} />,
  },
  {
    nome: "Consulta Rio Previdência",
    descricao: "Emissão de extrato do Rio Previdência, ideal para quem precisa comprovar contribuições previdenciárias ou verificar o histórico de benefícios para servidores públicos do Rio de Janeiro.",
    icon: <Image src="/img/rioprevidencia.png" alt="Xerox" width={200} height={40} />,
  },
  {
    nome: "Consulta GOV",
    descricao: "Emissão de certidões e documentos oficiais, ideal para quem precisa de comprovações para processos judiciais, administrativos ou pessoais.",
    icon: <Image src="/img/gov.png" alt="Xerox" width={200} height={40} />,
  },
];

export default function ImpressaoPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [emojiDevice, setEmojiDevice] = useState("");

  React.useEffect(() => {
  const userAgent = navigator.userAgent;

  if (/mobile/i.test(userAgent)) {
      setEmojiDevice("📱");
    } else if (/tablet|ipad/i.test(userAgent)) {
      setEmojiDevice("📲");
    } else {
      setEmojiDevice("");
    }
  }, []);

  const criarMensagemOrcamento = () => {
  const mensagem = `Olá *Central de Serviços - Speed Lan House!* ${emojiDevice}

Estou vindo através do site de vocês e gostaria de solicitar um orçamento.`;

  return encodeURIComponent(mensagem);
};

  const criarMensagem = (servicoNome: string) => {
  const mensagem = `Olá, *Central de Serviços Speed Lan House!* ${emojiDevice}

Estou vindo através do site de vocês e gostaria de solicitar um orçamento para *${servicoNome}!*`;
    return encodeURIComponent(mensagem);
};

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#002F73] via-[#003A8F] to-orange-600 text-white">

            {/* HERO */}
      <section className="relative w-full text-white overflow-hidden">
  
        {/* IMAGEM DE FUNDO */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/loja.jpeg')" }}
        />

        {/* OVERLAY ESCURO PARA MELHORAR LEITURA */}
        <div className="absolute inset-0 bg-black/80" />

        {/* CONTEÚDO */}
        <div className="relative z-10">

        {/* NAVBAR */}
        <header className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center gap-3">
                            <Image
                src="/img/logo.png"
                alt="SPEED LAN House"
                width={130}
                height={70}
              />
              <div className="text-2xl font-bold tracking-wide">
                SPEED LAN <span className="text-orange-300">HOUSE</span>
              </div>
            </div>

            {/* BOTÃO HAMBÚRGUER (MOBILE) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1"
              aria-label="Abrir Menu"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-8 text-lg">
              <Link href="/" className="hover:text-orange-300 transition">Início</Link>
              <Link href="/pages/nossosservicos" className="hover:text-orange-300 transition">Nossos Serviços</Link>
              <a 
              href={`https://wa.me/5521992013095?text=${criarMensagemOrcamento()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#003A8F] hover:bg-[#003A8F] px-5 py-2 rounded-lg shadow-md transition"
            >
              Solicite seu orçamento
            </a>
            </nav>
          </div>

          {/* MENU MOBILE */}
          {menuOpen && (
            <nav className="md:hidden mt-6 flex flex-col gap-4 text-lg bg-white text-indigo-800 p-6 rounded-xl shadow-lg">
              <Link href="/" onClick={() => setMenuOpen(false)}>Início</Link>
              <Link href="/pages/nossosservicos" onClick={() => setMenuOpen(false)}>Serviços</Link>

            <a 
              href={`https://wa.me/5521992013095?text=${criarMensagemOrcamento()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-900 text-white px-5 py-2 rounded-lg shadow-md text-center"
            >
              Solicite seu orçamento
            </a>
            </nav>
          )}
        </header>

        {/* HERO CONTENT */}
        <div className="max-w-4xl mx-auto text-center px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            CONSULTAS
          </h1>
          <p className="text-1xl md:text-xl mb-2">
            A consulta ao <strong>SPC e Serasa</strong> é a maneira mais segura de analisar o histórico financeiro de CPF ou CNPJ nas principais bases de proteção ao crédito do país, identificando restrições, dívidas, protestos, ações judiciais e score de crédito que podem impactar diretamente a liberação de crédito, financiamento e seus negócios.
          </p>

        <a
          href={`https://wa.me/5521992013095?text=${criarMensagemOrcamento()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 px-8 py-4 text-xl rounded-lg font-semibold shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8"
          >
            {/* BALÃO VERDE */}
            <path
              fill="#25D366"
              d="M16.001 3C8.82 3 3 8.82 3 16c0 2.828.92 5.437 2.477 7.555L3 29l5.62-2.42A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z"
            />

            {/* TELEFONE BRANCO */}
            <path
              fill="#ffffff"
              d="M21.756 18.818c-.314-.157-1.86-.918-2.148-1.023-.288-.105-.497-.157-.707.157-.21.314-.812 1.023-.995 1.233-.183.21-.366.236-.68.078-.314-.157-1.325-.488-2.524-1.556-.932-.83-1.56-1.856-1.743-2.17-.183-.314-.02-.483.138-.64.142-.141.314-.366.471-.55.157-.183.21-.314.314-.523.105-.21.052-.393-.026-.55-.078-.157-.707-1.705-.969-2.34-.255-.612-.515-.53-.707-.54l-.602-.01c-.21 0-.55.078-.838.393s-1.1 1.076-1.1 2.625c0 1.55 1.126 3.05 1.283 3.26.157.21 2.217 3.387 5.374 4.748.75.324 1.335.518 1.79.663.752.24 1.437.206 1.978.125.603-.09 1.86-.76 2.123-1.495.262-.734.262-1.364.183-1.495-.078-.13-.288-.21-.602-.367z"
            />
          </svg>

          Fale Conosco
        </a>
        </div>
        </div>
      </section>



            {/* SERVIÇOS */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-r from-[#002F73] via-[#003A8F] to-orange-600 text-white">
        <h2 className="text-3xl font-bold text-center text-white mb-14">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {servicos.map((servico, index) => (
            
            <div
                key={index}
                className="bg-white rounded-xl shadow-xl p-6 text-center hover:shadow-2xl transition flex flex-col"
              >
              {/* ÍCONE */}
              <div className="flex justify-center mb-4">
                {servico.icon}
              </div>

              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                {servico.nome}
              </h3>

              <p className="text-gray-600 mb-6">
                {servico.descricao}
              </p>

              <a
                href={`https://wa.me/5521992013095?text=${criarMensagem(servico.nome)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-2 rounded-lg shadow-md transition font-semibold justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-white"
                >
                  <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.828.92 5.437 2.477 7.555L3 29l5.62-2.42A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5a10.42 10.42 0 01-5.305-1.45l-.38-.22-3.335 1.437.71-3.25-.245-.39A10.42 10.42 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.756-7.682c-.314-.157-1.86-.918-2.148-1.023-.288-.105-.497-.157-.707.157-.21.314-.812 1.023-.995 1.233-.183.21-.366.236-.68.078-.314-.157-1.325-.488-2.524-1.556-.932-.83-1.56-1.856-1.743-2.17-.183-.314-.02-.483.138-.64.142-.141.314-.366.471-.55.157-.183.21-.314.314-.523.105-.21.052-.393-.026-.55-.078-.157-.707-1.705-.969-2.34-.255-.612-.515-.53-.707-.54l-.602-.01c-.21 0-.55.078-.838.393s-1.1 1.076-1.1 2.625c0 1.55 1.126 3.05 1.283 3.26.157.21 2.217 3.387 5.374 4.748.75.324 1.335.518 1.79.663.752.24 1.437.206 1.978.125.603-.09 1.86-.76 2.123-1.495.262-.734.262-1.364.183-1.495-.078-.13-.288-.21-.602-.367z"/>
                </svg>

                Solicitar Serviço
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className=" py-20 px-6 bg-gradient-to-r from-[#002F73] via-[#003A8F] to-orange-600 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Precisa imprimir agora?
            </h2>

            <p className="text-white text-lg mb-8 leading-relaxed">
              Envie seu arquivo pelo <span className="font-semibold text-green-600">WhatsApp </span> 
              e retire pronto na unidade ou consulte valores rapidamente.
            </p>

            <p className="mb-3 font-semibold">
              De segunda a sábado, das 8h às 22h.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-white">Atendimento imediato</span>
              </li>

              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-white">Unidade física para retirada</span>
              </li>

              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-white">Serviço rápido e sem burocracia</span>
              </li>
            </ul>

            <div className="py-6">
              <p className="text-white text-sm">
                Atendimento por e-mail:
              </p>

              <a
                href="mailto:sac@speedlanhouse.com.br"
                className="text-lg font-semibold text-white hover:text-orange-500 transition"
              >
                sac@speedlanhouse.com.br
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/profile.php?id=100054316684907"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-[#1877F2] rounded-lg hover:scale-105 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.997 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.953.926-1.953 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.07 24 18.092 24 12.073z"/>
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/cs.speed_lan_house/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg hover:scale-105 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white"
              >
                <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm9.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
              </svg>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5521992013095"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-[#25D366] rounded-lg hover:scale-105 transition"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6 fill-white"
            >
              <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.828.92 5.437 2.477 7.555L3 29l5.62-2.42A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5a10.42 10.42 0 01-5.305-1.45l-.38-.22-3.335 1.437.71-3.25-.245-.39A10.42 10.42 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.756-7.682c-.314-.157-1.86-.918-2.148-1.023-.288-.105-.497-.157-.707.157-.21.314-.812 1.023-.995 1.233-.183.21-.366.236-.68.078-.314-.157-1.325-.488-2.524-1.556-.932-.83-1.56-1.856-1.743-2.17-.183-.314-.02-.483.138-.64.142-.141.314-.366.471-.55.157-.183.21-.314.314-.523.105-.21.052-.393-.026-.55-.078-.157-.707-1.705-.969-2.34-.255-.612-.515-.53-.707-.54l-.602-.01c-.21 0-.55.078-.838.393s-1.1 1.076-1.1 2.625c0 1.55 1.126 3.05 1.283 3.26.157.21 2.217 3.387 5.374 4.748.75.324 1.335.518 1.79.663.752.24 1.437.206 1.978.125.603-.09 1.86-.76 2.123-1.495.262-.734.262-1.364.183-1.495-.078-.13-.288-.21-.602-.367z"/>
            </svg>
              </a>

          </div>
        </div>

        {/* MAPA */}
        <iframe
          title="Mapa SPEED LAN"
          src="https://www.google.com/maps?q=23585430&output=embed"
          className="w-full h-80 rounded-xl shadow-xl"
          loading="lazy"
        />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#002F73] via-[#003A8F] to-orange-600 text-white text-center py-6">
        © 2026 Speed Lan House: Todos os direitos reservados.
      </footer>

<a
  href={`https://wa.me/5521992013095?text=${criarMensagemOrcamento()}`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 group z-50"
>
  {/* Tooltip */}
  <span className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-white text-gray-800 text-sm px-3 py-1.5 rounded-md shadow-md whitespace-nowrap">
    Em que posso ajudar?
  </span>

  {/* Botão animado */}
  <div className="w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-full hover:scale-110 transition shadow-lg animate-whatsapp-glow animate-whatsapp-float">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-6 h-6 fill-white"
    >
      <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.828.92 5.437 2.477 7.555L3 29l5.62-2.42A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5a10.42 10.42 0 01-5.305-1.45l-.38-.22-3.335 1.437.71-3.25-.245-.39A10.42 10.42 0 015.5 16c0-5.79 4.71-10.5 10.5-10.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5zm5.756-7.682c-.314-.157-1.86-.918-2.148-1.023-.288-.105-.497-.157-.707.157-.21.314-.812 1.023-.995 1.233-.183.21-.366.236-.68.078-.314-.157-1.325-.488-2.524-1.556-.932-.83-1.56-1.856-1.743-2.17-.183-.314-.02-.483.138-.64.142-.141.314-.366.471-.55.157-.183.21-.314.314-.523.105-.21.052-.393-.026-.55-.078-.157-.707-1.705-.969-2.34-.255-.612-.515-.53-.707-.54l-.602-.01c-.21 0-.55.078-.838.393s-1.1 1.076-1.1 2.625c0 1.55 1.126 3.05 1.283 3.26.157.21 2.217 3.387 5.374 4.748.75.324 1.335.518 1.79.663.752.24 1.437.206 1.978.125.603-.09 1.86-.76 2.123-1.495.262-.734.262-1.364.183-1.495-.078-.13-.288-.21-.602-.367z"/>
    </svg>
  </div>
</a>
      
    </div>
    
  );
}