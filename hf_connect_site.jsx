import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Camera,
  Satellite,
  Network,
  ShieldCheck,
  Cable,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Router,
  Wrench,
  Server,
  HouseWifi,
  Building2,
  Tractor,
  Clock3,
  MessageCircle,
  Sparkles,
  RadioTower,
  LockKeyhole,
  Gauge,
  ClipboardCheck,
  ChevronRight,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const whatsappNumber = "5534999999999"; // Troque pelo número real da HF Connect. Exemplo: 5534991234567
const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da HF Connect e quero solicitar um orçamento."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const services = [
  {
    icon: Cable,
    title: "Fibra Óptica",
    description:
      "Fusão, conectorização, testes, passagem de cabo, organização de caixas e manutenção de enlaces ópticos.",
    points: ["Fusão de fibra", "Power meter", "Organização de rede"],
  },
  {
    icon: Camera,
    title: "Câmeras e CFTV",
    description:
      "Projetos com câmeras Intelbras e similares, DVR/NVR, acesso remoto, cabeamento e posicionamento inteligente.",
    points: ["Acesso pelo celular", "CFTV residencial", "CFTV empresarial"],
  },
  {
    icon: Satellite,
    title: "Starlink",
    description:
      "Instalação, melhor posicionamento, organização da rede, Wi‑Fi, roteadores e integração com câmeras.",
    points: ["Casa e fazenda", "Rede estável", "Melhor cobertura"],
  },
  {
    icon: Wifi,
    title: "Wi‑Fi Profissional",
    description:
      "Melhoria de sinal, pontos de acesso, roteadores, repetidores, redes mesh e eliminação de áreas sem cobertura.",
    points: ["Análise de sinal", "Cobertura total", "Rede separada para visitas"],
  },
  {
    icon: Network,
    title: "Redes Cabeadas",
    description:
      "Cabeamento estruturado, racks, switches, patch panels, identificação dos pontos e organização técnica.",
    points: ["Pontos de rede", "Rack organizado", "Switches e roteadores"],
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    description:
      "Diagnóstico de falhas, manutenção preventiva, configuração de equipamentos e orientação para expansão futura.",
    points: ["Diagnóstico rápido", "Correção de falhas", "Manutenção preventiva"],
  },
];

const segments = [
  {
    icon: HouseWifi,
    title: "Residências",
    text: "Internet forte nos cômodos, câmeras no celular e rede organizada para o dia a dia.",
  },
  {
    icon: Building2,
    title: "Empresas",
    text: "Estrutura confiável para atendimento, câmeras, computadores, impressoras e sistemas.",
  },
  {
    icon: Tractor,
    title: "Fazendas e sítios",
    text: "Starlink, câmeras, Wi‑Fi externo e soluções para monitoramento remoto da propriedade.",
  },
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
  {
    number: "01",
    title: "Entendimento da necessidade",
    text: "Você explica o problema ou objetivo: melhorar internet, instalar câmeras, configurar Starlink ou montar uma rede.",
  },
  {
    number: "02",
    title: "Avaliação técnica",
    text: "Análise do ambiente, pontos de instalação, cabeamento, sinal, equipamentos existentes e melhor solução.",
  },
  {
    number: "03",
    title: "Instalação organizada",
    text: "Execução com cuidado no acabamento, identificação, configuração e testes de funcionamento.",
  },
  {
    number: "04",
    title: "Entrega e orientação",
    text: "Você recebe tudo funcionando e entende como acessar, usar e cuidar da estrutura instalada.",
  },
];

const stats = [
  { label: "Soluções", value: "360°", text: "rede, internet e segurança" },
  { label: "Atendimento", value: "Rural", text: "casas, empresas e fazendas" },
  { label: "Foco", value: "Pro", text: "organização e estabilidade" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HFConnectSite() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(125,211,252,0.15),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.12),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <header className="sticky top-0 z-50 border-b border-sky-200/10 bg-[#07111f]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#topo" className="group flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400 text-slate-950 shadow-lg shadow-sky-400/25 transition group-hover:scale-105">
              <Network className="h-7 w-7" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(125,211,252,1)]" />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">HF Connect</p>
              <p className="text-xs font-medium text-sky-200/75">Fibra • Câmeras • Starlink • Wi‑Fi</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
            <a href="#servicos" className="hover:text-sky-200">Serviços</a>
            <a href="#solucoes" className="hover:text-sky-200">Soluções</a>
            <a href="#processo" className="hover:text-sky-200">Como funciona</a>
            <a href="#contato" className="hover:text-sky-200">Contato</a>
          </nav>

          <Button asChild className="rounded-2xl bg-sky-400 font-bold text-slate-950 shadow-lg shadow-sky-400/20 hover:bg-sky-300">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Orçamento
            </a>
          </Button>
        </div>
      </header>

      <main id="topo" className="relative z-10">
        <section className="relative px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100 shadow-lg shadow-sky-950/20">
                <Sparkles className="h-4 w-4 text-sky-300" />
                Infraestrutura inteligente para internet, rede e segurança
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Conexão forte, câmeras seguras e rede bem feita.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                A <strong className="text-sky-200">HF Connect</strong> cuida da sua infraestrutura de ponta a ponta: fibra óptica, Starlink, Wi‑Fi, redes cabeadas e CFTV para casas, empresas e propriedades rurais.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-2xl bg-sky-400 px-8 text-base font-black text-slate-950 shadow-xl shadow-sky-400/20 hover:bg-sky-300">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Solicitar orçamento <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 rounded-2xl border-sky-200/20 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10">
                  <a href="#servicos">Conhecer serviços</a>
                </Button>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                    <p className="text-2xl font-black text-sky-200">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
              <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-cyan-200/10 blur-3xl" />

              <div className="relative rounded-[2.2rem] border border-sky-200/15 bg-slate-900/60 p-4 shadow-2xl shadow-sky-950/60 backdrop-blur-xl">
                <div className="rounded-[1.8rem] border border-white/10 bg-[#081827] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Painel HF Connect</p>
                      <p className="text-xl font-black">Diagnóstico da estrutura</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-400/10 px-3 py-2 text-sm font-bold text-emerald-300">Online</div>
                  </div>

                  <div className="grid gap-4">
                    <TechPanelCard
                      icon={Satellite}
                      title="Starlink"
                      value="Especialidade"
                      text="Instalação, configuração e otimização para máxima performance em casas, empresas e propriedades rurais."
                      points={["Alinhamento preciso", "Rede otimizada", "Ideal para zona rural"]}
                    />
                    <TechPanelCard
                      icon={Camera}
                      title="Câmeras"
                      value="Destaque"
                      text="Monitoramento com acesso remoto, gravação segura e visão estratégica dos pontos mais importantes."
                      points={["Alta definição", "Visão noturna", "Acesso pelo celular"]}
                    />
                    <TechPanelCard
                      icon={Tractor}
                      title="Zona Rural"
                      value="Foco"
                      text="Conectividade para fazendas, sítios e chácaras com soluções robustas para vencer distância e instabilidade."
                      points={["Longo alcance", "Estabilidade", "Ideal para o campo"]}
                    />
                  </div>

                  <div className="mt-5 rounded-3xl border border-sky-200/10 bg-sky-300/10 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-sky-300 text-slate-950">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-black text-sky-100">Instalação preparada para o uso real</p>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          Menos improviso, mais estabilidade, segurança e facilidade para manutenção futura.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Serviços"
            title="Soluções técnicas para conectar, proteger e organizar"
            description="Da instalação simples à estrutura completa, a HF Connect entrega uma solução pensada para estabilidade, segurança e facilidade de uso."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="group h-full overflow-hidden rounded-[2rem] border-sky-200/10 bg-white/[0.045] text-white shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.07]">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300/12 text-sky-300 ring-1 ring-sky-200/10 transition group-hover:bg-sky-300 group-hover:text-slate-950">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-300" />
                    </div>
                    <h3 className="text-2xl font-black">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span key={point} className="rounded-full border border-sky-200/10 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-100">
                          {point}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="solucoes" className="border-y border-white/10 bg-white/[0.035] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Onde atuamos"
              title="Atendimento para casa, empresa e campo"
              description="A estrutura muda conforme o ambiente. Por isso, a solução precisa ser planejada de acordo com o uso, distância, equipamentos e necessidade de segurança."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {segments.map((segment) => (
                <div key={segment.title} className="rounded-[2rem] border border-white/10 bg-[#07111f]/70 p-7 shadow-xl shadow-black/20">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300 text-slate-950">
                    <segment.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black">{segment.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{segment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-sky-300">Diferenciais</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Não é só instalar. É deixar funcionando bem.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Uma rede ruim costuma falhar no pior momento. A HF Connect prioriza organização, testes, configuração correta e orientação para você usar tudo com confiança.
            </p>
            <div className="mt-8 rounded-[2rem] border border-sky-200/10 bg-sky-300/10 p-6">
              <div className="flex gap-4">
                <LockKeyhole className="h-7 w-7 flex-none text-sky-300" />
                <div>
                  <p className="font-black text-sky-100">Mais segurança e menos dor de cabeça</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Câmeras, internet, Wi‑Fi e rede trabalhando juntos, com configuração mais limpa e fácil de manter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-sky-300" />
                <span className="leading-7 text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="processo" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Como funciona"
            title="Do orçamento à entrega, com clareza"
            description="Um fluxo simples para entender sua necessidade, propor a solução certa e entregar a estrutura funcionando."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {process.map((step) => (
              <div key={step.number} className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20">
                <p className="text-5xl font-black text-sky-300/25">{step.number}</p>
                <h3 className="mt-4 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-sky-200/15 bg-gradient-to-br from-sky-300 via-sky-400 to-cyan-300 p-1 shadow-2xl shadow-sky-950/50">
            <div className="rounded-[2.3rem] bg-[#07111f] p-8 sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-300/10 px-4 py-2 text-sm font-bold text-sky-100 ring-1 ring-sky-200/15">
                    <ClipboardCheck className="h-4 w-4" /> Orçamento personalizado
                  </div>
                  <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                    Quer melhorar sua internet, instalar câmeras ou organizar sua rede?
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    Envie uma mensagem contando o que precisa. A HF Connect te orienta no melhor caminho para sua casa, empresa ou fazenda.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-950/80 p-4">
                    <MessageCircle className="h-6 w-6 text-sky-300" />
                    <div>
                      <p className="font-black">Atendimento via WhatsApp</p>
                      <p className="text-sm text-slate-400">Rápido, prático e direto ao ponto</p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="mt-5 h-14 w-full rounded-2xl bg-sky-300 text-base font-black text-slate-950 hover:bg-sky-200">
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Chamar agora <Phone className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                    <MapPin className="h-4 w-4 text-sky-300" /> Patos de Minas e região
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                    <Clock3 className="h-4 w-4 text-sky-300" /> Atendimento com agendamento
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="relative z-10 border-t border-white/10 bg-[#050b14] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-300 text-slate-950">
                <Network className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-black">HF Connect</p>
                <p className="text-sm text-slate-400">Tecnologia que conecta você</p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Fibra óptica, câmeras, Starlink, Wi‑Fi e infraestrutura de redes para residências, empresas e propriedades rurais.
            </p>
          </div>

          <div>
            <p className="font-black text-white">Serviços</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              <a href="#servicos" className="hover:text-sky-200">Fibra óptica</a>
              <a href="#servicos" className="hover:text-sky-200">Câmeras de segurança</a>
              <a href="#servicos" className="hover:text-sky-200">Starlink e Wi‑Fi</a>
              <a href="#servicos" className="hover:text-sky-200">Redes e suporte técnico</a>
            </div>
          </div>

          <div>
            <p className="font-black text-white">Contato</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-sky-200">WhatsApp: inserir número</a>
              <span>Patos de Minas e região</span>
              <span>© {new Date().getFullYear()} HF Connect</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-sky-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  );
}

function TechPanelCard({ icon: Icon, title, value, text, points = [] }) {
  return (
    <div className="rounded-3xl border border-sky-200/10 bg-white/[0.045] p-5 transition hover:border-sky-300/25 hover:bg-sky-300/[0.07]">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-sky-300/12 text-sky-300 ring-1 ring-sky-200/10">
          <Icon className="h-7 w-7" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-black">{title}</h3>
            <span className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-black text-sky-200">{value}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
          {points.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {points.map((point) => (
                <span key={point} className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/10 bg-slate-950/40 px-3 py-1 text-[11px] font-bold text-sky-100">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-300" />
                  {point}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
