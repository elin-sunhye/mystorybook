'use client'

import React from 'react'
import styled from './gnb.module.scss'
import Link from 'next/link'

interface GnbProps {}

/**
 * Primary UI component for user interaction
 */
export const Gnb = ({}: GnbProps) => {
    return (
        <Gnb>
            <ul>
                <li>
                    <Link href={'#'}>menu1</Link>
                </li>
                <li>
                    <Link href={'#'}>menu2</Link>
                </li>
                <li>
                    <Link href={'#'}>menu3</Link>
                </li>
                <li>
                    <Link href={'#'}>menu4</Link>
                </li>
                <li>
                    <Link href={'#'}>menu4</Link>
                    sd
                </li>
            </ul>
        </Gnb>
    )
}
