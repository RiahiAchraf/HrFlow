import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Loading() {
  return (
    <SkeletonTheme baseColor='#d4d4d8' highlightColor='#e4e4e7'>
      <div>
        <Skeleton count={1} className='mb-8 h-10 w-full !rounded-xl  md:!w-64' />
        <Skeleton count={5} className='mb-4 h-20 !rounded-xl' />
        <div className='mt-8 border-t border-zinc-z2  pt-8  ' />
        <Skeleton count={1} className='mb-32 h-10 !rounded-xl' />
      </div>
    </SkeletonTheme>
  );
}
