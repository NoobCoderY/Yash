"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const stats = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Full Stack Developer",
      description: "Specialized in MERN stack development with AWS integration",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Professional Experience",
      description: "Working with multiple companies on diverse projects",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "B.Tech in Computer Science",
      description: "Harcourt Butler Technical University, Kanpur",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a Full Stack Developer with expertise in building scalable web applications using modern technologies.
            With a strong foundation in computer science and hands-on experience in various companies, I bring a blend
            of technical skills and practical knowledge to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-800 rounded-full">{stat.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
