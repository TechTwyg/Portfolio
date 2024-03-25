"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Design from "../../public/design.png";
import Code from "../../public/code.png";
import Test from "../../public/test.png";
import Deployment from "../../public/deploy.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main
        className={`px-10 md:px-20 lg:px-40 ${
          darkMode ? "dark:bg-gray-800" : "bg-white"
        }`}
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-medium dark:text-white">STAN</h1>
            <ul className="flex items-center gap-10">
              <li>
                <BsFillMoonStarsFill
                  onClick={toggleDarkMode}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li className="text-sm px-4 py-2 rounded">
                <a
                  className="block text-white bg-gradient-to-r from-purple-900 to-purple-600 rounded px-4 py-2"
                  href="https://docs.google.com/document/d/1rRCPNJogLaSJLsk8CjlXGh2m9Mcn_xD3Jp6XLbqNjjA/edit?usp=sharing"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl text-purple-800 font-medium py-2 md:text-6xl">
              Stanley Dix
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl md:py-8 dark:text-white">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              An up and coming software engineer ready to take the tech world by
              storm. Ctrl + S: saving lives (and code) one line at a time!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-purple-800 py-2 md:text-6xl">
            <a href="https://www.linkedin.com/in/stanley-dix-8490a2255/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/TechTwyg">
              <FaGithub />
            </a>
          </div>

          <div className="text-center pt-32">
            <h2 className="text-3xl text-center dark:text-white">Skills</h2>
          </div>
          <div className="lg:flex gap-10">
            <div className="shadow-2xl p-10 rounded-xl my-10  bg-white flex-1 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={Design}
                width={100}
                height={100}
                alt="Design"
              />
              <h3 className="text-lg font-semibold pt-8 pb-2 dark:text-white ">
                Front End
              </h3>
              <p className="py-2 dark:text-white">
                I'm passionate about crafting exceptional web experiences.
              </p>
              <p className="py-2 dark:text-white">With skills in: </p>
              <ul className="py-2 marker:text-purple-800 list-disc list-inside dark:text-white">
                <li>React</li>
                <li>Next.js,</li>
                <li>Tailwind CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Vite</li>
              </ul>
              <p className="py-2 dark:text-white">
                Whether it's building dynamic interfaces with React, styling
                with Tailwind CSS, or ensuring code quality with TypeScript, I
                love bringing ideas to life.
              </p>
            </div>
            <div className="shadow-2xl p-10 rounded-xl my-10  bg-white flex-1 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={Deployment}
                width={100}
                height={100}
                alt="Code"
              />
              <h3 className="text-lg font-semibold pt-8 pb-2 dark:text-white ">
                Deployment
              </h3>
              <p className="py-2 dark:text-white">
                I specialize in deploying scalable and resilient applications to
                ensure seamless user experiences.
              </p>
              <p className="py-2 dark:text-white">With skills in: </p>
              <ul className="py-2 marker:text-purple-800 list-disc list-inside dark:text-white">
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Systemd</li>
                <li>Kubernetes</li>
              </ul>

              <p className="py-2 dark:text-white">
                Leveraging Docker and Docker Compose, I containerize
                applications for consistency across different environments.
                systemd helps me manage and monitor services efficiently, while
                Kubernetes orchestrates containerized workloads for high
                availability and scalability.
              </p>
            </div>
            <div className="shadow-2xl p-10 rounded-xl my-10  bg-white flex-1 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={Code}
                width={100}
                height={100}
                alt="Code"
              />
              <h3 className="text-lg font-semibold pt-8 pb-2 dark:text-white">
                Back End
              </h3>
              <p className="py-2 dark:text-white">
                I thrive on building robust backend systems to complement
                frontend experiences.
              </p>
              <p className="py-2 dark:text-white">With skills in: </p>
              <ul className="py-2 marker:text-purple-800 list-disc list-inside dark:text-white">
                <li>Python</li>
                <li>Django</li>
                <li>MySQL</li>
                <li>Scala</li>
              </ul>
              <p className="py-2 dark:text-white">
                Whether it's creating scalable web applications with Django or
                designing efficient database schemas with MySQL, I'm dedicated
                to delivering high-quality solutions.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="shadow-2xl p-10 pb-14 rounded-xl my-10  bg-white flex-1 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={Test}
                width={100}
                height={100}
                alt="Test"
              />
            </div>
            <div className="shadow-2xl p-10 pb-14 rounded-xl my-10  bg-white flex-1 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={Test}
                width={100}
                height={100}
                alt="Test"
              />
            </div>
            <div className="shadow-2xl p-10 pb-14 rounded-xl my-10  bg-white flex-1 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={Test}
                width={100}
                height={100}
                alt="Test"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
