import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              Transform your acoustic experience.
            </h1>
            <p className="text-xl mb-8">
              Use RoomTune to transform your listening environment. Our AR-based acoustic simulation technology makes any room sound better.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary bg-white text-primary">
                Explore RoomTune
              </Link>
              <Link href="/technology" className="btn-secondary bg-transparent border-white text-white hover:bg-white/20">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Highlight Section */}
      <section className="py-16 bg-light">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12">
            NEXT-GENERATION ACOUSTIC SIMULATION
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-8">
              RoomTune's technology redefines acoustic experiences. Our AR-based software makes precise measurements and solves audio imperfections for any space. Experience optimal sound regardless of room architecture.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12">
            Bring out the best in your environment.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded shadow-sm">
              <h3 className="heading-md mb-4">Room Analysis</h3>
              <p>Scan your room with AR technology to create a detailed acoustic model that identifies problem areas.</p>
            </div>
            <div className="bg-light p-8 rounded shadow-sm">
              <h3 className="heading-md mb-4">Simulation</h3>
              <p>Experience how changes would affect your room's acoustics before making any physical modifications.</p>
            </div>
            <div className="bg-light p-8 rounded shadow-sm">
              <h3 className="heading-md mb-4">Optimization</h3>
              <p>Get personalized recommendations for acoustic treatments and speaker placement for optimal sound.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-light">
        <div className="container-wide">
          <div className="flex flex-col items-center">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <blockquote className="text-2xl font-medium italic">
                "RoomTune was an eye-opener, the proof was in the listening, and it was remarkable."
              </blockquote>
              <blockquote className="text-2xl font-medium italic">
                "For studio setup, it's not even close. I'm for RoomTune all the way."
              </blockquote>
              <blockquote className="text-2xl font-medium italic">
                "RoomTune is an audio professional's dream come true."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-8">
            RoomTune for business.
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg">
              We offer the industry's most powerful suite of acoustic simulation tools available. We're inventing the future of spatial audio for any content, device, and environment.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/business" className="btn-primary">
              RoomTune for business
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 