'use client';

import process from 'process';
import { useEffect } from 'react';

import { useGetJobs } from '@/api/jobs';
import { useCurrentList } from '@/stores/useCurrentList';

export default function Home() {
  const setCurrentList = useCurrentList((state) => state.setCurrentList);
  const currentList = useCurrentList((state) => state.currentList);

  const { isLoading, data } = useGetJobs({ board_keys: JSON.stringify([BOARD_KEY]) });

  useEffect(() => {
    if (setCurrentList) {
      setCurrentList(data?.data?.jobs);
    }
  }, [data, setCurrentList]);

  return (
    <>
      <ul>Hello World</ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>{currentList?.map((item) => <li key={item?.id}>{item?.name}</li>)}</ul>
      )}
    </>
  );
}

const BOARD_KEY = process.env.NEXT_PUBLIC_BOARD_KEY;
