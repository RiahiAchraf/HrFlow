import { useQuery } from '@tanstack/react-query';
import { stringify } from 'querystring';

import { axiosPrivate } from '@/lib/axiosPrivate';

type JobProps = {
  board_keys: string;
  limit: number;
  page: number;
};

export const getJobs = async ({ limit, page, board_keys }: JobProps) => {
  const response = await axiosPrivate.get(
    `/jobs/searching?${stringify({
      board_keys,

      limit,
      page,
    })}`,
  );
  return response.data;
};

export const useGetJobs = ({ board_keys, limit, page }: JobProps) => {
  return useQuery(['jobs', board_keys], () => getJobs({ board_keys, limit, page }), {
    keepPreviousData: true,
  });
};
