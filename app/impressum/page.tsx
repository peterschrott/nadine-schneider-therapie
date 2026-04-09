import type { Metadata } from "next"
import { SiteFooter, SubpageHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Impressum | Nadine Schneider - Therapie Berlin",
  description: "Impressum und rechtliche Angaben gemäß § 5 DDG",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <SubpageHeader currentPath="/impressum" />

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 md:px-12 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
          Impressum
        </h1>

        <div className="space-y-8 text-foreground leading-relaxed">
          {/* Angaben gemäß § 5 DDG */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Nadine Schneider<br />
              Alt-Reinickendorf 23<br />
              13407 Berlin
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: 0172 415 0092<br />
              E-Mail: kontakt@nadine-schneider-therapie.de
            </p>
          </section>

          {/* Berufsbezeichnung */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              Berufsbezeichnung / Qualifikation
            </h2>
            <p className="mb-2">
              Systemische Therapeutin und Familientherapeutin (DGSF)
            </p>
            <p className="text-muted-foreground">
              Die Zertifizierung erfolgte nach erfolgreichem Abschluss einer Weiterbildung in Anerkennung durch die Deutsche Gesellschaft für Systemische Therapie, Beratung und Familientherapie (DGSF).
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Nadine Schneider<br />
              Alt-Reinickendorf 23<br />
              13407 Berlin
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              Haftung für Inhalte
            </h2>
            <p className="text-muted-foreground">
              Als Diensteanbieterin bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter currentPath="/impressum" />
    </div>
  )
}
