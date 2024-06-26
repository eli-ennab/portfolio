import Link from 'next/link';
import type { TLink } from '@/app/types/types';

export function SideLink({ header, description, href }: TLink) {
  return (
    <div className='group lg:flex lg:flex-row'>
      <Link
        href={href}
        target='_blank'
        className='group-hover:text-orange group-hover:md:text-base dark:text-white'
      >
        {header}
      </Link>
      <div className='md:hidden group-hover:block lg:ml-8'>
        <p className='text-base'>{description}</p>
      </div>
    </div>
  );
}
