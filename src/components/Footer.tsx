import {} from '@heroicons/react/24/outline';
import { Icon } from 'lucide-react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    href: 'https://github.com/Vigyansh',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    href: 'https://www.linkedin.com/in/vigyansh-chugh-934aa29b/',
  },
  // {
  //   name: 'Instagram',
  //   icon: <Instagram className="w-6 h-6" />,
  //   href: 'https://twitter.com/yourusername',
  // },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-400 via-black to-slate-700 backdrop-blur-xl py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl text-slate-200">
              © {new Date().getFullYear()} Vigyansh Chugh
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 border border-slate-600 rounded-full hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)]"
              >
                {social.icon}
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
