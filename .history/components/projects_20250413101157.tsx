'use client';

import { useState, useRef, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('all');
  const [expandedTags, setExpandedTags] = useState<Record<number, boolean>>({});

  const toggleTags = (index: number) => {
    setExpandedTags((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const projects = [
    // ... your projects array remains the same
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
      className='py-16 overflow-hidden'
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
                  <Card className='h-[320px] bg-gradient-to-br from-gray-900/90 to-gray-800/80 border-gray-800 hover:border-primary/40 transition-all duration-300 overflow-hidden group relative flex flex-col'>
                    <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                    <div className='relative h-32 overflow-hidden flex-shrink-0'>
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

                    <CardContent className='p-4 flex flex-col flex-grow'>
                      <div className='flex-grow'>
                        <p className='text-gray-300 text-sm mb-3 line-clamp-2 h-10'>
                          {project.description}
                        </p>

                        <div className='flex flex-wrap gap-1.5 mb-3 min-h-[60px]'>
                          {expandedTags[i] ? (
                            project.tags.map((tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                              <Badge
                                key={index}
                                variant='secondary'
                                className='text-xs px-1.5 py-0.5 bg-gray-800/80'
                              >
                                {tag}
                              </Badge>
                            ))
                          ) : (
                            <>
                              {project.tags.slice(0, 3).map((tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                                <Badge
                                  key={index}
                                  variant='secondary'
                                  className='text-xs px-1.5 py-0.5 bg-gray-800/80'
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {project.tags.length > 3 && (
                                <Badge
                                  variant='outline'
                                  className='text-xs px-1.5 py-0.5 cursor-pointer'
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleTags(i);
                                  }}
                                >
                                  +{project.tags.length - 3} more
                                </Badge>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                      <div className='flex justify-between mt-auto'>
                        <Link
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-full mr-1'
                        >
                          <Button
                            variant='ghost'
                            size='sm'
                            className='h-8 px-2.5 w-full'
                          >
                            <Github className='h-3.5 w-3.5 mr-1' />
                            Code
                          </Button>
                        </Link>
                        <Link
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='w-full ml-1'
                        >
                          <Button
                            size='sm'
                            className='h-8 px-2.5 bg-primary/90 hover:bg-primary w-full'
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
              <Link
                href='#'
                className='group inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors'
              >
                View all projects
                <ArrowRight className='ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
