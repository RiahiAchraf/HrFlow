import { useQuery } from '@tanstack/react-query';
import { stringify } from 'querystring'; // Import the stringify function from the querystring module

import { axiosPrivate } from '@/lib/axiosPrivate';

type JobProps = {
  board_keys: string;
};

export const getJobs = async ({ board_keys }: JobProps) => {
  const response = await axiosPrivate.get(
    `/jobs/searching?${stringify({
      board_keys,
    })}`,
  );
  return response.data;
};

export const useGetJobs = ({ board_keys }: JobProps) => {
  return useQuery(['jobs', board_keys], () => getJobs({ board_keys }), {
    keepPreviousData: true,
  });
};
