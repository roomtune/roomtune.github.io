import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://roomtune.github.io'),
  title: 'RoomTune | Acoustic Intelligence for every space',
  description:
    'RoomTune helps teams scan, simulate, and optimize room acoustics before physical changes are made.',
  keywords: [
    'RoomTune',
    'acoustic intelligence',
    'room acoustics',
    'audio simulation',
    'spatial audio',
    'acoustic optimization',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'RoomTune | Acoustic Intelligence for every space',
    description:
      'Scan rooms, simulate outcomes, and optimize sound with confidence using RoomTune.',
    url: 'https://roomtune.github.io',
    siteName: 'RoomTune',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'RoomTune landing page preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoomTune | Acoustic Intelligence for every space',
    description:
      'RoomTune helps teams scan, simulate, and optimize room acoustics before physical changes are made.',
    images: ['/og-image.svg'],
  },
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