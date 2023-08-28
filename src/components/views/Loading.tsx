import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ContentLoading = () => {
  return (
    <SkeletonTheme baseColor='#d4d4d8' highlightColor='#e4e4e7'>
      <div>
        <Skeleton count={5} className='mb-4 h-32 !rounded-xl' />
        <div className='mt-8 border-t border-zinc-z2  pt-8  ' />
        <Skeleton count={1} className='mb-32 h-10 !rounded-xl' />
      </div>
    </SkeletonTheme>
  );
};

const TitleLoading = () => {
  return (
    <SkeletonTheme baseColor='#d4d4d8' highlightColor='#e4e4e7'>
      <Skeleton count={1} className=' h-5 w-full !rounded-xl  md:!w-64' />
    </SkeletonTheme>
  );
};

export { ContentLoading, TitleLoading };
