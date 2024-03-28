import ThemeSwitcher from './ThemeSwitcher';
import navigation from '@/app/data/navigation.json';

export function Navigation() {
  return (
    <div className='flex justify-between'>
      <h1 className='text-black dark:text-gray'>
        {navigation[0].heading}<br />
        <span className='text-orange dark:text-white'>
        {navigation[0].subheading}
        </span>
      </h1>
      <div className='flex gap-6'>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
