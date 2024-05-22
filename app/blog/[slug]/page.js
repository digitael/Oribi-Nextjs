import Link from 'next/link';

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
      <Link href={'/blog'}>Back</Link>
    </main>
  );
}
