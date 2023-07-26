'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Typed from 'typed.js';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ 'Full Stack Developer', 'Node.js Developer', 'React.js Developer', 'Full Stack Developer'],
      typeSpeed: 75,
      backSpeed: 75,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      smartBackspace: true,
      // loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center bg-glass pb-6 pt-8   lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p> */}
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:blur-2xl after:content-[''] before:lg:h-[360px]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <div className='text-5xl font-bold text-green-300 m-2'>
          Hi, I am Abishek Kumar
        </div>
        <div className='mb-4'>
          <span ref={el} className='text-green-300 text-4xl'/>
        </div>
      </div>

      <div className='text-green-300 text-left w-full text-2xl'>
        <div>Portfolio</div>
      </div>
      <div className=" grid lg:mb-0 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <Link href="/weather"
          className="weather group rounded-lg border transition-colors"
          >
          <h2 className={`py-12 px-16 text-2xl text-slate-50 font-semibold rounded-lg h-full w-full text-xy-center hover:bg-glass`}>
            Weather{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          </Link>
          <Link href="/calculator"
          className="calculator group rounded-lg border transition-colors"
          >
          <h2 className={`py-12 px-16 text-2xl text-slate-50 font-semibold rounded-lg h-full w-full text-xy-center hover:bg-glass`}>
            Calculator{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          </Link>
          <Link href="/rpsls"
          className="rpsls group rounded-lg border transition-colors"
          >
          <h2 className={`py-12 px-16 text-2xl text-slate-50 font-semibold rounded-lg h-full w-full text-xy-center hover:bg-glass`}>
            Rock Paper{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          </Link>
          <Link href="/tictactoe"
          className="weather group rounded-lg border transition-colors"
          >
          <h2 className={`py-12 px-16 text-2xl text-slate-50 font-semibold rounded-lg h-full w-full text-xy-center hover:bg-glass`}>
            Tic Tac Toe{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          </Link>

        {/* <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a> */}
      </div>
    </main>
  )
}
