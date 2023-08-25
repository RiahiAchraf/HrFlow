/* eslint-disable unused-imports/no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { TUser } from '@/types/user';

interface CurrentListState {
  currentList?: TUser[];
  setCurrentList?: (list: TUser[]) => void;
}

export const useCurrentList = create<CurrentListState>()(
  persist(
    (set, get) => ({
      currentList: [],
      setCurrentList: (data) => set({ currentList: data }),
    }),
    {
      name: 'current-list',
    },
  ),
);
