import React from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';

export function Providers({ children, themeProps }) {


  return (

      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>

  );
}