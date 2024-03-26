import ThemeSwitcher from './ThemeSwitcher';

export function Navigation() {
  return (
    <div className='flex justify-between'>
      <h1 className='text-black dark:text-gray'>
        eli ennab<br></br>
        <span className='text-orange dark:text-white'>
          front end developer based in Malmö, SWE
        </span>
      </h1>
      <div className='flex gap-6'>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
