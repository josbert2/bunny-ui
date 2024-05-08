import React from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import localFont from '@next/font/local'
const myFont = localFont({ 
    src: '../styles/Avenir/AvenirRegular.otf',
    fontWeight: '600',
    fontStyle: 'normal',
    format: 'opentype',
    fontDisplay: 'swap',
})



export function Providers({ children, themeProps }) {


  return (
 
   <div className={`${myFont.className}`}>
        <NextThemesProvider {...themeProps}>
            {children}
        </NextThemesProvider>
   </div>

  );
}