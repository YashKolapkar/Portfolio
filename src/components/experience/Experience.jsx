import React from 'react'
import ExperienceImg from '../../assets/ExperienceImg.png'
import amdocsLogo from '../../assets/amdocs_logo.png'
import yashTechLogo from '../../assets/yash_tech_logo.png'
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const Experience = () => {
  return (
    <section className="relative min-h-screen h-full w-full overflow-hidden px-6 text-white md:px-12 lg:py-12">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8">
        {/* Top - Header */}
        <div className="lg:w-full">
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">Experience</h2>
          <p className="text-sm text-slate-300 md:text-base mt-2">
            A snapshot of roles where I delivered product improvements, collaboration, and technical leadership.
          </p>
        </div>

        {/* Bottom - Image and Details on same line */}
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start">
          <img
            className="w-full h-auto max-h-[280px] sm:max-h-[320px] lg:max-h-[360px] lg:w-[45%] rounded-[28px] object-contain"
            src={ExperienceImg}
            alt="Experience illustration"
          />

          <div className="space-y-6">
            {[
              {
                title: 'Senior Software Engineer',
                company: 'Yash Tech',
                logo: yashTechLogo,
                duration: 'Jan-2026 to Current',
                description:
                  'Led full-stack feature delivery, improved application performance, and mentored frontend teams across React and Tailwind workflows.',
              },
              {
                title: 'Software Developer',
                company: 'Amdocs',
                logo: amdocsLogo,
                duration: 'Jan-2024 to Dec-2025',
                description:
                  'Built reusable UI components, collaborated on REST APIs, and supported a smooth rollout of responsive web experiences.',
              },
              {
                title: 'Associate Software Engineer',
                company: 'Amdocs',
                logo: amdocsLogo,
                duration: 'Jul-2022 to Dec-2023',
                description:
                  'Contributed to code reviews, automated test coverage, and helped streamline development processes for faster releases.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="space-y-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start gap-4">
                  <VscDebugBreakpointLogUnverified size={24} className="mt-0.5 text-cyan-400" />
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className="h-10 w-10 rounded-lg border border-white/10 bg-white object-contain"
                      />
                      <div>
                        <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                        <p className="text-xs text-slate-400">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-xs text-cyan-300">{item.duration}</p>
                    <p className="text-xs text-slate-300">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
