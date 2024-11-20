import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web" },
      { label: "Mobile Apps", href: "/services/mobile" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "Consulting", href: "/services/consulting" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Imprint", href: "/imprint" }
    ]
  }
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/codana",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    label: "GitHub",
    href: "https://github.com/codana",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    label: "Twitter",
    href: "https://twitter.com/codana",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900/80 backdrop-blur-lg border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="CuriosityAI Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-sm leading-6 text-gray-400">
              Creating innovative software solutions that transform businesses. 
              Based in Heilbronn, serving clients worldwide.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-red-600"
                  whileHover={{ scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(0, 2).map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm leading-6 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              {footerLinks.slice(2).map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm leading-6 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Codana GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}