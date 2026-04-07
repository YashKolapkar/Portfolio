import React from 'react'
import { FaJava, FaCss3, FaHtml5, FaJs, FaReact, FaAws,} from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiJenkins, SiGit, SiDocker, SiKubernetes} from 'react-icons/si'

const skills = [
  { label: 'Java', icon: FaJava, color: '#f89820' },
  { label: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
  { label: 'React', icon: FaReact, color: '#61dafb' },
  { label: 'HTML5', icon: FaHtml5, color: '#e34f26' },
  { label: 'CSS3', icon: FaCss3, color: '#1572b6' },
  { label: 'JavaScript', icon: FaJs, color: '#f7df1e' },
  { label: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { label: 'Jenkins', icon: SiJenkins, color: '#FFFFFF' },
  { label: 'AWS', icon: FaAws, color: '#E6BF00' },
  { label: 'Git', icon: SiGit, color: '#E62600' },
  { label: 'Docker', icon: SiDocker, color: '#0066CC' },
  { label: 'Kubernetes', icon: SiKubernetes, color: '0066CC' },

]

const Skills = () => {
  return (
    <section
      id="Skills"
      className="relative min-h-screen w-full overflow-hidden px-6 py-10 text-white md:px-10 md:py-12"
    >
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-slate-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] space-y-6">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">Skills</h1>
          <p className="max-w-3xl text-sm text-slate-300 md:text-base">
            Tools and technologies I use daily to build responsive, accessible, and modern web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.label}
                className="flex items-center gap-4 rounded-full bg-white/5 px-5 py-4 transition duration-300 hover:bg-cyan-500/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/80 text-white">
                  <Icon color={skill.color} size={28} />
                </span>
                <div>
                  <h2 className="text-lg font-semibold md:text-xl">{skill.label}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
