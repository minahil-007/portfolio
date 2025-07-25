import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <title>My Portfolio</title>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100 text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
