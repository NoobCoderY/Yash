'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Code,
  Server,
} from 'lucide-react';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function Projects() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      title: 'K.I.M.',
      description:
        'A Speech-to-text and content synthesis platform with hierarchical management of companies, departments, and projects.',
      image: '/placeholder.svg?height=300&width=500',
      tags: [
        'React.js',
        'Redux',
        'Vite',
        'Django',
        'AWS Transcribe',
        'PostgreSQL',
        'Mistral AI',
        'FFMPEG',
        'Mailjet',
        'AWS S3',
      ],
      category: 'fullstack',
      github: {
        fe: '#',
        be: '#',
      },
      demo: '#',
    },
    {
      title: 'Drivo',
      description:
        'A ride-hailing platform with real-time ride tracking, flexible pricing, and geolocation services using WebSocket and Google Maps API.',
      image: '/placeholder.svg?height=300&width=500',
      tags: [
        'React.js',
        'Redux',
        'Vite',
        'Node.js',
        'Express.js',
        'WebSocket',
        'MongoDB',
        'Google Maps API',
        'Tailwind CSS',
      ],
      category: 'fullstack',
      github: {
        fe: '#',
        be: '#',
      },
      demo: 'https://drivo-fe.vercel.app/',
    },
    {
      title: 'Twaddle',
      description:
        'A social platform enabling users to post text, images, and videos, follow others, and view personalized feeds using GraphQL and Prisma ORM.',
      image: '/placeholder.svg?height=300&width=500',
      tags: [
        'TypeScript',
        'React-Query',
        'Tailwind CSS',
        'Next.js',
        'AWS',
        'JSON Web Tokens',
        'Prisma ORM',
        'Google OAuth',
        'GraphQL',
        'Node.js',
        'Supabase',
        'PostgreSQL',
        'Codegen',
      ],
      category: 'fullstack',
      github: {
        fe: '#',
        be: '#',
      },
      demo: '#',
    },
    {
      title: 'Burger Wala',
      description:
        'A food ordering platform with features for both end-users and admins, including online payment integration with Razorpay.',
      image: '/placeholder.svg?height=300&width=500',
      tags: [
        'React',
        'Redux',
        'Framer Motion',
        'Express.js',
        'Node.js',
        'MongoDB',
        'Passport.js',
        'Razorpay',
        'Chart.js',
      ],
      category: 'fullstack',
      github: {
        fe: '#',
        be: '#',
      },
      demo: '#',
    },
    {
      title: 'Crypto Tracker',
      description:
        'A React-based cryptocurrency tracking application featuring live data charts, favorite coin management, and real-time price updates.',
      image: '/placeholder.svg?height=300&width=500',
      tags: [
        'React.js',
        'Redux',
        'Chart.js',
        'CoinGecko API',
        'Axios',
        'Tailwind CSS',
        'React Query',
        'LocalStorage',
        'Vite',
        'Framer Motion',
      ],
      category: 'frontend',
      github: {
        fe: '#',
      },
      demo: '#',
    },
    {
      title: 'E-Commerce Admin Dashboard',
      description:
        'A comprehensive admin dashboard for managing e-commerce orders, products, and customer data with sales analytics.',
      image: '/placeholder.svg?height=300&width=500',
      tags: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'Redux',
        'Chart.js',
        'JWT Authentication',
        'Mongoose',
        'Tailwind CSS',
        'Axios',
        'React Table',
      ],
      category: 'fullstack',
      github: {
        fe: '#',
        be: '#',
      },
      demo: '#',
    },
    {
      title: 'Quiz Application',
      description:
        'An interactive quiz platform allowing users to create, share, and participate in quizzes across various categories.',
      image: '/placeholder.svg?height=300&width=500',
      tags: [
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js',
        'Redux',
        'Socket.io',
        'JWT Authentication',
        'Mongoose',
        'Tailwind CSS',
        'React Hook Form',
      ],
      category: 'fullstack',
      github: {
        fe: '#',
        be: '#',
      },
      demo: '#',
    },
  ];

  // Get unique categories
  const categories = [
    'all',
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount =
        direction === 'left' ? -current.clientWidth : current.clientWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.4,
      },
    }),
  };

  return (
    <section
      id='projects'
      className='overflow-hidden'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className='text-center mb-8'
        >
          <h2 className='text-3xl font-bold mb-3'>
            My <span className='gradient-text'>Projects</span>
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-5 rounded-full'></div>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development.
          </p>
        </motion.div>

        <Tabs
          defaultValue='all'
          value={activeTab}
          onValueChange={setActiveTab}
          className='mb-6'
        >
          <div className='flex justify-center'>
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className='capitalize'
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent
            value={activeTab}
            className='mt-0 relative'
          >
            <div className='absolute -left-4 top-1/2 -translate-y-1/2 z-10'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800 shadow-lg'
                onClick={() => scroll('left')}
              >
                <ChevronLeft className='h-5 w-5' />
                <span className='sr-only'>Scroll left</span>
              </Button>
            </div>

            <div
              ref={carouselRef}
              className='flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar'
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                  className='min-w-[280px] max-w-[280px] snap-start'
                >
                  <Card className='h-[320px] bg-gradient-to-br from-gray-900/90 to-gray-800/80 border-gray-800 hover:border-primary/40 transition-all duration-300 overflow-hidden group relative'>
                   

                    <div className='relative h-32 overflow-hidden'>
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60'></div>
                      <div className='absolute bottom-0 left-0 w-full p-3'>
                        <h3 className='text-lg font-bold text-white drop-shadow-md'>
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <CardContent className='p-4 flex flex-col h-[188px]'>
                      <p className='text-gray-300 text-sm mb-3 line-clamp-2 h-10'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-1.5 h-[40px]'>
                        {project.tags.slice(0, 5).map((tag, index) => (
                          <Badge
                            key={index}
                            variant='secondary'
                            className='text-xs px-1.5 py-0.5 bg-gray-800/80'
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && (
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant='outline'
                                size='sm'
                                className='h-5 text-xs px-1.5 py-0 cursor-pointer'
                              >
                                +{project.tags.length - 5}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className='w-auto p-2 bg-gray-900 border-gray-800'
                              side='top'
                              align='center'
                              sideOffset={5}
                            >
                              <div className='flex flex-wrap gap-1.5 max-w-[250px]'>
                                {project.tags.slice(5).map((tag, index) => (
                                  <Badge
                                    key={index}
                                    variant='secondary'
                                    className='text-xs px-1.5 py-0.5 bg-gray-800/80'
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </PopoverContent>
                          </Popover>
                        )}
                      </div>

                      <div className='flex justify-between mt-auto'>
                        <div className='flex gap-1'>
                          {project.github.fe && (
                            <Link
                              href={project.github.fe}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <Button
                                variant='ghost'
                                size='sm'
                                className='h-8 px-2'
                                title='Frontend Code'
                              >
                                <Code className='h-3.5 w-3.5' />
                                <span className='sr-only'>Frontend Code</span>
                              </Button>
                            </Link>
                          )}
                          {project.github.be && (
                            <Link
                              href={project.github.be}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <Button
                                variant='ghost'
                                size='sm'
                                className='h-8 px-2'
                                title='Backend Code'
                              >
                                <Server className='h-3.5 w-3.5' />
                                <span className='sr-only'>Backend Code</span>
                              </Button>
                            </Link>
                          )}
                        </div>
                        <Link
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Button
                            size='sm'
                            className='h-8 px-2.5 bg-primary/90 hover:bg-primary'
                          >
                            <ExternalLink className='h-3.5 w-3.5 mr-1' />
                            Demo
                          </Button>
                        </Link>
                      </div>
                    </CardContent>

                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none'></div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className='absolute -right-4 top-1/2 -translate-y-1/2 z-10'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800 shadow-lg'
                onClick={() => scroll('right')}
              >
                <ChevronRight className='h-5 w-5' />
                <span className='sr-only'>Scroll right</span>
              </Button>
            </div>

            <div className='flex justify-center mt-6'>
             
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
