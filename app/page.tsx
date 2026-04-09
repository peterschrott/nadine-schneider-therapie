import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { SiteFooter, HomeHeader } from "@/components/site-chrome"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Full viewport editorial style */}
      <section className="min-h-screen flex flex-col">
        <HomeHeader />

        {/* Main hero content */}
        <div className="flex-1 flex items-center px-6 md:px-12 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto">
            {/* Text side */}
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium mb-6 tracking-wide">
                Nadine Schneider
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8">
                Einzel- &<br />Paartherapie
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
                Raum für Veränderung und Entwicklung. Wertschätzend. Ruhig. Auf Augenhöhe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:kontakt@nadine-schneider-therapie.de?subject=Anfrage%20Erstgespräch"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-base font-medium"
                >
                  Erstgespräch anfragen
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a 
                  href="tel:00491724150092"
                  className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 rounded-full hover:bg-secondary transition-colors text-base"
                >
                  <Phone className="h-4 w-4" />
                  0172 415 0092
                </a>
              </div>
            </div>

            {/* Image side */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-secondary rounded-[2rem] -rotate-3 scale-95" />
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/portrait_square.jpg"
                    alt="Nadine Schneider - Systemische Therapeutin"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pb-8 flex justify-center">
          <div className="w-px h-16 bg-border" />
        </div>
      </section>

      {/* Quote section - editorial pullquote style */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-snug text-balance">
              Seit über 12 Jahren begleite ich Menschen in unterschiedlichen therapeutischen und sozialen Kontexten.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Mein Anliegen ist es, Räume zu schaffen, in denen Entwicklung und Veränderung möglich werden.
            </p>
          </div>
          <p className="mt-10">
            <Link
              href="/ueber-mich"
              className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors text-base font-medium"
            >
              Mehr über mich
              <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* Services - asymmetric editorial layout */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Left column - smaller */}
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Unterstützung
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Wobei ich Sie begleiten kann
              </h2>
            </div>

            {/* Right column - content */}
            <div className="md:col-span-7 md:pt-16">
              <div className="space-y-12">
                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    Persönliche Krisen
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Krisen, Trauer, Angst, Selbstzweifel. Orientierungslosigkeit und Erschöpfung. 
                    Wenn sich Dinge festgefahren anfühlen.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    Beziehungen & Konflikte
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wiederkehrende Beziehungsmuster und Konflikte besser verstehen. 
                    Neue Wege finden, miteinander umzugehen.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    Besonderer Schwerpunkt
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Langjährige Suchthilfe-Erfahrung. Wenn Konsum oder Gewohnheiten zunehmend 
                    Kontrolle übernehmen. Themen rund um Liebe, Beziehungen und Sexualität.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <Link
                    href="/angebote"
                    className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors text-base font-medium"
                  >
                    Zu meinen Angeboten
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - warm accent */}
      <section className="mx-6 md:mx-12 mb-24 md:mb-32">
        <div className="bg-primary rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center">
          <p className="text-primary-foreground/80 uppercase tracking-[0.15em] text-sm mb-4">
            Kostenloses Erstgespräch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
            Ein geschützter Rahmen
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
            Vor Ort in Berlin oder online: Das Erstgespräch bietet Raum, 
            Ihr Anliegen in Ruhe zu sortieren.
          </p>
          <a 
            href="mailto:kontakt@nadine-schneider-therapie.de?subject=Anfrage%20Erstgespräch"
            className="inline-flex items-center gap-3 bg-card text-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Jetzt Termin anfragen
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Contact section - minimal */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Kontakt
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Lassen Sie uns sprechen
              </h2>
              <div className="space-y-4">
                <a 
                  href="mailto:kontakt@nadine-schneider-therapie.de"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="border-b border-transparent group-hover:border-primary">
                    kontakt@nadine-schneider-therapie.de
                  </span>
                </a>
                <a 
                  href="tel:00491724150092"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="border-b border-transparent group-hover:border-primary">
                    0172 415 0092
                  </span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Standorte
              </p>
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Praxisorte & Online
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Prenzlauer Berg
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Reinickendorf
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Lichtenberg
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Online-Termine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - minimal editorial */}
      <SiteFooter />
    </div>
  )
}
