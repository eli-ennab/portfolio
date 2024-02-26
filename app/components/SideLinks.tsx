'use client'
import Link from 'next/link'

export function SideLinks() {
  return (
    <div className="flex justify-left items-center">
      <div className="flex justify-end w-20">
        <h2 className="-rotate-90 tracking-widest text-2xl animate-pulse">
          projects
        </h2>
      </div>
      <div className="flex flex-col text-2xl md:text-7xl gap-6">
        <div className="group lg:flex lg:flex-row">
          <Link
            href="https://fed22m-exjobb-eli-ennab.vercel.app/sv"
            target="_blank"
            className="group-hover:text-orange dark:text-white group-hover:dark:text-kleinblue"
          >
            nioosha shams
          </Link>
          <div className="md:hidden group-hover:block lg:ml-8">
            <p className="text-base">
              degree project and multilingual website integrated the headless
              cms Storyblok, TypeScript, React, Next.js 14, Firebase Auth,
              Firebase Firestore and Vanilla Extract CSS
            </p>
          </div>
        </div>
        <div className="group lg:flex lg:flex-row">
          <Link
            href="https://damoviedatabase.netlify.app/"
            target="_blank"
            className="group-hover:text-orange dark:text-white group-hover:dark:text-kleinblue"
          >
            the movie database
          </Link>
          <div className="md:hidden group-hover:block lg:ml-8">
            <p className="text-base">
              assessment project fetching data from the TMDB database, written
              in TypeScript and React using Axios and Bootstrap
            </p>
          </div>
        </div>
        <div className="group lg:flex lg:flex-row">
          <Link
            href="https://hangrymap.netlify.app/"
            target="_blank"
            className="group-hover:text-orange dark:text-white group-hover:dark:text-kleinblue"
          >
            hangry map
          </Link>
          <div className="md:hidden group-hover:block lg:ml-8">
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
