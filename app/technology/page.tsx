import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              Our Technology
            </h1>
            <p className="text-xl mb-8">
              RoomTune's AR-based acoustic simulation technology redefines how we experience sound in any environment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">AR-Based Acoustic Modeling</h2>
              <p className="text-lg mb-4">
                RoomTune uses augmented reality to scan and analyze your room's acoustic properties with unprecedented accuracy.
              </p>
              <p className="text-lg mb-4">
                Our technology creates a detailed 3D model of your space, identifying acoustic challenges that affect sound quality.
              </p>
              <p className="text-lg">
                By understanding how sound waves interact with your specific environment, RoomTune provides customized solutions for optimal acoustic performance.
              </p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">AR Technology Image</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Sections */}
      <section className="py-16 bg-light">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="heading-lg text-center mb-6">
              Key Features
            </h2>
            <p className="text-lg text-center">
              RoomTune's suite of technologies work together to create the perfect acoustic environment.
            </p>
          </div>
          
          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-md mb-4">Room Analysis</h3>
                <p className="mb-4">
                  Our advanced AR scanning technology creates a detailed model of your room's acoustic properties.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identifies reflective surfaces and acoustic problem areas</li>
                  <li>Maps frequency response throughout the space</li>
                  <li>Detects modal resonances and standing waves</li>
                  <li>Analyzes reverberation patterns and decay times</li>
                </ul>
                <div className="mt-6">
                  <Link href="/technology/room-analysis" className="btn-primary">
                    Learn more about Room Analysis
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-lg">Room Analysis Visualization</span>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:order-1">
              <div className="md:order-2">
                <h3 className="heading-md mb-4">Acoustic Simulation</h3>
                <p className="mb-4">
                  Preview acoustic changes before making any physical modifications to your space.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Simulate different acoustic treatment placements</li>
                  <li>Test various speaker configurations</li>
                  <li>Evaluate listener positions for optimal experience</li>
                  <li>Compare before/after sound profiles</li>
                </ul>
                <div className="mt-6">
                  <Link href="/technology/simulation" className="btn-primary">
                    Learn more about Simulation
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center md:order-1">
                <span className="text-gray-400 text-lg">Simulation Visualization</span>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-md mb-4">Optimization</h3>
                <p className="mb-4">
                  Get personalized recommendations to achieve the perfect sound in your specific space.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AI-powered acoustic treatment suggestions</li>
                  <li>Speaker placement optimization</li>
                  <li>Real-time frequency response correction</li>
                  <li>Room calibration settings for different use cases</li>
                </ul>
                <div className="mt-6">
                  <Link href="/technology/optimization" className="btn-primary">
                    Learn more about Optimization
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 h-60 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-lg">Optimization Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12">
            Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded shadow-sm text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Home Audio</h3>
              <p>Transform your living space into an acoustically optimized listening environment.</p>
            </div>
            <div className="bg-light p-8 rounded shadow-sm text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Studio & Professional</h3>
              <p>Create a reference-quality listening environment for recording, mixing, and mastering.</p>
            </div>
            <div className="bg-light p-8 rounded shadow-sm text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Commercial Spaces</h3>
              <p>Optimize acoustics in conference rooms, auditoriums, restaurants, and other public venues.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-wide text-center">
          <h2 className="heading-lg mb-8">
            Ready to experience the RoomTune difference?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/demo" className="btn-primary bg-white text-primary">
              Try the Demo
            </Link>
            <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 