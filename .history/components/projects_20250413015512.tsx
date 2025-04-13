"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
   
    {
      title: "Quiz Application",
      description:
        "An interactive quiz platform allowing users to create, share, and participate in quizzes across various categories. Features include leaderboards, timed quizzes, and result analytics.",
      image: "/placeholder.svg?height=300&width=500",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Redux",
        "Socket.io",
        "JWT Authentication",
        "Mongoose",
        "Tailwind CSS",
        "React Hook Form",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "K.I.M.",
      description:
        "A Speech-to-text and content synthesis platform with hierarchical management of companies, departments, and projects.",
      image: "/placeholder.svg?height=300&width=500",
      tags: [
        "React.js",
        "Redux",
        "Vite",
        "Django",
        "AWS Transcribe",
        "PostgreSQL",
        "Mistral AI",
        "FFMPEG",
        "Mailjet",
        "AWS S3",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Drivo",
      description:
        "A ride-hailing platform with real-time ride tracking, flexible pricing, and geolocation services using WebSocket and Google Maps API.",
      image: "/placeholder.svg?height=300&width=500",
      tags: [
        "React.js",
        "Redux",
        "Vite",
        "Node.js",
        "Express.js",
        "WebSocket",
        "MongoDB",
        "Google Maps API",
        "Tailwind CSS",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Twaddle",
      description:
        "A social platform enabling users to post text, images, and videos, follow others, and view personalized feeds using GraphQL and Prisma ORM.",
      image: "/placeholder.svg?height=300&width=500",
      tags: [
        "TypeScript",
        "React-Query",
        "Tailwind CSS",
        "Next.js",
        "AWS",
        "JSON Web Tokens",
        "Prisma ORM",
        "Google OAuth",
        "GraphQL",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "Codegen",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Burger Wala",
      description:
        "A food ordering platform with features for both end-users and admins, including online payment integration with Razorpay.",
      image: "/placeholder.svg?height=300&width=500",
      tags: [
        "React",
        "Redux",
        "Framer Motion",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Passport.js",
        "Razorpay",
        "Chart.js",
      ],
      github: "#",
      demo: "#",
    },
  ]

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
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, API
            integration, and user experience design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
