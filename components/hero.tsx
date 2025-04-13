"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex flex-col justify-center pt-16 pb-12 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl'></div>
      <div className='absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl'></div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative'
        >
          <div className='absolute -top-10 -left-10 w-20 h-20 border border-primary/20 rounded-full'></div>
          <div className='absolute -bottom-10 -right-10 w-20 h-20 border border-primary/20 rounded-full'></div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
            Hi, I'm <span className='gradient-text'>Yash Diwaker</span>
          </h1>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-300'>
            <span className='relative'>Full Stack Developer</span>
          </h2>
          <p className='text-lg text-gray-400 mb-8 max-w-xl'>
            Specialized in building robust web applications with React, Node.js,
            and AWS. Passionate about creating efficient, scalable, and
            user-friendly solutions.
          </p>

          <div className='flex flex-wrap gap-4 mb-8'>
            <Link href='#contact'>
              <Button
                size='lg'
                className='rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-primary/20'
              >
                Contact Me
              </Button>
            </Link>
            <Link href='#projects'>
              <Button
                variant='outline'
                size='lg'
                className='rounded-full border-gray-700 hover:bg-gray-800/50'
              >
                View Projects
              </Button>
            </Link>
          </div>

          <div className='flex space-x-4'>
            <Link
              href='https://linkedin.com/in/yashdiwaker'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-primary transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 hover:scale-110 transform transition-transform'
            >
              <Linkedin size={24} />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              href='https://github.com/NoobCoderY'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-primary transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 hover:scale-110 transform transition-transform'
            >
              <Github size={24} />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href='mailto:yashdiwaker74@gmail.com'
              className='text-gray-400 hover:text-primary transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 hover:scale-110 transform transition-transform'
            >
              <Mail size={24} />
              <span className='sr-only'>Email</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='relative hidden lg:block'
        >
          <div className='absolute -top-10 -left-10 w-40 h-40 border border-primary/20 rounded-full animate-pulse-slow'></div>
          <div
            className='absolute -bottom-10 -right-10 w-40 h-40 border border-primary/20 rounded-full animate-pulse-slow'
            style={{ animationDelay: '1s' }}
          ></div>

          <div className='w-full h-[400px] rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-gray-800 p-1 shadow-xl shadow-purple-900/10'>
            <div className='w-full h-full rounded-xl bg-gray-900/80 flex items-center justify-center overflow-hidden relative'>
              {/* Decorative code elements */}
              <div className='absolute top-6 left-6 text-xs text-gray-500 font-mono'>
                <div>import &#123; Developer &#125; from 'skills';</div>
                <div>const yash = new Developer();</div>
              </div>

              <div className='absolute bottom-6 right-6 text-xs text-gray-500 font-mono'>
                <div>yash.code();</div>
                <div>// Building amazing web apps</div>
              </div>

              <div className='animate-float'>
                <div className='text-center p-8'>
                  <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-purple-900/20'>
                    YD
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>Yash Diwaker</h3>
                  <p className='text-gray-400 mb-4'>Full Stack Developer</p>
                  <div className='flex justify-center space-x-2'>
                    <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300'>
                      React
                    </span>
                    <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300'>
                      Node.js
                    </span>
                    <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300'>
                      AWS
                    </span>
                    <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300'>
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className='absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl'></div>
          <div className='absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl'></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block'
      >
        <Link href='#about'>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full animate-bounce'
            aria-label='Scroll down'
          >
            <ArrowDown size={20} />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
