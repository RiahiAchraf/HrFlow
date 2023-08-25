'use client';

import process from 'process';
import { useEffect, useState } from 'react';

import { useGetJobs } from '@/api/jobs';
import { Pagination } from '@/components/ui';
import { useCurrentList } from '@/stores/useCurrentList';

type ServerFilters = {
  page: number;
  limit: number;
};

export default function Home() {
  const setCurrentList = useCurrentList((state) => state.setCurrentList);
  const currentList = useCurrentList((state) => state.currentList);

  const [serverFilter, setServerFilter] = useState<ServerFilters>({
    page: 1,
    limit: 5,
  });

  // API REQUEST FOR RETRIEVING JOBS
  const { isLoading, data, refetch } = useGetJobs({
    ...serverFilter,
    board_keys: JSON.stringify([BOARD_KEY]),
  });

  useEffect(() => {
    refetch();
    if (setCurrentList) {
      setCurrentList(data?.data?.jobs);
    }
  }, [serverFilter, refetch, data, setCurrentList]);

  return (
    <div className='flex min-h-screen flex-col space-y-20'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className='text-base font-semibold capitalize leading-6 text-zinc-z8'>
            {data?.message}
          </h2>
          <ul>{currentList?.map((item) => <li key={item?.id}>{item?.name}</li>)}</ul>
        </>
      )}
      <Pagination filter={serverFilter} setServerFilter={setServerFilter} metaData={data?.meta} />
    </div>
  );
}

const BOARD_KEY = process.env.NEXT_PUBLIC_BOARD_KEY;
