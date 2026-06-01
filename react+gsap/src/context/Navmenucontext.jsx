import React, { createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react'
export const Navbarcontext = createContext();
const Navmenucontext = (props) => {

   const [navOpen, setnavOpen] = useState(false)

   
  return (
    <Navbarcontext.Provider value={[navOpen, setnavOpen]}>
  {props.children}
    </Navbarcontext.Provider>
  );
}

export default Navmenucontext
