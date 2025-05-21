'use client';
import Image from 'next/image';

interface BrowserMockupProps {
  imageSrc: string;
  alt: string;
  height?: string; // Tailwind height class, e.g. "h-64", "h-96"
  objectPosition?: string; // Optional: e.g. "object-top", "object-center"
}

export default function BrowserMockup({
  imageSrc,
  alt,
  height = 'h-64',
  objectPosition = 'object-top',
}: BrowserMockupProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200">
      {/* Fake browser tab bar */}
      <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100 border-b border-slate-200">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div className={`relative w-full ${height}`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${objectPosition} rounded-b-xl`}
        />
      </div>
    </div>
  );
}
