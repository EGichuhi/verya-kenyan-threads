import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/verya-hero.jpg";
import textilesImage from "@/assets/verya-textiles.jpg";
import teamImage from "@/assets/verya-team.jpg";
import productionImage from "@/assets/verya-production.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VERYA | Custom Apparel, Made in Kenya" },
      { name: "description", content: "Bold custom tracksuits, T-shirts, uniforms, sportswear and knitwear for Kenyan schools, businesses, teams and events." },
      { property: "og:title", content: "VERYA | Made to Move. Made in Kenya." },
      { property: "og:description", content: "Custom apparel for schools, businesses, teams and events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  ["01", "School Tracksuits", "Our signature. Built for movement, belonging and everyday school life.", "bg-teal"],
  ["02", "Custom T-Shirts", "Colourful branded tees that put your identity front and centre.", "bg-orange"],
  ["03", "Business Wear", "Polished uniforms and branded apparel for teams that mean business.", "bg-gold"],
  ["04", "Sports & Events", "Performance-ready kits and event wear made to show up together.", "bg-plum text-cream"],
  ["05", "Knitwear & Uniforms", "Smart layers and dependable daily uniforms, tailored to your brief.", "bg-charcoal text-cream"],
];

const audiences = ["Schools", "Businesses", "Teams & Organizations", "Events"];
const reasons = ["Quality", "Custom Design", "Reliable Production", "Kenyan Roots", "Built to Scale"];
const process = ["Tell Us", "Design", "Approve", "Produce", "Deliver"];

function BrandMark({ light = false }: { light?: boolean }) {
  return <a href="#top" aria-label="VERYA home" className={`font-display text-3xl font-black ${light ? "text-cream" : "text-charcoal"}`}>VER<span className="text-orange">Y</span>A<span className="text-teal">.</span></a>;
}

function openWhatsApp(message: string) {
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function Index() {
  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello VERYA, I'd like a bulk order quote.",
      `Product: ${data.get("product")}`,
      `Quantity: ${data.get("quantity")}`,
      `Customization: ${data.get("customization")}`,
      `Sizes: ${data.get("sizes")}`,
      `Deadline: ${data.get("deadline")}`,
      `Name / Organization: ${data.get("name")}`,
    ].join("\n");
    openWhatsApp(message);
  };

  return (
    <main id="top" className="overflow-hidden bg-cream text-charcoal">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-cream/30">
        <div className="section-shell flex h-20 items-center justify-between">
          <BrandMark light />
          <nav className="hidden items-center gap-7 text-sm font-bold text-cream md:flex" aria-label="Main navigation">
            <a href="#products" className="hover:text-gold">What we make</a><a href="#story" className="hover:text-gold">Our story</a><a href="#quote" className="hover:text-gold">Get a quote</a>
          </nav>
          <Button variant="cream" asChild><a href="#quote">Request a Quote <ArrowDownRight /></a></Button>
        </div>
      </header>

      <section className="relative min-h-[760px] bg-charcoal lg:min-h-[820px]">
        <img src={heroImage} alt="Students wearing colourful custom school tracksuits" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover object-[63%_center] opacity-80" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="section-shell relative z-10 flex min-h-[760px] items-end pb-20 pt-32 lg:min-h-[820px] lg:items-center lg:pb-0">
          <div className="max-w-3xl text-cream">
            <div className="mb-6 inline-flex items-center gap-2 bg-gold px-3 py-2 text-xs font-extrabold uppercase text-charcoal"><Sparkles className="size-4" /> Kenyan-rooted. Internationally minded.</div>
            <h1 className="text-6xl font-black leading-[0.88] sm:text-7xl lg:text-8xl">Made to Move.<br/><span className="text-teal">Made in Kenya.</span></h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">Custom apparel for schools, businesses, teams and events.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" asChild><a href="#quote">Request a Quote <ArrowRight /></a></Button>
              <Button variant="whatsapp" size="lg" onClick={() => openWhatsApp("Hello VERYA, I'd like to discuss a custom apparel order.")}><MessageCircle /> WhatsApp Us</Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden bg-plum px-8 py-5 font-display text-lg font-bold text-cream lg:block">Born in Canada. Rooted in Kenya.</div>
      </section>

      <div className="overflow-hidden border-y-2 border-charcoal bg-gold py-4">
        <div className="ticker-track flex w-max gap-10 whitespace-nowrap font-display text-xl font-black uppercase">
          {[...audiences, ...audiences, ...audiences].map((item, i) => <span key={`${item}-${i}`} className="flex items-center gap-10">{item}<span className="text-plum">◆</span></span>)}
        </div>
      </div>

      <section className="bg-cream py-20 lg:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-sm font-extrabold uppercase text-plum">Who we serve</p><h2 className="mt-3 text-5xl font-black leading-none sm:text-6xl">Your people.<br/>Your colours.<br/>Your identity.</h2></div>
          <div className="grid grid-cols-2 border-l-2 border-t-2 border-charcoal">
            {audiences.map((item, i) => <div key={item} className={`flex min-h-40 items-end border-b-2 border-r-2 border-charcoal p-5 sm:min-h-52 sm:p-7 ${i === 0 ? "bg-teal" : i === 1 ? "bg-orange" : i === 2 ? "bg-gold" : "bg-plum text-cream"}`}><span className="font-display text-2xl font-black sm:text-3xl">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section id="products" className="bg-charcoal py-20 text-cream lg:py-28">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-extrabold uppercase text-gold">What we make</p><h2 className="mt-3 text-5xl font-black sm:text-6xl">Wear the difference.</h2></div><p className="max-w-sm text-sm leading-relaxed text-cream/70">From first sketch to final stitch, every order is shaped around your people and purpose.</p></div>
          <div className="grid gap-3 lg:grid-cols-2">
            {products.map(([number, title, copy, color], i) => <article key={title} className={`${color} p-7 sm:p-9 ${i === 0 ? "min-h-80 lg:row-span-2" : "min-h-56"}`}><span className="text-xs font-black opacity-70">{number} /</span><div className="mt-16 lg:mt-24"><h3 className="text-3xl font-black sm:text-4xl">{title}</h3><p className="mt-3 max-w-md font-semibold leading-relaxed opacity-80">{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-teal py-20 lg:py-24"><div className="section-shell"><p className="text-sm font-extrabold uppercase">Why VERYA</p><div className="mt-8 grid border-l-2 border-t-2 border-charcoal sm:grid-cols-2 lg:grid-cols-5">{reasons.map((reason, i) => <div key={reason} className="min-h-36 border-b-2 border-r-2 border-charcoal p-5"><span className="font-display text-4xl font-black text-cream">0{i + 1}</span><p className="mt-8 font-display text-xl font-black">{reason}</p></div>)}</div></div></section>

      <section className="bg-cream py-20 lg:py-28"><div className="section-shell"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><div><p className="text-sm font-extrabold uppercase text-orange">How it works</p><h2 className="mt-3 text-5xl font-black">From idea<br/>to arrival.</h2></div><ol className="border-t-2 border-charcoal">{process.map((step, i) => <li key={step} className="flex items-center justify-between border-b-2 border-charcoal py-5"><span className="font-display text-2xl font-black sm:text-4xl">{step}</span><span className={`flex size-11 items-center justify-center font-black ${i % 2 ? "bg-orange" : "bg-gold"}`}>{i + 1}</span></li>)}</ol></div></div></section>

      <section className="grid bg-plum lg:grid-cols-2"><img src={textilesImage} alt="Colourful custom tracksuits and knitwear in production" width={1408} height={1056} loading="lazy" className="h-full min-h-[460px] w-full object-cover"/><div className="textile-grid flex items-center p-8 text-cream sm:p-14 lg:p-20"><div><p className="text-sm font-extrabold uppercase text-gold">Custom by design</p><h2 className="mt-4 text-5xl font-black leading-none sm:text-6xl">Colour that carries your story.</h2><p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">Choose the style, colours, branding and finish. We turn your brief into apparel people feel proud to wear.</p><Button variant="cream" size="lg" className="mt-8" asChild><a href="#quote">Start your order <ArrowRight /></a></Button></div></div></section>

      <section id="story" className="bg-gold py-20 lg:py-28"><div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-extrabold uppercase text-plum">Meet the founders</p><h2 className="mt-4 text-5xl font-black leading-none sm:text-6xl">Born in Canada.<br/>Rooted in Kenya.</h2><p className="mt-7 text-lg font-semibold leading-relaxed">VERYA was founded in 2026 in Canada by a Kenyan family and is co-owned by Eunice and Hellen.</p><p className="mt-4 leading-relaxed">Their vision connects international sourcing and production knowledge—including exposure to textile suppliers and machinery in China—with opportunity in Kenya’s growing apparel market.</p><p className="mt-4 font-bold">A family-built company with Kenyan ambition, global perspective and room to grow.</p></div><div className="border-2 border-charcoal bg-cream p-6 shadow-brand sm:p-9"><div className="mb-10 flex size-16 items-center justify-center bg-plum font-display text-2xl font-black text-cream">EH</div><blockquote className="font-display text-3xl font-black leading-tight sm:text-4xl">“We’re building more than clothing. We’re building confidence, identity and opportunity.”</blockquote><p className="mt-8 border-t-2 border-charcoal pt-5 font-extrabold">Eunice & Hellen · Co-owners, VERYA</p></div></div></section>

      <section className="bg-cream py-20 lg:py-28"><div className="section-shell"><div className="mb-9 flex items-end justify-between"><div><p className="text-sm font-extrabold uppercase text-teal">In motion</p><h2 className="mt-3 text-5xl font-black sm:text-6xl">Made for real teams.</h2></div></div><div className="grid gap-4 md:grid-cols-5 md:grid-rows-2"><img src={teamImage} alt="Kenyan sports team in custom apparel" width={1200} height={1504} loading="lazy" className="h-full min-h-96 w-full object-cover md:col-span-2 md:row-span-2"/><img src={productionImage} alt="Kenyan garment makers working in a textile workshop" width={1408} height={1056} loading="lazy" className="h-full min-h-72 w-full object-cover md:col-span-3"/><div className="textile-grid flex min-h-64 items-end bg-orange p-7 md:col-span-2"><p className="font-display text-3xl font-black">Schools. Teams.<br/>Businesses. Events.</p></div><div className="flex min-h-64 items-center justify-center bg-plum p-7 text-center text-cream md:col-span-1"><p className="font-display text-3xl font-black">One bold identity.</p></div></div></div></section>

      <section id="quote" className="bg-charcoal py-20 text-cream lg:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-extrabold uppercase text-teal">Bulk orders</p><h2 className="mt-3 text-5xl font-black leading-none sm:text-6xl">Let’s make it happen.</h2><p className="mt-6 max-w-md text-lg text-cream/70">Tell us what your group needs. Your details will open in WhatsApp, ready to send to VERYA.</p><div className="mt-8 space-y-3">{["Custom recommendations", "Clear order requirements", "A practical next step"].map(item => <p key={item} className="flex items-center gap-3 font-bold"><span className="flex size-6 items-center justify-center bg-teal text-charcoal"><Check className="size-4"/></span>{item}</p>)}</div></div><form onSubmit={submitQuote} className="grid gap-5 border-t-4 border-orange bg-cream p-6 text-charcoal sm:grid-cols-2 sm:p-9"><Field label="Product type"><select name="product" required defaultValue=""><option value="" disabled>Select a product</option><option>School Tracksuits</option><option>Custom T-Shirts</option><option>Business & Corporate Wear</option><option>Sports & Team Apparel</option><option>Event Apparel</option><option>Knitwear & Uniforms</option></select></Field><Field label="Quantity"><input name="quantity" type="number" min="1" placeholder="e.g. 120" required /></Field><Field label="Customization" wide><textarea name="customization" rows={3} placeholder="Colours, logo, names, printing or embroidery" required /></Field><Field label="Size requirements"><input name="sizes" placeholder="e.g. Youth and adult size range" required /></Field><Field label="Needed by"><input name="deadline" type="date" required /></Field><Field label="Name / organization" wide><input name="name" placeholder="Your name, school, team or business" required /></Field><div className="sm:col-span-2"><Button type="submit" variant="whatsapp" size="lg" className="w-full"><MessageCircle /> Continue on WhatsApp</Button></div></form></div></section>

      <footer className="border-t border-cream/20 bg-charcoal py-10 text-cream"><div className="section-shell flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><BrandMark light/><p className="mt-3 text-sm text-cream/60">Made to Move. Made in Kenya.</p></div><div className="text-sm"><p className="font-bold">Canada · Kenya · International</p><p className="mt-2 text-cream/60">© 2026 VERYA. Built with purpose.</p></div></div></footer>
    </main>
  );
}

function Field({ label, wide = false, children }: { label: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={`grid gap-2 text-sm font-extrabold ${wide ? "sm:col-span-2" : ""}`}><span>{label}</span><div className="[&_input]:h-12 [&_input]:w-full [&_input]:border-2 [&_input]:border-charcoal [&_input]:bg-cream [&_input]:px-3 [&_input]:font-medium [&_input]:outline-none [&_input]:focus:border-teal [&_select]:h-12 [&_select]:w-full [&_select]:border-2 [&_select]:border-charcoal [&_select]:bg-cream [&_select]:px-3 [&_select]:font-medium [&_textarea]:w-full [&_textarea]:border-2 [&_textarea]:border-charcoal [&_textarea]:bg-cream [&_textarea]:p-3 [&_textarea]:font-medium [&_textarea]:outline-none [&_textarea]:focus:border-teal">{children}</div></label>;
}