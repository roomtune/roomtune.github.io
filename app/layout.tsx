import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RoomTune - AR-Based Acoustic Simulation for Perfect Sound',
  description: 'Transform your listening experience with RoomTune\'s AR-based acoustic simulation technology.',
  keywords: 'RoomTune, acoustic simulation, AR, audio technology, sound optimization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 