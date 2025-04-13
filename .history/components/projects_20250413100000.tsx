'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;

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
      github: '#',
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
      github: '#',
      demo: '#',
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
      github: '#',
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
      github: '#',
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
      github: '#',
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
      github: '#',
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
      github: '#',
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

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const displayedProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id='projects'
      className='py-16'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className='text-center mb-10'
        >
          <h2 className='text-3xl font-bold mb-3'>
            My <span className='gradient-text'>Projects</span>
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6 rounded-full'></div>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development.
          </p>
        </motion.div>

        <Tabs
          defaultValue='all'
          value={activeTab}
          onValueChange={setActiveTab}
          className='mb-8'
        >
          <div className='flex justify-center mb-6'>
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
            className='mt-0'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
              {displayedProjects.map((project, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <Card className='bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden group'>
                    <div className='relative h-40 overflow-hidden'>
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300'></div>
                    </div>
                    <CardContent className='p-5'>
                      <h3 className='text-lg font-bold mb-2'>
                        {project.title}
                      </h3>
                      <p className='text-gray-400 text-sm mb-3 line-clamp-2'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap gap-1.5'>
                        {project.tags.slice(0, 5).map((tag, index) => (
                          <Badge
                            key={index}
                            variant='secondary'
                            className='text-xs px-1.5 py-0.5'
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && (
                          <Badge
                            variant='outline'
                            className='text-xs px-1.5 py-0.5'
                          >
                            +{project.tags.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className='p-5 pt-0 flex justify-between'>
                      <Link
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Button
                          variant='outline'
                          size='sm'
                        >
                          <Github className='mr-1.5 h-3.5 w-3.5' />
                          Code
                        </Button>
                      </Link>
                      <Link
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Button size='sm'>
                          <ExternalLink className='mr-1.5 h-3.5 w-3.5' />
                          Demo
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className='flex justify-center items-center mt-8 gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                >
                  <ChevronLeft className='h-4 w-4' />
                </Button>
                <span className='text-sm'>
                  {currentPage + 1} / {totalPages}
                </span>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
