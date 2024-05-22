import Link from 'next/link';

export default function AboutPage() {
  console.log('Executing About page');
  return (
    <main>
      <img src='/logo.png' alt='A server surrounded by magic sparkles.' />
      <h1>This is the About page</h1>
      <p>🔥 what a day! 🔥</p>
      <p>
        <Link href='/'>Back Home</Link>
      </p>
    </main>
  );
}
