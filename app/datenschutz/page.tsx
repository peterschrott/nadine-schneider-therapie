import { SiteFooter, SubpageHeader } from "@/components/site-chrome"

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      <SubpageHeader currentPath="/datenschutz" />

      <main className="mx-auto max-w-4xl px-6 md:px-12 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">1. Verantwortliche Stelle</h2>
            <div className="text-muted-foreground space-y-1">
              <p>Nadine Schneider</p>
              <p>Alt-Reinickendorf 23</p>
              <p>13407 Berlin</p>
              <p>E-Mail: kontakt@nadine-schneider-therapie.de</p>
              <p>Telefon: 0172 415 0092</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">2. Zugriffsdaten (Server-Logfiles)</h2>
            <p className="text-muted-foreground mb-4">
              Beim Aufruf dieser Website verarbeitet der Hosting-Provider technisch erforderliche Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser-Informationen), um die Website bereitzustellen und die Sicherheit der Systeme zu gewährleisten.
            </p>
            <p className="text-muted-foreground">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">3. Kontaktaufnahme per E-Mail oder Telefon</h2>
            <p className="text-muted-foreground mb-4">
              Wenn Sie per E-Mail oder telefonisch Kontakt aufnehmen, verarbeite ich die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Anfrageinhalt), um Ihr Anliegen zu bearbeiten.
            </p>
            <p className="text-muted-foreground">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) bzw. Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">4. Speicherdauer</h2>
            <p className="text-muted-foreground">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihres Anliegens erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">5. Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben nach der DSGVO insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Zudem haben Sie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">6. Keine Cookies / kein Tracking</h2>
            <p className="text-muted-foreground">
              Diese Website verwendet derzeit keine Analyse- oder Marketing-Tools und setzt keine eigenen Tracking-Cookies ein. Falls später externe Dienste eingebunden werden, wird diese Datenschutzerklärung entsprechend aktualisiert.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter currentPath="/datenschutz" />
    </div>
  )
}
