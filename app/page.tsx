import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen pt-[72px] bg-dark text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-darker to-dark text-white py-24 md:py-32 border-b border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 animate-fadeIn text-gradient">
              TRANSFORM YOUR ACOUSTIC EXPERIENCE
            </h1>
            <p className="text-xl mb-8 animate-fadeInDelayed text-white/90">
              Use RoomTune to transform your listening environment. Our AR-based acoustic simulation technology makes any room sound better.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore RoomTune
              </Link>
              <Link href="/technology" className="btn-secondary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-darker relative overflow-hidden">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12 text-gradient">
            See RoomTune in Action
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Demo Video */}
            <div className="card group">
              <div className="aspect-video rounded-lg overflow-hidden bg-darker/50 border border-primary/20">
                {/* Replace with your video embed code or placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-white/60">Product Demo Video</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white">How RoomTune Works</h3>
              <p className="text-white/80">Watch how our AR technology analyzes and optimizes your room's acoustics in real-time.</p>
            </div>

            {/* Customer Testimonial Video */}
            <div className="card group">
              <div className="aspect-video rounded-lg overflow-hidden bg-darker/50 border border-primary/20">
                {/* Replace with your video embed code or placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-white/60">Customer Testimonial</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white">Real User Experience</h3>
              <p className="text-white/80">Hear from our customers about how RoomTune transformed their audio experience.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Waveform Section */}
      <section className="py-16 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg width="100%" height="200" viewBox="0 0 1200 200" className="text-primary">
            <path 
              d="M0,100 C50,50 100,150 150,100 C200,50 250,150 300,100 C350,50 400,150 450,100 C500,50 550,150 600,100 C650,50 700,150 750,100 C800,50 850,150 900,100 C950,50 1000,150 1050,100 C1100,50 1150,150 1200,100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
            />
          </svg>
        </div>
        <div className="container-wide relative z-10">
          <h2 className="heading-lg text-center mb-12 text-gradient">
            NEXT-GENERATION ACOUSTIC SIMULATION
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-8 text-white/90">
              RoomTune's technology redefines acoustic experiences. Our AR-based software makes precise measurements and solves audio imperfections for any space. Experience optimal sound regardless of room architecture.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-dark border-y border-primary/10">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12 text-gradient">
            Bring out the best in your environment.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-white">Room Analysis</h3>
              <p className="text-white/80">Scan your room with AR technology to create a detailed acoustic model that identifies problem areas.</p>
            </div>
            <div className="card group">
              <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-white">Simulation</h3>
              <p className="text-white/80">Experience how changes would affect your room's acoustics before making any physical modifications.</p>
            </div>
            <div className="card group">
              <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4 text-white">Optimization</h3>
              <p className="text-white/80">Get personalized recommendations for acoustic treatments and speaker placement for optimal sound.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Section */}
      <section className="py-20 bg-dark border-t border-primary/20">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-8 text-gradient">
            RoomTune for business.
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-white/90">
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