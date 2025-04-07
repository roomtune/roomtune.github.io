import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              RoomTune for Business
            </h1>
            <p className="text-xl mb-8">
              Transform your business spaces with our professional-grade acoustic solutions.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Acoustic Excellence for Every Industry</h2>
            <p className="text-lg mb-8">
              RoomTune offers comprehensive acoustic solutions tailored to the unique needs of various business environments. Our AR-based technology provides unparalleled accuracy in analyzing and optimizing acoustic spaces.
            </p>
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-16 bg-light">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry 1 */}
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Recording Studios</h3>
              <p className="mb-4">
                Create reference-quality recording and mixing environments with precise acoustic analysis and optimization.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Acoustic treatment optimization</li>
                <li>Monitor placement analysis</li>
                <li>Real-time frequency response visualization</li>
              </ul>
            </div>
            
            {/* Industry 2 */}
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Theaters & Auditoriums</h3>
              <p className="mb-4">
                Ensure every seat in the house has an optimal audio experience with our comprehensive venue analysis.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Sound distribution mapping</li>
                <li>Speaker system optimization</li>
                <li>Reverberation control strategies</li>
              </ul>
            </div>
            
            {/* Industry 3 */}
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Conference Rooms</h3>
              <p className="mb-4">
                Improve speech intelligibility and reduce fatigue in your meeting spaces with tailored acoustic solutions.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Voice clarity optimization</li>
                <li>Video conferencing acoustics</li>
                <li>Echo and reverberation control</li>
              </ul>
            </div>
            
            {/* Industry 4 */}
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Residential AV Installers</h3>
              <p className="mb-4">
                Provide your clients with data-driven acoustic solutions for home theaters and listening rooms.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Room optimization services</li>
                <li>Speaker placement analysis</li>
                <li>Custom treatment recommendations</li>
              </ul>
            </div>
            
            {/* Industry 5 */}
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Restaurants & Hospitality</h3>
              <p className="mb-4">
                Create comfortable acoustic environments that enhance the dining and social experience.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Noise level management</li>
                <li>Background music optimization</li>
                <li>Zoned acoustic environments</li>
              </ul>
            </div>
            
            {/* Industry 6 */}
            <div className="bg-white p-8 rounded shadow-sm">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Educational Facilities</h3>
              <p className="mb-4">
                Enhance learning environments with acoustic solutions that improve speech intelligibility and reduce distractions.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Classroom acoustic optimization</li>
                <li>Lecture hall sound design</li>
                <li>Multi-purpose space solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="heading-lg text-center mb-12">Our Business Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">RoomTune Pro</h3>
              <p>
                Our comprehensive software solution for acoustic professionals, featuring advanced AR scanning, detailed analysis, and simulation capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">Consulting Services</h3>
              <p>
                Expert acoustic consulting from our team of professionals, providing custom solutions for your specific needs and challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="heading-md mb-4">API Integration</h3>
              <p>
                Incorporate our acoustic analysis technology into your own software applications with our developer-friendly API.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-wide text-center">
          <h2 className="heading-lg mb-8">
            Become a RoomTune Partner
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our growing network of acoustic consultants, AV integrators, and technology partners.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/partners" className="btn-primary bg-white text-primary">
              Partner Program
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