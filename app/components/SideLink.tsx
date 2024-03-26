import Link from 'next/link';
import type { TLink } from '@/app/types/types';

export function SideLink({ header, description, href }: TLink) {
  return (
    <div className='group lg:flex lg:flex-row'>
      <Link
        href={href}
        target='_blank'
        className='group-hover:text-orange dark:text-white group-hover:dark:text-kleinblue'
      >
        {header}
      </Link>
      <div className='md:hidden group-hover:block lg:ml-8'>
        <p className='text-base'>{description}</p>
      </div>
    </div>
  );
}
