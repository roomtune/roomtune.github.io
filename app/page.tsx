import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomepageExperience from '@/components/home/HomepageExperience';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <Header />
      <HomepageExperience />
      <Footer />
    </main>
  );
}