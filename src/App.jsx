import { useState } from "react";
import {
  MessageCircle,
  Package,
  CreditCard,
  MapPin,
  BarChart3,
  Clock,
  Check,
  Menu,
  Loader2,
  Instagram,
} from "lucide-react";
import { Button } from "./components/ui/button.jsx";
import { Card } from "./components/ui/card.jsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion.jsx";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./components/ui/sheet.jsx";
import { useWhatsAppRedirect } from "./lib/use-whatsapp-redirect.js";

const WHATSAPP_LINK = "https://wa.me/5490000000000";
const DEMO_CATALOG_URL = "https://plexipedidos.onrender.com/index.html?cliente=verduleria01";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
  { href: "#preguntas", label: "Preguntas frecuentes" },
];

function WhatsAppButton({ children, className, ...props }) {
  const { open, loading } = useWhatsAppRedirect(WHATSAPP_LINK);
  return (
    <Button
      className={className}
      disabled={loading}
      onClick={open}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />}
      {children}
    </Button>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight">
          Plexi <span className="text-teal">Pedidos</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/70">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <WhatsAppButton size="sm">Empezar</WhatsAppButton>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </SheetTrigger>
          <SheetContent>
            <p className="font-display font-semibold text-lg tracking-tight">
              Plexi <span className="text-teal">Pedidos</span>
            </p>
            <nav className="flex flex-col gap-1 text-base text-ink/80">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <WhatsAppButton className="mt-auto w-full">Empezar</WhatsAppButton>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function HeroGif() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="aspect-[4/3] w-full rounded-2xl border border-line bg-surface flex flex-col items-center justify-center gap-2 text-ink/40">
        <Package className="h-8 w-8" strokeWidth={1.5} />
        <span className="font-mono text-xs uppercase tracking-wide">GIF demo</span>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-gold text-ink text-xs font-display font-semibold px-3 py-2 rounded-full rotate-3">
        Así se ve en acción
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20 grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
      <div>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1] text-ink">
          Tu catálogo. Sus pedidos.
          <br />
          <span className="font-accent italic font-normal text-teal">
            Un solo WhatsApp ordenado.
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-ink/70 max-w-md">
          Plexi Pedidos convierte tu catálogo en un link que tus clientes recorren
          solos. El pedido te llega armado, con productos, dirección y forma de
          pago — listo para preparar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppButton size="lg">Armar mi catálogo</WhatsAppButton>
          <Button size="lg" variant="outline">
            Ver un pedido de ejemplo
          </Button>
        </div>
        <p className="mt-6 text-sm text-ink/50">
          Sin comisión por venta. 14 días para probarlo.
        </p>
      </div>
      <HeroGif />
    </section>
  );
}

const BRANDS = ["Almacén Norte", "La Empanadería", "Dietética Vital", "Kiosco 24h", "Modas Ana"];

function Brands() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
        <p className="text-center text-xs font-mono uppercase tracking-wide text-ink/40">
          Negocios que ya venden con Plexi Pedidos
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="font-display font-medium text-lg text-ink/30"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl">
          Así ve tu catálogo cada cliente
        </h2>
        <p className="mt-3 text-ink/60">
          Una web simple, rápida y pensada para que elijan sin fricción desde
          el celular.
        </p>
      </div>
      <div className="mt-10 sm:mt-12 mx-auto max-w-3xl">
        <div className="rounded-2xl border border-line bg-white shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-3 font-mono text-xs text-ink/40 bg-paper border border-line rounded-full px-3 py-1 truncate">
              verduleria01.plexipedidos.com
            </span>
          </div>
          <div className="aspect-[9/14] sm:aspect-video w-full bg-surface">
            <iframe
              src={DEMO_CATALOG_URL}
              title="Catálogo de ejemplo — Plexi Pedidos"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl">
            Un pedido por WhatsApp normal
          </h2>
          <div className="mt-6 space-y-3 font-mono text-sm text-paper/70">
            <p>"hola tenian empanadas de carne"</p>
            <p>"si tambien humita cuantas queres"</p>
            <p>"y la direccion me la pasas"</p>
            <p>"transferencia va bien?"</p>
          </div>
          <p className="mt-6 text-paper/60 text-sm">
            Cinco mensajes para armar un pedido de tres productos. Multiplicado
            por cada cliente, cada día.
          </p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl">
            Un pedido con Plexi Pedidos
          </h2>
          <div className="mt-6 border border-paper/20 rounded-2xl p-5 font-mono text-sm text-paper/80 space-y-1.5">
            <p>2× Empanadas de carne</p>
            <p>1× Empanadas de humita</p>
            <p className="pt-2 border-t border-dashed border-paper/20">Av. Colón 1420 · Transferencia</p>
          </div>
          <p className="mt-6 text-paper/60 text-sm">
            Un solo mensaje, ya armado, con todo lo que necesitás para preparar
            y entregar.
          </p>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Pedidos organizados por WhatsApp",
    text: "Cada compra llega como un mensaje ordenado: productos, cantidades, dirección y forma de pago, sin ida y vuelta.",
  },
  {
    icon: Package,
    title: "Catálogo con stock real",
    text: "Subís fotos y precios una vez. El sistema oculta lo agotado y actualiza el stock con cada venta.",
  },
  {
    icon: CreditCard,
    title: "Pagos como vos definas",
    text: "Transferencia, efectivo, cuotas o pasarela online. Vos elegís qué métodos ofrecer y con qué recargo.",
  },
  {
    icon: MapPin,
    title: "Entrega con dirección exacta",
    text: "Geolocalización integrada para que la dirección del pedido llegue precisa, sin explicaciones por chat.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas simples",
    text: "Cuántos pedidos, cuánto facturaste y qué se vende más, sin planillas armadas a mano.",
  },
  {
    icon: Clock,
    title: "Horarios de atención",
    text: "Tu catálogo muestra cuándo estás abierto, así nadie hace un pedido fuera de horario.",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
      <div className="max-w-lg">
        <h2 className="font-display font-semibold text-3xl">
          Lo que necesita un negocio que vende por WhatsApp
        </h2>
        <p className="mt-3 text-ink/60">
          Sin funciones de más. Cada herramienta resuelve un problema concreto
          de vender por mensajería.
        </p>
      </div>
      <div className="mt-10 sm:mt-12 divide-y divide-line border-t border-b border-line">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="py-6 grid sm:grid-cols-[auto_1fr] gap-4 sm:gap-8 items-start transition-colors hover:bg-surface/60 -mx-5 sm:-mx-8 px-5 sm:px-8 rounded-lg"
          >
            <Icon className="h-5 w-5 text-teal mt-1 shrink-0" strokeWidth={1.75} />
            <div>
              <h3 className="font-display font-medium text-lg">{title}</h3>
              <p className="mt-1 text-ink/60 text-[15px] max-w-xl">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "1",
    title: "Subís tu catálogo",
    text: "Cargás productos con fotos, precios y variantes desde el celular. Sin conocimientos técnicos.",
  },
  {
    n: "2",
    title: "Compartís tu link",
    text: "Lo pegás en tu WhatsApp, Instagram o Google Maps. Tus clientes lo abren sin instalar nada.",
  },
  {
    n: "3",
    title: "Recibís el pedido armado",
    text: "Te llega por WhatsApp con todo el detalle, listo para preparar y entregar.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <h2 className="font-display font-semibold text-3xl max-w-lg">
          Cómo funciona
        </h2>
        <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.n}>
              <span className="font-mono text-sm text-teal">{step.n}</span>
              <h3 className="mt-2 font-display font-medium text-xl">{step.title}</h3>
              <p className="mt-2 text-ink/60 text-[15px]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "Arranque",
    price: "25.000",
    tagline: "Para ordenar tus primeras ventas por WhatsApp",
    features: [
      "Catálogo digital ilimitado",
      "Pedidos organizados por WhatsApp",
      "Control de stock básico",
      "1 imagen por producto",
    ],
  },
  {
    name: "Impulso",
    price: "50.000",
    tagline: "Para negocios con ventas estables que quieren crecer",
    featured: true,
    features: [
      "Todo lo de Arranque",
      "Hasta 3 imágenes por producto",
      "Cupones de descuento",
      "Categorías dinámicas",
      "Google Analytics",
    ],
  },
  {
    name: "Escala",
    price: "75.000",
    tagline: "Para operar a mayor volumen con datos y equipo",
    features: [
      "Todo lo de Impulso",
      "Punto de venta presencial",
      "Edición masiva de catálogo",
      "Gestión de usuarios y roles",
      "Estadísticas avanzadas",
    ],
  },
];

function Pricing() {
  return (
    <section id="planes" className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
      <div className="max-w-lg">
        <h2 className="font-display font-semibold text-3xl">Elegí tu plan</h2>
        <p className="mt-3 text-ink/60">
          14 días gratis para probarlo. Cambiás o cancelás cuando quieras.
        </p>
      </div>
      <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.featured
                ? "p-7 border-teal ring-1 ring-teal relative"
                : "p-7"
            }
          >
            {plan.featured && (
              <span className="absolute -top-3 left-7 bg-teal text-paper text-xs font-display font-medium px-3 py-1 rounded-full">
                El más elegido
              </span>
            )}
            <h3 className="font-display font-semibold text-xl">{plan.name}</h3>
            <p className="mt-1 text-ink/60 text-sm h-10">{plan.tagline}</p>
            <p className="mt-4 font-mono text-3xl">
              ${plan.price}<span className="text-base text-ink/50">/mes</span>
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-ink/75">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="h-[18px] w-[18px] text-teal shrink-0 mt-0.5" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              className="mt-7 w-full"
              variant={plan.featured ? "primary" : "outline"}
            >
              Elegir {plan.name}
            </WhatsAppButton>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink/40">
        Precios de referencia en pesos argentinos — a confirmar con Uziel antes de publicar.
      </p>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-teal text-paper">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20 text-center">
        <p className="font-display text-2xl sm:text-3xl leading-snug">
          "Antes anotaba los pedidos en un cuaderno. Ahora me llegan armados y
          se lo que tengo que preparar apenas abro WhatsApp."
        </p>
        <p className="mt-6 text-paper/70 text-sm">
          Testimonio de ejemplo — reemplazar por un cliente real antes de publicar.
        </p>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "¿Necesito saber de tecnología para usarlo?",
    a: "No. Armás y actualizás tu catálogo desde el celular: fotos, precios, stock y horarios. Compartís el link por WhatsApp o redes y listo.",
  },
  {
    q: "¿Cobran comisión por cada venta?",
    a: "No. Pagás un plan mensual fijo, sin porcentaje sobre lo que vendas ni límite de pedidos.",
  },
  {
    q: "¿Puedo usar mi WhatsApp personal o el de mi negocio?",
    a: "Sí, los pedidos llegan al número que configures, sea tu WhatsApp actual o uno nuevo para el negocio.",
  },
  {
    q: "¿Cuánto tardo en tener mi catálogo listo?",
    a: "Depende de cuántos productos cargues, pero la mayoría arma un catálogo básico en menos de una tarde.",
  },
  {
    q: "¿Qué pasa si mi negocio no es de comida?",
    a: "Funciona para cualquier rubro que venda productos por catálogo: indumentaria, dietética, tecnología, regalos y más.",
  },
];

function FAQ() {
  return (
    <section id="preguntas" className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-20">
      <h2 className="font-display font-semibold text-3xl">Preguntas frecuentes</h2>
      <Accordion type="single" collapsible defaultValue="item-0" className="mt-10 border-t border-line">
        {FAQS.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function CTAFooter() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 text-center">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-xl mx-auto">
          Empezá a ordenar tus pedidos por WhatsApp
        </h2>
        <p className="mt-4 text-paper/60 max-w-md mx-auto">
          14 días gratis. Sin tarjeta para probar, sin permanencia.
        </p>
        <WhatsAppButton size="lg" variant="gold" className="mt-8">
          Armar mi catálogo
        </WhatsAppButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-ink/50">
      <div>
        <p className="font-display font-semibold text-ink">Plexi Pedidos</p>
        <p className="mt-1">Un producto de PlexiWeb Development · Córdoba, Argentina</p>
      </div>
      <div className="flex items-center gap-5">
        <a href="#como-funciona" className="hover:text-ink transition-colors">Cómo funciona</a>
        <a href="#planes" className="hover:text-ink transition-colors">Planes</a>
        <a href="#preguntas" className="hover:text-ink transition-colors">Preguntas</a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-sm"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.75} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Brands />
      <WebPreview />
      <Problem />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <FAQ />
      <CTAFooter />
      <Footer />
    </div>
  );
}
