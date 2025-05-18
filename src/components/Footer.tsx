import {} from '@heroicons/react/24/outline';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
  },
];

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-300">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
