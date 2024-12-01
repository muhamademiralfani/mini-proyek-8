/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({ children }) => {
  return <header className=' text-center text-[72px] lg:text-[245px] md:text-[160px] border-y-2 border-y-slate-300 mt-8 font-bold uppercase px-0 '>{children}</header>;
};

HeaderComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderComponent;
