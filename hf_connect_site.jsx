import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const whatsappNumber = "5534999999999";
const whatsappMessage = encodeURIComponent("Olá! Vim pelo site da HF Connect e quero solicitar um orçamento.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const services = [
  {
    emoji: "🔵",
    title: "Fibra Óptica",
    description: "Fusão, conectorização, testes, passagem de cabo, organização de caixas e manutenção de enlaces ópticos.",
    points: ["Fusão de fibra", "Power meter", "Organização de rede"],
  },
  {
    emoji: "📷",
    title: "Câmeras e CFTV",
    description: "Projetos com câmeras Intelbras e similares, DVR/NVR, acesso remoto, cabeamento e posicionamento inteligente.",
    points: ["Acesso pelo celular", "CFTV residencial", "CFTV empresarial"],
  },
  {
    emoji: "🛰️",
    title: "Starlink",
    description: "Instalação, melhor posicionamento, organização da rede, Wi‑Fi, roteadores e integração com câmeras.",
    points: ["Casa e fazenda", "Rede estável", "Melhor cobertura"],
  },
  {
    emoji: "📶",
    title: "Wi‑Fi Profissional",
    description: "Melhoria de sinal, pontos de acesso, roteadores, repetidores, redes mesh e eliminação de áreas sem cobertura.",
    points: ["Análise de sinal", "Cobertura total", "Rede para visitas"],
  },
  {
    emoji: "🔗",
    title: "Redes Cabeadas",
    description: "Cabeamento estruturado, racks, switches, patch panels, identificação dos pontos e organização técnica.",
    points: ["Pontos de rede", "Rack organizado", "Switches e roteadores"],
  },
  {
    emoji: "🔧",
    title: "Suporte Técnico",
    description: "Diagnóstico de falhas, manutenção preventiva, configuração de equipamentos e orientação para expansão futura.",
    points: ["Diagnóstico rápido", "Correção de falhas", "Manutenção preventiva"],
  },
];

const segments = [
  { emoji: "🏠", title: "Residências", text: "Internet forte nos cômodos, câmeras no celular e rede organizada para o dia a dia." },
  { emoji: "🏢", title: "Empresas", text: "Estrutura confiável para atendimento, câmeras, computadores, impressoras e sistemas." },
  { emoji: "🚜", title: "Fazendas e sítios", text: "Starlink, câmeras, Wi‑Fi externo e soluções para monitoramento remoto da propriedade." },
];

const benefits = [
  "Atendimento técnico, direto e transparente",
  "Instalação limpa, organizada e pensada para manutenção",
  "Soluções para residência, empresa e área rural",
  "Configuração de acesso remoto em câmeras e equipamentos",
  "Rede preparada para expansão futura",
  "Foco em estabilidade, segurança e bom acabamento",
];

const process = [
  { number: "01", title: "Entendimento da necessidade", text: "Você explica o problema ou objetivo: melhorar internet, instalar câmeras, configurar Starlink ou montar uma rede." },
  { number: "02", title: "Avaliação técnica", text: "Análise do ambiente, pontos de instalação, cabeamento, sinal, equipamentos existentes e melhor solução." },
  { number: "03", title: "Instalação organizada", text: "Execução com cuidado no acabamento, identificação, configuração e testes de funcionamento." },
  { number: "04", title: "Entrega e orientação", text: "Você recebe tudo funcionando e entende como acessar, usar e cuidar da estrutura instalada." },
];

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
    }}>
      {children}
    </div>
  );
}

export default function HFConnectSite() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#07111f", color: "#fff", fontFamily: "'Segoe UI', system-ui, sans-serif", overflowX: "hidden" }}>
      {/* Background effects */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(circle at 20% 10%, rgba(56,189,248,0.18) 0%, transparent 28%), radial-gradient(circle at 80% 0%, rgba(125,211,252,0.15) 0%, transparent 24%), radial-gradient(circle at 50% 100%, rgba(14,165,233,0.12) 0%, transparent 32%)" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "64px 64px", maskImage: "linear-gradient(to bottom, black, transparent 80%)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent 80%)" }} />

      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(186,230,253,0.1)",
        background: scrolled ? "rgba(7,17,31,0.92)" : "rgba(7,17,31,0.75)",
        backdropFilter: "blur(24px)",
        transition: "background 0.3s"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#topo" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#fff" }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, boxShadow: "0 0 24px rgba(56,189,248,0.35)" }}>
              🔗
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em" }}>HF Connect</div>
              <div style={{ fontSize: 11, color: "rgba(186,230,253,0.7)", fontWeight: 500 }}>Fibra • Câmeras • Starlink • Wi‑Fi</div>
            </div>
          </a>

          <nav style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500, color: "#94a3b8" }}>
            {["Serviços|#servicos","Soluções|#solucoes","Como funciona|#processo","Contato|#contato"].map(item => {
              const [label, href] = item.split("|");
              return <a key={label} href={href} style={{ color: "#94a3b8", textDecoration: "none" }} onMouseOver={e => e.target.style.color="#7dd3fc"} onMouseOut={e => e.target.style.color="#94a3b8"}>{label}</a>;
            })}
          </nav>

          <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ background: "#38bdf8", color: "#0f172a", fontWeight: 900, fontSize: 14, padding: "10px 22px", borderRadius: 14, textDecoration: "none", boxShadow: "0 4px 20px rgba(56,189,248,0.25)", transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background="#7dd3fc"} onMouseOut={e => e.currentTarget.style.background="#38bdf8"}>
            Orçamento
          </a>
        </div>
      </header>

      <main id="topo" style={{ position: "relative", zIndex: 10 }}>
        {/* Hero */}
        <section style={{ padding: "80px 24px 80px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ opacity: 1, transform: "none" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(125,211,252,0.2)", background: "rgba(125,211,252,0.1)", padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "#e0f2fe", marginBottom: 24 }}>
              ✨ Infraestrutura inteligente para internet, rede e segurança
            </div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.03em", marginBottom: 24 }}>
              Conexão forte, câmeras seguras e rede bem feita.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#94a3b8", maxWidth: 520, marginBottom: 32 }}>
              A <strong style={{ color: "#7dd3fc" }}>HF Connect</strong> cuida da sua infraestrutura de ponta a ponta: fibra óptica, Starlink, Wi‑Fi, redes cabeadas e CFTV para casas, empresas e propriedades rurais.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#38bdf8", color: "#0f172a", fontWeight: 900, fontSize: 16, padding: "16px 32px", borderRadius: 16, textDecoration: "none", boxShadow: "0 8px 32px rgba(56,189,248,0.25)" }}>
                Solicitar orçamento →
              </a>
              <a href="#servicos" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(125,211,252,0.2)", background: "rgba(255,255,255,0.05)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 32px", borderRadius: 16, textDecoration: "none" }}>
                Conhecer serviços
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 40, maxWidth: 480 }}>
              {[{value:"360°",label:"Soluções",text:"rede, internet e segurança"},{value:"Rural",label:"Atendimento",text:"casas, empresas e fazendas"},{value:"Pro",label:"Foco",text:"organização e estabilidade"}].map(s => (
                <div key={s.label} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: 16, backdropFilter: "blur(8px)" }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#7dd3fc" }}>{s.value}</div>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "#64748b", marginTop: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 8 }}>{s.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel card */}
          <div style={{ borderRadius: 36, border: "1px solid rgba(125,211,252,0.15)", background: "rgba(15,23,42,0.6)", padding: 4, boxShadow: "0 32px 80px rgba(0,0,0,0.5)", backdropFilter: "blur(24px)" }}>
            <div style={{ borderRadius: 32, border: "1px solid rgba(255,255,255,0.08)", background: "#081827", padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>Painel HF Connect</div>
                  <div style={{ fontSize: 20, fontWeight: 900 }}>Diagnóstico da estrutura</div>
                </div>
                <div style={{ background: "rgba(52,211,153,0.1)", color: "#6ee7b7", fontWeight: 700, fontSize: 13, padding: "8px 14px", borderRadius: 12 }}>● Online</div>
              </div>
              {[
                { emoji: "🛰️", title: "Starlink", badge: "Especialidade", text: "Instalação, configuração e otimização para máxima performance em casas, empresas e propriedades rurais.", points: ["Alinhamento preciso", "Rede otimizada", "Ideal para zona rural"] },
                { emoji: "📷", title: "Câmeras", badge: "Destaque", text: "Monitoramento com acesso remoto, gravação segura e visão estratégica dos pontos mais importantes.", points: ["Alta definição", "Visão noturna", "Acesso pelo celular"] },
                { emoji: "🚜", title: "Zona Rural", badge: "Foco", text: "Conectividade para fazendas, sítios e chácaras com soluções robustas para vencer distância e instabilidade.", points: ["Longo alcance", "Estabilidade", "Ideal para o campo"] },
              ].map(card => (
                <div key={card.title} style={{ borderRadius: 20, border: "1px solid rgba(125,211,252,0.1)", background: "rgba(255,255,255,0.04)", padding: 18, marginBottom: 12, transition: "border-color 0.2s" }}>
                  <div style={{ display: "flex", gap: 16 }}>
                    <div style={{ width: 52, height: 52, flexShrink: 0, borderRadius: 16, background: "rgba(56,189,248,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, border: "1px solid rgba(125,211,252,0.1)" }}>{card.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontWeight: 900, fontSize: 16 }}>{card.title}</span>
                        <span style={{ background: "rgba(56,189,248,0.1)", color: "#7dd3fc", fontSize: 11, fontWeight: 900, padding: "4px 10px", borderRadius: 999 }}>{card.badge}</span>
                      </div>
                      <p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6, marginBottom: 10 }}>{card.text}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {card.points.map(p => <span key={p} style={{ fontSize: 10, fontWeight: 700, color: "#7dd3fc", background: "rgba(15,23,42,0.6)", border: "1px solid rgba(125,211,252,0.15)", borderRadius: 999, padding: "3px 10px" }}>✓ {p}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ borderRadius: 20, border: "1px solid rgba(125,211,252,0.1)", background: "rgba(56,189,248,0.08)", padding: 20, marginTop: 4 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 14, background: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "#0f172a" }}>🛡️</div>
                  <div>
                    <div style={{ fontWeight: 900, color: "#e0f2fe", marginBottom: 4 }}>Instalação preparada para o uso real</div>
                    <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>Menos improviso, mais estabilidade, segurança e facilidade para manutenção futura.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <FadeUp>
            <div style={{ maxWidth: 640 }}>
              <div style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.28em", color: "#38bdf8", marginBottom: 12 }}>Serviços</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16 }}>Soluções técnicas para conectar, proteger e organizar</h2>
              <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.8 }}>Da instalação simples à estrutura completa, a HF Connect entrega uma solução pensada para estabilidade, segurança e facilidade de uso.</p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 0.05}>
                <div style={{ borderRadius: 28, border: "1px solid rgba(125,211,252,0.1)", background: "rgba(255,255,255,0.04)", padding: 24, height: "100%", backdropFilter: "blur(8px)", transition: "border-color 0.2s, background 0.2s, transform 0.2s", cursor: "default" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(125,211,252,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(125,211,252,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: "rgba(56,189,248,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, border: "1px solid rgba(125,211,252,0.1)" }}>{service.emoji}</div>
                    <span style={{ color: "#475569", fontSize: 18 }}>›</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>{service.title}</h3>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 16 }}>{service.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {service.points.map(p => <span key={p} style={{ borderRadius: 999, border: "1px solid rgba(125,211,252,0.15)", background: "rgba(56,189,248,0.08)", padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#7dd3fc" }}>{p}</span>)}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Segments */}
        <section id="solucoes" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <FadeUp>
              <div style={{ maxWidth: 640 }}>
                <div style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.28em", color: "#38bdf8", marginBottom: 12 }}>Onde atuamos</div>
                <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16 }}>Atendimento para casa, empresa e campo</h2>
                <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.8 }}>A estrutura muda conforme o ambiente. Por isso, a solução precisa ser planejada de acordo com o uso, distância, equipamentos e necessidade de segurança.</p>
              </div>
            </FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
              {segments.map((seg, i) => (
                <FadeUp key={seg.title} delay={i * 0.08}>
                  <div style={{ borderRadius: 28, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(7,17,31,0.7)", padding: 28 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 16, background: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20, color: "#0f172a" }}>{seg.emoji}</div>
                    <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>{seg.title}</h3>
                    <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7 }}>{seg.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "center" }}>
          <FadeUp>
            <div>
              <div style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.28em", color: "#38bdf8", marginBottom: 12 }}>Diferenciais</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 20 }}>Não é só instalar. É deixar funcionando bem.</h2>
              <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.8, marginBottom: 32 }}>Uma rede ruim costuma falhar no pior momento. A HF Connect prioriza organização, testes, configuração correta e orientação para você usar tudo com confiança.</p>
              <div style={{ borderRadius: 24, border: "1px solid rgba(125,211,252,0.12)", background: "rgba(56,189,248,0.07)", padding: 24 }}>
                <div style={{ display: "flex", gap: 16 }}>
                  <span style={{ fontSize: 28 }}>🔒</span>
                  <div>
                    <div style={{ fontWeight: 900, color: "#e0f2fe", marginBottom: 8 }}>Mais segurança e menos dor de cabeça</div>
                    <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>Câmeras, internet, Wi‑Fi e rede trabalhando juntos, com configuração mais limpa e fácil de manter.</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {benefits.map((b, i) => (
              <FadeUp key={b} delay={i * 0.05}>
                <div style={{ display: "flex", gap: 12, borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: 18, backdropFilter: "blur(8px)" }}>
                  <span style={{ color: "#38bdf8", flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.6 }}>{b}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="processo" style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px" }}>
          <FadeUp>
            <div style={{ maxWidth: 640 }}>
              <div style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.28em", color: "#38bdf8", marginBottom: 12 }}>Como funciona</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16 }}>Do orçamento à entrega, com clareza</h2>
              <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.8 }}>Um fluxo simples para entender sua necessidade, propor a solução certa e entregar a estrutura funcionando.</p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 48 }}>
            {process.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.07}>
                <div style={{ borderRadius: 28, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: 24 }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: "rgba(56,189,248,0.2)", marginBottom: 16 }}>{step.number}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 900, marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7 }}>{step.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", borderRadius: 40, border: "1px solid rgba(125,211,252,0.2)", background: "linear-gradient(135deg, #38bdf8, #0ea5e9, #67e8f9)", padding: 2, boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
            <div style={{ borderRadius: 38, background: "#07111f", padding: "64px 48px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 48, alignItems: "center" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(125,211,252,0.15)", borderRadius: 999, padding: "8px 16px", fontSize: 13, fontWeight: 700, color: "#e0f2fe", marginBottom: 24 }}>
                    📋 Orçamento personalizado
                  </div>
                  <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 20 }}>
                    Quer melhorar sua internet, instalar câmeras ou organizar sua rede?
                  </h2>
                  <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.8, maxWidth: 480 }}>
                    Envie uma mensagem contando o que precisa. A HF Connect te orienta no melhor caminho para sua casa, empresa ou fazenda.
                  </p>
                </div>
                <div style={{ borderRadius: 28, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(0,0,0,0.5)", borderRadius: 16, padding: 16, marginBottom: 20 }}>
                    <span style={{ fontSize: 24 }}>💬</span>
                    <div>
                      <div style={{ fontWeight: 900, fontSize: 15 }}>Atendimento via WhatsApp</div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>Rápido, prático e direto ao ponto</div>
                    </div>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#38bdf8", color: "#0f172a", fontWeight: 900, fontSize: 16, padding: "16px", borderRadius: 16, textDecoration: "none", width: "100%", boxSizing: "border-box" }}>
                    Chamar agora 📱
                  </a>
                  <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "#94a3b8" }}>
                    <span>📍 Patos de Minas e região</span>
                    <span>🕐 Atendimento com agendamento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.08)", background: "#050b14", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr 0.8fr", gap: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "#38bdf8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#0f172a" }}>🔗</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 900 }}>HF Connect</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>Tecnologia que conecta você</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8, maxWidth: 320 }}>
              Fibra óptica, câmeras, Starlink, Wi‑Fi e infraestrutura de redes para residências, empresas e propriedades rurais.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 900, marginBottom: 16 }}>Serviços</div>
            {["Fibra óptica","Câmeras de segurança","Starlink e Wi‑Fi","Redes e suporte técnico"].map(s => (
              <a key={s} href="#servicos" style={{ display: "block", fontSize: 13, color: "#64748b", textDecoration: "none", marginBottom: 10 }} onMouseOver={e => e.target.style.color="#7dd3fc"} onMouseOut={e => e.target.style.color="#64748b"}>{s}</a>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 900, marginBottom: 16 }}>Contato</div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ display: "block", fontSize: 13, color: "#64748b", textDecoration: "none", marginBottom: 10 }}>WhatsApp: inserir número</a>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 10 }}>Patos de Minas e região</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>© {new Date().getFullYear()} HF Connect</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
