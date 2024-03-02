import Link from "next/link";
import { Fragment, useEffect } from "react";

// next.js components
import Script from "next/script";

// @material-tailwind components
import {
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  ThemeProvider,
} from "@material-tailwind/react";



// styles
import "../styles/globals.css";
//import "@docsearch/css";

//import * as fbq from "../utils/fpixel";
import { useRouter } from "next/router";
import BgGradient from "../widgets/BgGradient";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Fragment>
      <ThemeProvider>
        <BgGradient />
      
        <Component {...pageProps} />
        <div className="fixed hidden right-4 top-2/4 -translate-y-2/4 lg:block">
          <Menu placement="left" allowHover>
            <MenuHandler>
              <IconButton
                size="lg"
                color="white"
                className="border border-blue-gray-50"
              >
                <img
                  src="https://docs.material-tailwind.com/img/logos/icon-react.svg"
                  alt="react-icon"
                  className="w-20 h-20"
                />
              </IconButton>
            </MenuHandler>
            <MenuList className="p-1.5">
              <Link href="/docs/react/installation" target="_blank">
                <MenuItem className="flex items-center gap-2">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/icon-react.svg"
                    alt="react-icon"
                    className="w-6 h-6"
                  />
                  <Typography variant="h6" color="blue-gray">
                    React
                  </Typography>
                </MenuItem>
              </Link>
              <Link href="/docs/html/installation" target="_blank">
                <MenuItem className="flex items-center gap-2">
                  <img
                    src="https://docs.material-tailwind.com/img/logos/icon-html.svg"
                    alt="html-icon"
                    className="w-6 h-6"
                  />
                  <Typography variant="h6" color="blue-gray">
                    HTML
                  </Typography>
                </MenuItem>
              </Link>
              <Link href="/figma" target="_blank">
                <MenuItem className="flex items-center gap-2">
                  <img
                    src="https://docs.material-tailwind.com/img/icon-figma.svg"
                    alt="figma-icon"
                    className="w-6 h-6"
                  />
                  <Typography variant="h6" color="blue-gray">
                    Figma
                  </Typography>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
