"use client";

interface ComingSoonProps {
  headline?: string;
  message?: string;
}

export function MobileComingSoon({
  headline = "📱 Versi Mobile & Tablet Segera Hadir",
  message = "Kami sedang mengoptimalkan pengalaman D.O.A TRTO untuk layar kecil. Untuk sementara, silakan akses situs ini dari perangkat desktop.",
}: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
        {headline}
      </h2>
      <p className="max-w-sm text-sm text-gray-500 md:text-base">{message}</p>
    </div>
  );
}
