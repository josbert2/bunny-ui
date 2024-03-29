import React from "react";
import Link from "next/link";
import { Typography, Chip, IconButton } from "@material-tailwind/react";
import { useLockedBody } from "usehooks-ts";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  routes: {
    name: string;
    icon: string;
    pages: {
      name: string;
      label?: string;
    }[];
  }[];
  type: "html" | "react";
  slug: string;
  mobileNav: boolean;
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidenav({
  routes,
  type,
  slug,
  mobileNav,
  setMobileNav,
}: Props) {
  const [locked, setLocked] = useLockedBody(false, "root");

  React.useEffect(() => {
    if (mobileNav) {
      setLocked(true);
    } else {
      setLocked(false);
    }
  }, [mobileNav, setLocked]);

  return (
    <aside
      className={`fixed top-0 bg-[#18181B]  lg:border-r border-border z-[999] h-screen w-80  px-4 transition-all duration-300  lg:left-0  lg:z-10  ${
        mobileNav ? "left-0" : "-left-96"
      }`}
    >
      <div
        onClick={() => setMobileNav(false)}
        className={` left-0 top-0 h-screen w-screen bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileNav
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
    
      {mobileNav && (
        <IconButton
          onClick={() => setMobileNav(false)}
          ripple={false}
          color="white"
          className="!fixed right-2 top-2"
        >
          <XMarkIcon className="w-6 h-6 stroke-2" />
        </IconButton>
      )}
      <div className=" top-0 z-[9999] w-80   pb-6 pl-6 lg:relative w-full lg:bg-transparent lg:pl-0 lg:pt-0">
    
        <div className="relative flex pt-5">
          <h4 className="text-[#ededed] flex mb-0 pb-0 text-[2rem] font-bold italic relative">
            BUNNY 
            <span className="absolute top-0 p-1 py-0 text-base not-italic normal-case border rounded-lg -right-9" >UI</span>
          </h4>
         
        </div>
        <div className="mt-6 mb-10">
          {routes.map(({ name, pages }, key): any => (
            <div key={key}>
              <Typography
                variant="small"
                className="text-xs font-semibold text-white "
              >
                {name}
              </Typography>
              <ul className="py-2">
                {pages.map(({ name, route, label }: any, key) => {
                 

                  const isActive = route.includes("/")
                    ? route.includes(slug)
                    : route === slug;
                  return (
                    <li
                      key={key}
                      className={key === pages.length - 1 ? "!mb-4" : ""}
                    >
                      <Link href={`/docs/${type}/${route}`}>
                        <Typography
                          variant="small"
                          className={`flex transition-all hover:font-white justify-between gap-2 py-1 pr-3 text-sm  pl-4 text-zinc-600 hover:text-zinc-900 text-zinc-400 hover:text-white ${
                            isActive
                              ? "font-medium text-blue-500"
                              : "font-normal text-gray-600"
                          }`}
                          onClick={() => setMobileNav(false)}
                        >
                          {name}
                        </Typography>
                        {label && (
                          <Chip
                            size="sm"
                            value={label}
                            variant="ghost"
                            color={
                              label === "new"
                                ? "green"
                                : label === "new example"
                                ? "amber"
                                : "blue"
                            }
                            className="capitalize rounded-full"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
