"use client"

import React from 'react';
import styled from './gnb.module.scss'; 
import Link from 'next/link';

interface GnbProps {

}

/**
 * Primary UI component for user interaction
 */
export const Gnb = ({

}: GnbProps) => {

  return (
    <ul className={styled.gnb}>
      <li>
        <Link href={'#'}>
          
        </Link>
      </li>
   </ul>
  );
};
