import { createContext } from 'react';
import { LibriratyClient } from '../library-client';
import { useContext } from 'react';

const ApiContext = createContext(new LibriratyClient());

export default function ApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiClient = new LibriratyClient();
  return (
    <ApiContext.Provider value={apiClient}>{children}</ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
