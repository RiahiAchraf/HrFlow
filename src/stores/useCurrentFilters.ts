/* eslint-disable unused-imports/no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { TFilters } from '@/types/filters';

interface CurrentFiltersState {
  currentFilters?: TFilters;
  setCurrentFilters?: (user: TFilters) => void;
}

export const useCurrentFilters = create<CurrentFiltersState>()(
  persist(
    (set, get) => ({
      currentFilters: {
        category: undefined,
      },
      setCurrentFilters: (data) => set({ currentFilters: data }),
    }),
    {
      name: 'current-filters',
    },
  ),
);
