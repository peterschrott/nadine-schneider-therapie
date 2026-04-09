import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { SiteFooter, SubpageHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Über mich | Nadine Schneider - Therapie Berlin",
  description:
    "Über Nadine Schneider, systemische Therapeutin in Berlin. Berufserfahrung, Qualifikationen, fachlicher Hintergrund und therapeutische Haltung.",
}

const experienceItems = [
  "Langjährige Tätigkeit in der Suchthilfe",
  "Mitgründung einer sozialtherapeutischen Wohngruppe",
  "Sozialpädagogische Familienhilfe",
  "Ambulante Beratung und Therapie",
  "Krisenintervention und Fallmanagement",
  "Arbeit mit Einzelpersonen, Paaren und Familien",
]

const qualifications = [
  "Systemische Einzel-, Paar- und Familientherapeutin (DGSF)",
  "Systemische Beraterin (DGSF)",
  "Anerkannte Suchttherapeutin (Rentenversicherung)",
]

const educationItems = [
  {
    degree: "Bachelor Soziale Arbeit (B.A.)",
    institution: "KHSB - Katholische Hochschule Berlin",
  },
  {
    degree: "Bachelor Kindheitspädagogik (B.A.)",
    institution: "Evangelische Hochschule Darmstadt",
  },
  {
    degree: "Staatlich anerkannte Erzieherin",
    institution: "Fröbelseminar Kassel",
  },
]

const focusItems = [
  "Suchthilfe",
  "Familienarbeit",
  "Sozialtherapeutisches Setting",
  "Krisenintervention",
  "Systemische Beratung",
]

const values = [
  "Wertschätzung",
  "Klarheit",
  "Ressourcenorientierung",
  "Systemische Perspektive",
  "Entwicklung auf Augenhöhe",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SubpageHeader currentPath="/ueber-mich" />

      <main>
        <section className="px-6 md:px-12 pt-4 pb-20 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Über mich
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.02] text-balance">
                Räume schaffen, in denen Entwicklung möglich wird
              </h1>
            </div>

            <div className="mt-12 max-w-4xl">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Ich bin systemische Therapeutin und begleite Einzelpersonen, Paare und Familien in herausfordernden Lebenssituationen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In meiner Arbeit ist mir eine ruhige, wertschätzende und vertrauensvolle Atmosphäre besonders wichtig. Ich arbeite ressourcenorientiert und unterstütze Sie dabei, neue Perspektiven zu entwickeln und eigene Lösungen zu finden.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Durch meine langjährige Tätigkeit in unterschiedlichen therapeutischen und sozialen Kontexten bringe ich vielfältige Erfahrungen mit, unter anderem in der ambulanten Therapie, im Suchthilfebereich, in der Familienhilfe sowie im sozialtherapeutischen Setting.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ich arbeite klar, zugewandt und auf Augenhöhe. Mein Ziel ist es, gemeinsam mit Ihnen Veränderungsprozesse behutsam zu gestalten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-24 bg-card">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Berufserfahrung
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Über 12 Jahre in therapeutischen und sozialen Arbeitsfeldern
              </h2>
            </div>

            <div className="md:col-span-8 space-y-10 md:pt-10">
              <div className="border-t border-border pt-8">
                <h3 className="text-xl font-medium text-foreground mb-3">
                  Aktuelle therapeutische Tätigkeit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Privatfinanzierte systemische Beratung und Therapie (seit 2023)
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Weitere berufliche Erfahrungen
                </h3>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  {experienceItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-10">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                  Qualifikationen
                </p>
                <div className="border-t border-border pt-8">
                  <h2 className="font-serif text-3xl text-foreground mb-6">
                    Therapeutische Qualifikationen
                  </h2>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {qualifications.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-8 mt-8">
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    Ausbildung
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gesellschaft für Systemische Therapie und Beratung (GST)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                  Fachlicher Hintergrund
                </p>
                <div className="border-t border-border pt-8">
                  <h2 className="font-serif text-3xl text-foreground mb-6">
                    Ausbildung und Schwerpunkte
                  </h2>
                  <div className="space-y-6 mb-10">
                    {educationItems.map((item) => (
                      <div key={item.degree} className="border-t border-border pt-5">
                        <p className="text-foreground font-medium leading-relaxed">
                          {item.degree}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-8">
                    <h3 className="text-xl font-medium text-foreground mb-4">
                      Weitere Schwerpunkte
                    </h3>
                    <ul className="flex flex-wrap gap-3 text-muted-foreground leading-relaxed">
                      {focusItems.map((item) => (
                        <li
                          key={item}
                          className="border border-border px-4 py-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-6 md:mx-12 mb-24 md:mb-32">
          <div className="bg-primary rounded-3xl px-8 md:px-16 py-14 md:py-16">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-primary-foreground/80 uppercase tracking-[0.15em] text-sm mb-4">
                  Haltung & Arbeitsweise
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground leading-tight">
                  Meine Arbeit ist geprägt von
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <ul className="grid sm:grid-cols-2 gap-3 text-primary-foreground/90">
                  {values.map((item) => (
                    <li key={item} className="rounded-2xl border border-primary-foreground/20 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-primary-foreground/85 leading-relaxed">
                  Ich gehe davon aus, dass jeder Mensch bereits über wichtige Ressourcen verfügt. Gemeinsam schaffen wir Raum, diese wieder zugänglich zu machen.
                </p>
                <a
                  href="mailto:kontakt@nadine-schneider-therapie.de?subject=Anfrage%20Erstgespräch"
                  className="inline-flex items-center gap-3 bg-card text-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-medium"
                >
                  Erstgespräch anfragen
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter currentPath="/ueber-mich" />
    </div>
  )
}
