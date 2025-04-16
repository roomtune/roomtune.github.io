import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[72px] bg-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-darker to-dark text-white py-24 md:py-32 border-b border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 animate-fadeIn text-gradient">
              About RoomTune
            </h1>
            <p className="text-xl mb-8 animate-fadeInDelayed text-white/90">
              We're revolutionizing how people experience sound through cutting-edge AR & AI technology
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Mission */}
      <section className="py-20 bg-darker">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-8 text-gradient">Our Mission</h2>
            <p className="text-xl text-center mb-6 text-white/90">
              To make perfect acoustics accessible to everyone through innovative AR technology.
            </p>
            <p className="text-lg text-center text-white/80">
              At RoomTune, we believe that everyone deserves to experience audio as it was meant to be heard, regardless of their listening environment. We're dedicated to developing cutting-edge acoustic simulation technology that makes professional-grade room analysis and optimization accessible to audio enthusiasts, professionals, and businesses alike.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-20 bg-dark border-y border-primary/10">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-gradient">Our Story</h2>
              <p className="text-lg mb-4 text-white/80">
                RoomTune was founded in 2023 by a team of acoustic engineers, audio professionals, and AR developers who shared a common frustration: even the best audio equipment sounds mediocre in poor acoustic environments.
              </p>
              <p className="text-lg mb-4 text-white/80">
                After years of research and development, we created a revolutionary approach to acoustic analysis and treatment using augmented reality technology. By scanning a room with a smartphone or tablet, our software can create a detailed acoustic model and provide personalized recommendations for acoustic optimization.
              </p>
              <p className="text-lg text-white/80">
                Today, RoomTune is used by audio enthusiasts, recording studios, home theater installers, and commercial venues to create perfect acoustic environments tailored to their specific needs.
              </p>
            </div>
            <div className="card h-80 flex items-center justify-center">
              <span className="text-white/60 text-lg">Company Image</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-darker">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12 text-gradient">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group">
              <div className="bg-darker w-40 h-40 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all">
                <span className="text-white/60">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">Chaouki Albarnougui</h3>
              <p className="text-primary font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-sm text-white/80">
                Acoustic engineering expert with 15+ years of experience in spatial audio technology.
              </p>
            </div>
            <div className="card text-center group">
              <div className="bg-darker w-40 h-40 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all">
                <span className="text-white/60">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">William Wakefield</h3>
              <p className="text-primary font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-sm text-white/80">
                AR/VR pioneer with multiple patents in spatial mapping and acoustic modeling.
              </p>
            </div>
            <div className="card text-center group">
              <div className="bg-darker w-40 h-40 rounded-full mx-auto mb-4 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all">
                <span className="text-white/60">Photo</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">Marouane Alaoui Lamharzi</h3>
              <p className="text-primary font-medium mb-3">Chief Research Officer</p>
              <p className="text-sm text-white/80">
                Former studio designer who led acoustics for major recording studios across North America.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-dark border-y border-primary/10">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12 text-gradient">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-white">Innovation</h3>
              <p className="text-white/80">
                We constantly push the boundaries of what's possible in acoustic technology, combining cutting-edge AR with deep acoustic science.
              </p>
            </div>
            <div className="card group">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-white">Accessibility</h3>
              <p className="text-white/80">
                We believe everyone deserves access to great acoustics, so we design our products to be user-friendly and affordable.
              </p>
            </div>
            <div className="card group">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-white">Quality</h3>
              <p className="text-white/80">
                We're committed to excellence in every aspect of our business, from acoustic algorithms to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-b from-primary to-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="heading-lg mb-8 text-white">
            Join the RoomTune team
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
            We're always looking for talented individuals who are passionate about audio technology, AR, and creating amazing user experiences.
          </p>
          <Link href="/careers" className="btn-primary bg-white text-primary hover:bg-white/90">
            View Open Positions
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 