import Link from "next/link"

const contentNav = [
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/angebote", label: "Angebote" },
]

const legalNav = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
]

function linkClass(isActive: boolean) {
  return isActive
    ? "text-foreground font-medium"
    : "text-muted-foreground hover:text-foreground transition-colors"
}

export function HomeHeader() {
  return (
    <header className="px-6 md:px-12 py-8">
      <div className="flex items-center justify-between">
        <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
          Berlin &amp; Online
        </span>
        <a
          href="mailto:kontakt@nadine-schneider-therapie.de"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
        >
          kontakt@nadine-schneider-therapie.de
        </a>
      </div>
    </header>
  )
}

export function SubpageHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="px-6 md:px-12 py-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          Startseite
        </Link>
        <nav className="flex items-center gap-6 text-sm" aria-label="Hauptnavigation">
          {contentNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(currentPath === item.href)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:kontakt@nadine-schneider-therapie.de"
            className="text-muted-foreground hover:text-foreground transition-colors hidden lg:block"
          >
            kontakt@nadine-schneider-therapie.de
          </a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter({ currentPath }: { currentPath?: string }) {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Nadine Schneider · Einzel- & Paartherapie
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm">
          {contentNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(currentPath === item.href)}
            >
              {item.label}
            </Link>
          ))}
          <span className="text-border hidden md:inline" aria-hidden="true">·</span>
          {legalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-muted-foreground/70 hover:text-foreground transition-colors text-xs ${currentPath === item.href ? "text-foreground/80 font-medium" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
