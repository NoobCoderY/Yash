import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold gradient-text">
              Yash Diwaker
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://linkedin.com/in/yashdiwaker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://github.com/NoobCoderY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
            <Link
              href="mailto:yashdiwaker74@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Yash Diwaker. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-500">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
