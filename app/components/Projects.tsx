import projects from '@/app/data/projects.json';
import { SideLink } from '@/app/components/SideLink';

export function SideLinks() {
  return (
    <div className='flex justify-left items-center'>
      <div className='flex justify-end w-20'>
        <h2 className='-rotate-90 tracking-widest text-2xl animate-pulse'>
          projects
        </h2>
      </div>
      <div className='flex flex-col text-2xl md:text-7xl gap-6'>
        {projects.map((project, index) => (
          <SideLink
            key={index}
            href={project.href}
            header={project.header}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
