import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { SiteFooter, SubpageHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Angebote | Nadine Schneider - Therapie Berlin",
  description:
    "Systemische Einzeltherapie, Paartherapie, Beratung und therapeutische Begleitung bei suchtbezogenen Themen in Berlin und online.",
}

const individualTopics = [
  "persönliche Krisen und Umbruchphasen",
  "Stress, Überforderung und Erschöpfung",
  "innere Konflikte, Selbstzweifel oder Unsicherheit",
  "Trauer, Verlust und Orientierungslosigkeit",
  "Entscheidungsfindung",
  "persönliche Entwicklung",
  "Liebeskummer, Dating und wiederkehrende Beziehungsmuster",
]

const coupleTopics = [
  "wiederkehrende Streit- und Konfliktmuster",
  "Kommunikationsprobleme",
  "unterschiedliche Bedürfnisse und Erwartungen",
  "Fragen zu Nähe, Distanz und Verbundenheit",
  "Vertrauensbrüche oder Verunsicherung in der Beziehung",
  "Belastungen in Übergangs- oder Krisenzeiten",
  "der Wunsch nach gemeinsamer Neuorientierung",
]

const coachingTopics = [
  "privaten oder beruflichen Umbrüchen",
  "Entscheidungsfragen",
  "Überforderung im Alltag",
  "Beziehungsthemen",
  "Liebeskummer oder belastenden Dating-Erfahrungen",
  "dem Wunsch nach persönlicher Weiterentwicklung",
]

const addictionTopics = [
  "Alkohol- oder Substanzkonsum",
  "problematischer Medienkonsum",
  "exzessive Nutzung von Social Media, Streaming oder Gaming",
  "belastendes Kaufverhalten",
  "der Eindruck, Kontrolle zu verlieren",
  "Ambivalenz zwischen Veränderungswunsch und Festhalten",
  "die Frage, was hinter dem Konsumverhalten steht",
]

const supportTopics = [
  "Lebenskrisen und Umbruchphasen",
  "Konflikte in Partnerschaft oder Familie",
  "Stress und Überforderung",
  "suchtbezogene Themen",
  "Liebeskummer, Dating und Beziehungsmuster",
  "Entscheidungsfindung",
  "persönliche Entwicklung und Neuorientierung",
]

const frameworkItems = [
  "Termine nach Vereinbarung",
  "Vertrauliche Gespräche",
  "Absagen bitte mindestens 24 Stunden vorher",
]

const offers = [
  {
    title: "Systemische Einzeltherapie",
    description: [
      "Die Einzeltherapie bietet Raum für persönliche Themen, Krisen und Veränderungsprozesse. Gemeinsam schauen wir auf das, was Sie belastet, auf wiederkehrende Muster und auf Möglichkeiten, wieder mehr Klarheit und Handlungsspielraum zu gewinnen.",
    ],
    intro: "Mögliche Themen können sein:",
    topics: individualTopics,
  },
  {
    title: "Systemische Paartherapie",
    description: [
      "Paartherapie kann hilfreich sein, wenn Gespräche immer wieder in Konflikten enden, Nähe verloren gegangen ist oder eine gemeinsame Neuorientierung ansteht. Im gemeinsamen Gespräch können festgefahrene Dynamiken sichtbar werden und neue Formen von Verständigung entstehen.",
    ],
    intro: "Mögliche Themen können sein:",
    topics: coupleTopics,
  },
  {
    title: "Systemische Beratung / Coaching",
    description: [
      "Nicht jedes Anliegen braucht einen therapeutischen Prozess. Manchmal geht es darum, Gedanken zu sortieren, eine belastende Situation besser zu verstehen oder in einer konkreten Frage Orientierung zu gewinnen.",
    ],
    intro: "Beratung oder Coaching kann hilfreich sein bei:",
    topics: coachingTopics,
  },
  {
    title: "Therapeutische Begleitung bei suchtbezogenen Themen",
    description: [
      "Sucht zeigt sich nicht nur im Konsum von Alkohol oder anderen Substanzen. Auch Verhaltensweisen und Gewohnheiten können zunehmend Raum einnehmen, belasten und das Gefühl vermitteln, nicht mehr frei entscheiden zu können. Dazu können zum Beispiel Medienkonsum, Social Media, Gaming oder Shopping gehören.",
      "Ich biete therapeutische Begleitung bei suchtbezogenen Themen an – unabhängig davon, ob bereits ein hoher Leidensdruck besteht oder zunächst die Frage im Raum steht, wo die Grenze zwischen Gewohnheit, Bewältigungsstrategie und problematischem Konsum verläuft.",
    ],
    intro: "Mögliche Themen können sein:",
    topics: addictionTopics,
  },
]

function TopicList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-muted-foreground leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AngebotePage() {
  return (
    <div className="min-h-screen bg-background">
      <SubpageHeader currentPath="/angebote" />

      <main>
          <section className="px-6 md:px-12 pt-4 pb-20 md:pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Mein Angebot
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.02] text-balance">
                Begleitung in herausfordernden Lebenssituationen
              </h1>
            </div>

            <div className="mt-12 max-w-4xl space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Es gibt Phasen im Leben, in denen Belastungen, Konflikte oder innere Fragen mehr Raum einnehmen, als einem guttut. Manchmal geraten Beziehungen unter Druck, manchmal wiederholen sich bestimmte Muster, manchmal ist einfach spürbar, dass es so nicht weitergehen soll.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In meiner Praxis biete ich Ihnen einen geschützten Rahmen, um Ihr Anliegen in Ruhe anzuschauen, neue Perspektiven zu entwickeln und stimmige Schritte für sich zu finden. Ich arbeite systemisch, wertschätzend und auf Augenhöhe.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-24 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14 md:mb-16">
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Meine Angebote
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Systemische Begleitung für unterschiedliche Anliegen
              </h2>
            </div>

            <div className="space-y-12">
              {offers.map((offer) => (
                <article
                  key={offer.title}
                  className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-border pt-8 md:pt-10"
                >
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                      {offer.title}
                    </h3>
                  </div>

                  <div className="md:col-span-8 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] gap-8 md:gap-10">
                    <div className="space-y-5">
                      {offer.description.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="md:border-l md:border-border md:pl-8">
                      <p className="text-foreground font-medium mb-4">
                        {offer.intro}
                      </p>
                      <TopicList items={offer.topics} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Wobei ich Sie unterstützen kann
              </p>
              <div className="border-t border-border pt-8">
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  {supportTopics.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-primary mb-4">
                Rahmenbedingungen
              </p>
              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Die Sitzungen werden privat finanziert. Nähere Informationen erhalten Sie im Erstgespräch.
                </p>
                <TopicList items={frameworkItems} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-6 md:mx-12 mb-24 md:mb-32">
          <div className="bg-primary rounded-3xl px-8 md:px-16 py-14 md:py-16">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-primary-foreground/80 uppercase tracking-[0.15em] text-sm mb-4">
                  Erstgespräch
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground leading-tight">
                  In einem unverbindlichen Erstgespräch haben Sie die Möglichkeit, mich kennenzulernen und Ihr Anliegen zu schildern.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-lg text-primary-foreground/85 leading-relaxed">
                  Gemeinsam klären wir, ob eine Zusammenarbeit für Sie sinnvoll und passend ist.
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

      <SiteFooter currentPath="/angebote" />
    </div>
  )
}
