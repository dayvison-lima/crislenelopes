import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import LandingContext from './LandingContext';

function LandingProvider({ children }) {
  const values = useMemo(() => ({

  }), []);

  return (
    <LandingContext.Provider
      value={ values }
    >
      {children}
    </LandingContext.Provider>
  );
}

LandingProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default LandingProvider;
