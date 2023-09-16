import {FC, PropsWithChildren} from "react";
import {RootStoreContext, RootStore} from "../stores";


interface ProvidersProps extends PropsWithChildren {}

export const Providers: FC<ProvidersProps> = ({children}) => {

  return (
    <RootStoreContext.Provider value={new RootStore()}>
      {children}
    </RootStoreContext.Provider>
  )
}
