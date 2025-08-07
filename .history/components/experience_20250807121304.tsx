'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'BaryTech Pvt. Ltd',
      position: 'Full Stack Developer',
      period: 'Feb 2024 – Present',
      description: [
        'Designed and delivered a full-stack transcription and summarization platform using React, Django, and AWS.',
        'Increased transcription efficiency by 40% through advanced integrations with AWS S3 and AWS Transcribe.',
        'Enhanced platform scalability by 30%, collaborating with cross-functional teams on performance optimization.',
        'Developed a comprehensive video service with MP4 to HLS conversion, multi-resolution streaming, and adaptive bitrate support.',
      ],
    },
    {
      company: 'Geekers Brain Pvt. Ltd',
      position: 'MERN Stack Developer',
      period: 'Oct 2023 – Feb 2024',
      description: [
        'Delivered 3 scalable applications with the MERN stack.',
        'Optimized APIs for AWS-hosted solutions, enhancing backend efficiency by 15%.',
      ],
    },
    {
      company: 'Simplem Solutions',
      position: 'MERN Stack Developer',
      period: 'Jun 2023 – Oct 2023',
      description: [
        'Constructed robust LMS web applications with efficient SQL database integrations, enhancing user data retrieval by 20%.',
        'Implemented responsive front-end designs to improve the mobile experience for over 500 daily users.',
      ],
    },
    {
<<<<<<< HEAD
      company: 'LueurTech Software Solutions',
      position: 'MERN Stack Intern',
      period: 'Feb 2023 – May 2023',
      description: [
        'Built an interior design website using React, Tailwind CSS, Firebase, Node.js, Express.js, and MongoDB.',
        'Used Firebase Analytics to identify and resolve 50+ user issues post-launch.',
      ],
    },
  ];

  return (
    <section
      id='experience'
      className='py-20 bg-gray-950/50'
    >
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className='text-center mb-16'
        >
          <h2 className='text-3xl font-bold mb-4'>
            Work <span className='gradient-text'>Experience</span>
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-8 rounded-full'></div>
          <p className='text-lg text-gray-400 max-w-3xl mx-auto'>
            My professional journey includes working with various companies
            where I've contributed to building scalable and efficient web
            applications.
          </p>
        </motion.div>

        <div className='space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group'
            >
              <div className='flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10'>
                <Calendar size={20} />
              </div>

              <div className='w-full md:w-[calc(50%-2.5rem)] p-4 rounded-lg'>
                <Card className='bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div className='flex flex-wrap justify-between items-center mb-2'>
                      <h3 className='text-xl font-bold'>{exp.company}</h3>
                      <Badge
                        variant='outline'
                        className='ml-2'
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <h4 className='text-lg font-semibold text-primary mb-4'>
                      {exp.position}
                    </h4>
                    <ul className='space-y-2'>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className='text-gray-400 flex items-start'
                        >
                          <span className='mr-2 text-primary'>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
