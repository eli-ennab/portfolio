import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex justify-start gap-8">
      <Link
        href="/files/resume_elina_ennab.pdf"
        target="_blank"
        className="footer-link"
      >
        resume
      </Link>
      <Link
        href="https://github.com/eli-ennab"
        target="_blank"
        className="footer-link"
      >
        github
      </Link>
      <Link
        href="https://www.linkedin.com/in/elina-ennab-13ba57249/"
        target="_blank"
        className="footer-link"
      >
        linkedin
      </Link>
    </div>
  )
}
