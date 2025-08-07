"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Server, Layers, PenTool } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className='h-8 w-8 text-primary' />,
      skills: [
        'C++',
        'JavaScript',
        'TypeScript',
        'C',
        'SQL',
        'Data Structures',
        'Algorithms',
      ],
    },
    {
      title: 'Frontend',
      icon: <Globe className='h-8 w-8 text-primary' />,
      skills: [
        'React.js',
        'Next.js',
        'Redux',
        'Tailwind CSS',
        'SASS',
        'Angular',
      ],
    },
    {
      title: 'Backend',
      icon: <Server className='h-8 w-8 text-primary' />,
      skills: ['Node.js', 'Express.js', 'Django', 'GraphQL'],
    },
    {
      title: 'Databases',
      icon: <Database className='h-8 w-8 text-primary' />,
      skills: ['MongoDB', 'PostgreSQL', 'Supabase'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Layers className='h-8 w-8 text-primary' />,
      skills: ['AWS', 'S3', 'AWS Transcribe', 'Docker', ' CI/CD'],
    },
    {
      title: 'Tools & Others',
      icon: <PenTool className='h-8 w-8 text-primary' />,
      skills: ['Git', 'Prisma ORM', 'WebSocket'],
    },
  ];

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
  }

  return (
    <section id="skills" className="py-20 bg-gray-950/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. Here's a comprehensive list of my
            technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gray-800 rounded-lg mr-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
