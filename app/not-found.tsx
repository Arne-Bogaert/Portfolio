import Link from 'next/link';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section-light flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 rounded-full bg-muted p-6">
        <FileQuestion className="h-12 w-12 text-foreground" />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mb-8 max-w-125 text-lg text-muted-foreground">
        Sorry, we couldn't find the page you're looking for. It might have been
        moved or deleted.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-foreground px-6 py-3 font-medium text-background transition-transform hover:scale-105 hover:bg-foreground/90"
      >
        Back to Home
      </Link>
    </div>
  );
}
