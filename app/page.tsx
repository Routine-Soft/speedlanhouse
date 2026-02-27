'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="min-h-screen w-full font-sans bg-white">

      {/* HERO */}
      <section className="relative w-full bg-gradient-to-r from-purple-700 via-purple-600 to-orange-500 text-white">

        {/* NAVBAR */}
        <header className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <Image
                src="/img/logo.png"
                alt="SpeedLan House"
                width={100}
                height={70}
              />
              <div className="text-2xl font-bold tracking-wide">
                SPEEDLAN <span className="text-orange-300">HOUSE</span>
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
              <Link href="#" className="hover:text-orange-300 transition">Início</Link>
              <Link href="#" className="hover:text-orange-300 transition">Serviços</Link>
              <Link href="#" className="hover:text-orange-300 transition">Contato</Link>
              <a 
                href="https://wa.me/5521992013095?text=Eu%20quero%20contratar%20um%20servi%C3%A7o."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-900 hover:bg-indigo-800 px-5 py-2 rounded-lg shadow-md transition"
              >
                Solicite seu orçamento
              </a>
            </nav>
          </div>

          {/* MENU MOBILE */}
          {menuOpen && (
            <nav className="md:hidden mt-6 flex flex-col gap-4 text-lg bg-white text-indigo-800 p-6 rounded-xl shadow-lg">
              <Link href="#" onClick={() => setMenuOpen(false)}>Início</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Serviços</Link>
              <Link href="#" onClick={() => setMenuOpen(false)}>Contato</Link>

              <a 
                href="https://wa.me/5521992013095?text=Eu%20quero%20contratar%20um%20servi%C3%A7o."
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
            Central de Serviços SpeedLan House
          </h1>
          <p className="text-1xl md:text-xl mb-2">
            Somos uma empresa especializada em serviços essenciais para o dia a dia, há mais de 10 anos transformando burocracia em soluções rápidas, seguras e eficientes. Construímos nossa autoridade com o compromisso de resolver tudo em um único lugar como xerox, impressão, consultas completas, agendamentos, 2º via de documentos, currículos profissionais e serviços digitais. Entre em contato com nossa equipe que nós transformaremos seu problema em solução!
          </p>
          <p className="italic text-1xl md:text-xl mb-8">
            Consultas, agendamentos, impressões e muito mais.
          </p>

        <a
          href="https://wa.me/5521992013095?text=Eu%20quero%20contratar%20um%20servi%C3%A7o."
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

          Chamar no WhatsApp
        </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-indigo-800 text-white py-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-8 text-center font-medium">
          <div>✔ Atendimento rápido</div>
          <div>✔ Serviços essenciais</div>
          <div>✔ Contato no WhatsApp</div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-12 text-indigo-800">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
      {[
        {
          title: 'Consulta SPC / Serasa',
          desc: 'Verificação de crédito.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          ),
        },
        {
          title: 'Agendamentos',
          desc: 'INSS, Detran, e outros.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          ),
        },
        {
          title: 'Digitação de Documentos',
          desc: 'Contratos, declarações...',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M4 3h12l4 4v14H4z" />
              <polyline points="14 3 14 7 18 7" />
              <line x1="8" y1="13" x2="16" y2="13" />
              <line x1="8" y1="17" x2="13" y2="17" />
            </svg>
          ),
        },
        {
          title: 'Currículos Profissionais',
          desc: 'Elaboração e formatação.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M6 2h9l5 5v15H6z" />
              <polyline points="14 2 14 7 19 7" />
            </svg>
          ),
        },
                {
          title: 'Currículos Profissionais',
          desc: 'Elaboração e formatação.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M6 2h9l5 5v15H6z" />
              <polyline points="14 2 14 7 19 7" />
            </svg>
          ),
        },
      ].map((service, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
        >
          <div className="flex justify-center mb-4">
            {service.icon}
          </div>

          <h3 className="font-semibold text-lg mb-2 text-indigo-800">
            {service.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* CONTATO */}
       <section className=" items-center bg-gradient-to-r from-purple-700 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* INFO */}
          <div className="items-center">
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
              Fale Conosco Agora!
            </h3>

            <p className="mb-3 font-semibold">
              WhatsApp: (21) 99201-3095
            </p>

            <ul className="space-y-3 text-sm">
              {[
                "Estrada Santa Eugênia 1715",
                "Rua Apurana N 16 Loja 1A",
                "Rua M, Lote 23 Quadra 07 - Pitscos",
                "Rua Georgina da Silva N23 - Cesarinho - Paciência",
              ].map((address, i) => (
                <li key={i} className="flex items-start gap-2">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/>
                  </svg>

                  <span>{address}</span>
                </li>
              ))}
            </ul>

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
          <div className="rounded-xl overflow-hidden shadow-lg h-72">
            <iframe
              src="https://www.google.com/maps?q=23585430&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        © 2026 Speed Lan House. Todos os direitos reservados.
      </footer>

    </main>
  )
}