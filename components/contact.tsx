'use client';

import React from 'react';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
    } catch {
      setError(
        'Failed to send message. Please try again or email me directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-light flex min-h-screen items-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-semibold">Contact Me</h2>

        <div className="mx-auto max-w-lg">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-[var(--section-border)] bg-[var(--section-card)] p-12 text-center">
              <CheckCircle className="mb-4 h-12 w-12" />
              <h4 className="mb-2 text-xl font-semibold">Message Sent!</h4>
              <p className="text-[var(--section-muted)]">
                {"Thanks for reaching out. I'll get back to you soon!"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="border-[var(--section-border)] bg-[var(--section-card)] text-[var(--section-fg)] placeholder:text-[var(--section-muted)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="border-[var(--section-border)] bg-[var(--section-card)] text-[var(--section-fg)] placeholder:text-[var(--section-muted)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="border-[var(--section-border)] bg-[var(--section-card)] text-[var(--section-fg)] placeholder:text-[var(--section-muted)] resize-none"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--section-fg)] text-[var(--section-bg)] hover:bg-[var(--section-fg)]/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
