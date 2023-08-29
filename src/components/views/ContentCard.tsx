import { isEmpty } from 'ramda';

type Tag = {
  name: string;
  value: string;
};

type Location = {
  text: string;
};

type Skill = {
  name: string;
};

type Language = {
  name: string;
};

type ContentCardProps = {
  item: {
    tags?: Tag[];
    location?: Location;
    summary?: string;
    skills?: Skill[];
    languages?: Language[];
  };
};

export default function ContentCard({ item }: ContentCardProps) {
  return (
    <div className='mb-4 flex flex-col items-start gap-8'>
      <div>
        <ul className='flex flex-wrap gap-3'>
          {item?.tags?.map((skill, index) => {
            return (
              <li key={index} className=' font-semibold capitalize'>
                {skill?.value}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <span className='font-semibold'>Location: </span>
        {item?.location?.text}
      </div>

      {!isEmpty(item?.summary) && (
        <div className='flex flex-col gap-2'>
          <span className='font-semibold'>Description: </span>
          <p> {item?.summary}</p>
        </div>
      )}

      <div className='flex flex-col gap-2'>
        <span className='font-semibold'>Skills : </span>
        <ul className='flex flex-wrap gap-3'>
          {item?.skills?.map((skill, index) => {
            return (
              <li key={index} className='rounded-xl bg-zinc-z2 p-2 capitalize shadow-sm'>
                {skill?.name}
              </li>
            );
          })}
        </ul>
      </div>
      {!isEmpty(item?.languages) && (
        <div className='flex flex-col gap-1'>
          <span className='font-semibold'>Languages : </span>
          <ul className='flex flex-wrap gap-3'>
            {item?.languages?.map((language, index) => {
              return (
                <li key={index} className='rounded-xl bg-zinc-z2 p-2 capitalize shadow-sm'>
                  {language?.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
