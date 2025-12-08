import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-black py-16 md:py-24 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl text-white tracking-wide">AETHER</h2>
            <p className="font-body text-sm text-muted-foreground">
              Founded by Julian Vance.<br />Ex Nihilo.
            </p>
          </div>

          {/* Tagline Column */}
          <div className="flex flex-col justify-center">
            <p className="font-headline text-2xl md:text-3xl text-white italic leading-relaxed">
              "Silence is the ultimate luxury."
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-headline text-lg text-white mb-2">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="font-body text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-wider">
                  The Void
                </Link>
              </li>
              <li>
                <Link href="#projects" className="font-body text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-wider">
                  The Spire
                </Link>
              </li>
              <li>
                <Link href="#projects" className="font-body text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-wider">
                  The Anchor
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h3 className="font-headline text-lg text-white mb-2">Philosophy</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="font-body text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-wider">
                    Ex Nihilo
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="font-body text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-wider">
                    The Process
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-headline text-lg text-white mb-2">The Firm</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="font-body text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-wider">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="font-body text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-wider">
                    Julian Vance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground font-body uppercase tracking-widest">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <span>© 2024 Aether. Ex Nihilo.</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Protocols</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Engagement</Link>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">VSCO</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
