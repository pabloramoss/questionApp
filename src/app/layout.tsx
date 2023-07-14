import type { Metadata } from 'next';

import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'QuestionApp',
  description: 'App to ask questions anonymously',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="m-auto min-h-screen max-w-screen-lg p-4 sm:p-24">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
