import React from 'react'
import avatarImg from '../../assets/avatarImg.png'

const Home = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden px-6 py-12 text-white md:px-12 lg:py-12">
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-8 lg:w-[55%]">
          <div className="space-y-4">
            <p className="text-base uppercase tracking-[0.2em] font-semibold text-cyan-400">Java Fullstack Developer</p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Hello, I am Yash Kolapkar
            </h1>
          </div>  

          <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Java Developer with more than 4 years of experience delivering robust backend solutions using Spring Boot.
            Proven ability to work across complex systems in Agile and DevOps environments
          </p>


          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-xl">
            <div className="rounded-3xl bg-white/5 px-5 py-4 text-slate-200">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Experience</p>
              <p className="mt-2 text-lg font-semibold">4+ years delivering enterprise-grade full stack solutions</p>
            </div>
            <div className="rounded-3xl bg-white/5 px-5 py-4 text-slate-200">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Tools</p>
              <p className="mt-2 text-lg font-semibold">Java, Spring Boot, React, MySql, JavaScript</p>
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