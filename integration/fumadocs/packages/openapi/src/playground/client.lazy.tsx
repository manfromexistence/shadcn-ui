'use client';
import dynamic from 'next/dynamic';

export const ClientLazy = dynamic(() => import('./client'));
