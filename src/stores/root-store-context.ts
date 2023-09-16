import {createContext, useContext} from "react";
import Root from "./root.ts";

export const RootStoreContext = createContext<Root | null>(null)

const useStores = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error();
  }

  return context;
};

export default useStores;
