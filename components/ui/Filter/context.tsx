import React from 'react';

type AppliedFilters = {
  price: number[];
  colors: string[];
};

type ValueType = {
  state: AppliedFilters;
  resetState: () => void;
  setState: <K extends keyof AppliedFilters>(key: K, value: AppliedFilters[K]) => void;
};

type FilterProviderType = {
  children: React.ReactNode;
};

const defaultStateValue = { colors: [], price: [100, 900] };

const FilterContext = React.createContext<ValueType | null>(null);

const FilterProvider = ({ children }: FilterProviderType) => {
  const [state, set] = React.useState<AppliedFilters>(defaultStateValue);

  const setState = React.useCallback(
    <K extends keyof AppliedFilters>(key: K, value: AppliedFilters[K]) => set((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const resetState = React.useCallback(() => set(defaultStateValue), []);

  const memoizedValue = React.useMemo<ValueType>(() => {
    return { state, setState, resetState };
  }, [state, resetState, setState]);

  return <FilterContext.Provider value={memoizedValue}>{children}</FilterContext.Provider>;
};

const useFilterContext = () => {
  const ctx = React.useContext(FilterContext);

  if (!ctx) {
    throw new Error('useFilterContext should be used inside FilterProvider');
  }
  return ctx;
};

export { FilterProvider, useFilterContext };
