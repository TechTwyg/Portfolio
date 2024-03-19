import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Design from "../../public/design.png";
import Code from "../../public/code.png";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-medium">Stan</h1>
            <ul className="flex items-center gap-10">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="text-sm px-4 py-2 text-white bg-gradient-to-r from-purple-900 to-purple-600 rounded"
                  href="#"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl text-purple-800 font-medium py-2">
              Stanley Dix
            </h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              An up and coming software engineer ready to take the tech world by
              storm. Ctrl + S: saving lives (and code) one line at a time!
            </p>
          </div>
          <div className="text-5xl flex justify-center text-purple-800 font-medium py-2">
            <AiFillLinkedin />
          </div>
          <h2 className="text-xl p-10 text-center">Skills</h2>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                className="mx-auto"
                src={Design}
                width={100}
                height={100}
                alt="Design"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core a
                design theory.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="mx-auto"
                src={Code}
                width={100}
                height={100}
                alt="Code"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
