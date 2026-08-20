import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark pb-8 pt-14 text-light">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Image src="/logo.svg" alt="RoomTune" width={160} height={32} />
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Acoustic intelligence for every space. Build, simulate, and optimize better listening
              environments with confidence.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-white/70">Navigate</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/technology" className="transition-colors hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/business" className="transition-colors hover:text-primary">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="transition-colors hover:text-primary">
                  Join waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-white/70">Contact</h3>
            <p className="mt-4 text-sm text-white/70">
              Questions or pilot interest:
              <a href="mailto:hello@roomtune.com" className="ml-1 transition-colors hover:text-primary">
                hello@roomtune.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-metal">
          <div className="flex flex-col justify-between gap-3 md:flex-row">
            <p>© {new Date().getFullYear()} RoomTune Technology Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/about" className="transition-colors hover:text-primary">
                Company
              </Link>
              <Link href="/business" className="transition-colors hover:text-primary">
                Partnerships
              </Link>
              <Link href="/#waitlist" className="transition-colors hover:text-primary">
                Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 