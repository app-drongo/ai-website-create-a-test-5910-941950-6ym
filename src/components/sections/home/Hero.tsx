// components/hero/SplitHero.tsx
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
Hero.displayName = 'Hero'
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Hero = () => {
    router.push('/trial');
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              New: Cloud DevOps Platform
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Accelerate Your Cloud
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Development Pipeline
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Streamline your development workflow with automated CI/CD, infrastructure as code, and
              intelligent monitoring - all in one platform.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                'Automated CI/CD Pipeline',
                'Infrastructure as Code',
                'Real-time Monitoring',
                'Zero-downtime Deployment',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group px-7 text-base"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5" /> View Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/dashboard-preview.jpg"
                  alt="Acme Tech DevOps dashboard showing deployment metrics"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                Enterprise Dashboard
              </div>
            </div>

            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Deployment Time</p>
              <p className="text-sm">
                <span className="font-semibold">-65%</span> Faster
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Cost Savings</p>
              <p className="text-sm">
                <span className="font-semibold">40%</span> Average
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
