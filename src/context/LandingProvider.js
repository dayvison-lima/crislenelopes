import React, { useMemo } from "react";
import LandingContext from "./LandingContext";

function LandingProvider({ children }){

    const values = useMemo(() => ({

    }),[])

    return (
        <LandingContext.Provider
        value={ values }
        >
            {children}
        </LandingContext.Provider>
    )
};

export default LandingProvider;