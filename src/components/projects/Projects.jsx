import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    name: 'Payroll Management',
    description: 'A comprehensive payroll management system with employee tracking, salary calculation, and automated payslip generation. Features include attendance management, tax deductions, and reporting dashboard.',
    github: 'https://github.com/yourusername/payroll-management',
    tags: ['React', 'Spring Boot', 'MySQL', 'AWS']
  },
  {
    id: 2,
    name: 'E-Commerce Platform',
    description: 'Full-featured e-commerce application with product catalog, shopping cart, payment integration, and order management. Includes admin dashboard for inventory and sales analytics.',
    github: 'https://github.com/yourusername/ecommerce-platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 3,
    name: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team workspaces, kanban boards, and deadline tracking. Features include notifications and progress reporting.',
    github: 'https://github.com/yourusername/task-management',
    tags: ['React', 'Firebase', 'Material UI']
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'Personal portfolio showcasing skills, experience, and projects. Built with modern React practices, featuring smooth animations and responsive design.',
    github: 'https://github.com/yourusername/portfolio',
    tags: ['React', 'Tailwind CSS', 'Vite']
  }
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 py-15 text-white md:px-10 md:py-10"
    >
      {/* Background decorative elements */}
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] space-y-6">
        {/* Section Header */}
        <div className="space-y-3">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">Projects</h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            A collection of projects I've worked on, showcasing my skills in full-stack development, 
            cloud technologies, and modern web applications.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Project Content */}
              <div className="space-y-4">
                {/* Project Name */}
                <h2 className="text-xl font-semibold text-white md:text-2xl group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h2>
                
                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white group-hover:translate-x-1"
              >
                <FaGithub className="text-lg" />
                <span>View on GitHub</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
