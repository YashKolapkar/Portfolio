import React from 'react'
import avatarImg from '../../assets/avatarImg.png'

const Home = () => {
  return (
    <section className="relative h-full w-full overflow-hidden px-6 py-16 text-white md:px-12 lg:py-20">
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-8 lg:w-[55%]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Java Fullstack Developer</p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Hello, I am Yash
            </h1>
          </div>

          <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            I build elegant, responsive web interfaces using React and Tailwind CSS. My focus is on clean design, fast performance, and strong user experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-400 md:text-base">
              Contact Me
            </button>
            <button className="rounded-full border border-white/20 px-8 py-3 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:text-white md:text-base">
              View Projects
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-xl">
            <div className="rounded-3xl bg-white/5 px-5 py-4 text-slate-200">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Experience</p>
              <p className="mt-2 text-lg font-semibold">3+ years building web apps</p>
            </div>
            <div className="rounded-3xl bg-white/5 px-5 py-4 text-slate-200">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Tools</p>
              <p className="mt-2 text-lg font-semibold">React, Tailwind, JavaScript</p>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-[45%]">
          <img
            className="w-full max-w-full max-h-[360px] sm:max-h-[420px] md:max-h-[480px] lg:max-w-[520px] rounded-[28px] object-contain"
            src={avatarImg}
            alt="Avatar image"
          />
        </div>
      </div>
    </section>
  )
}

export default Home