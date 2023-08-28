import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { TFilters } from '@/types/filters';

interface CurrentFiltersState {
  currentFilters?: TFilters;
  setCurrentFilters?: (user: TFilters) => void;
}

export const useCurrentFilters = create<CurrentFiltersState>()(
  persist(
    (set) => ({
      currentFilters: {
        category: undefined,
        sort_by: undefined,
        search: undefined,
      },
      setCurrentFilters: (data) => set({ currentFilters: data }),
    }),
    {
      name: 'current-filters',
    },
  ),
);
