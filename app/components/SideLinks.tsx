'use client'
import Link from 'next/link'

export function SideLinks() {
  return (
    <div className="flex justify-left items-center">
      <div className="flex justify-end w-14">
        <h2 className="-rotate-90">projects</h2>
      </div>
      <div className="flex flex-col sm:text-xl md:text-7xl gap-6">
        <div className="group">
          <Link
            href="https://fed22m-exjobb-eli-ennab.vercel.app/sv"
            target="_blank"
            className="road-link dark:text-gray group-hover:dark:text-white group-hover:-translate-y-1 group-hover:scale-110 ease-in-out duration-300"
          >
            nioosha shams
          </Link>
          <div className="info md:hidden group-hover:block">
            <p className="text-base">
              degree project and multilingual website integrated the headless
              cms Storyblok, TypeScript, React, Next.js 14, Firebase Auth,
              Firebase Firestore and Vanilla Extract CSS
            </p>
          </div>
        </div>
        <div className="group">
          <Link
            href="https://damoviedatabase.netlify.app/"
            target="_blank"
            className="road-link hover:orange dark:text-gray group-hover:dark:text-white group-hover:-translate-y-1 group-hover:scale-110 ease-in-out duration-300"
          >
            the movie database
          </Link>
          <div className="info md:hidden group-hover:block">
            <p className="text-base">
              assessment project fetching data from the TMDB database, written
              in TypeScript and React using Axios and Bootstrap
            </p>
          </div>
        </div>
        <div className="group">
          <Link
            href="https://hangrymap.netlify.app/"
            target="_blank"
            className="road-link dark:text-gray group-hover:dark:text-white group-hover:-translate-y-1 group-hover:scale-110 ease-in-out duration-300"
          >
            hangry map
          </Link>
          <div className="info md:hidden group-hover:block">
            <p className="text-base">
              group assessment project using the Google Map API, with a solid
              toolbox of TypeScript, React, Axios, Bootstrap, Firebase Auth,
              Firebase Firestore
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
