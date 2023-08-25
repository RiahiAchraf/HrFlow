import { NoData } from '~/svg';

export default function EmptyState() {
  return (
    <div className='min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='mx-auto flex items-center justify-center'>
          <NoData className='h-20 w-20' />
        </p>
        <h1 className='mt-4 text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl'>
          No items available...
        </h1>
      </div>
    </div>
  );
}
