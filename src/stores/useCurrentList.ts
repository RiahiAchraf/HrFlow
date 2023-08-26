/* eslint-disable unused-imports/no-unused-vars */
import { create } from 'zustand';

import type { TUser } from '@/types/user';

interface CurrentListState {
  currentList?: TUser[];
  setCurrentList?: (list: TUser[]) => void;
}

export const useCurrentList = create<CurrentListState>()((set) => ({
  currentList: [],
  setCurrentList: (data) => set({ currentList: data }),
}));
