import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// mdx
import fs from "fs";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote";
import rehypePrettyCode from "rehype-pretty-code";
import { serialize } from "next-mdx-remote/serialize";

import { bgGradientSmooth } from "../../widgets/bgGradientSmooth";

// @widgets
import {
  DocsNavbar,
  Footer,
  Sidenav,
  PageMap,
  Code,
  FrameworkCard,
  CraLogo,
  NextLogo,
  RemixLogo,
  ViteLogo,
  AstroLogo,
  GatsbyLogo,
  CodePreview,
  DocsTitle,
  ColorPalette,
} from "../../widgets";


// docs-content

import * as AlertExamples from "../../docs-content/react/alert";



// html docs content



// @material-tailwind/react
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav,
  Navbar,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Progress,
  Radio,
  Select,
  Switch,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Textarea,
  Tooltip,
  Typography,
  ButtonGroup,
  Carousel,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Collapse,
  Slider,
} from "@material-tailwind/react";

// routes
import { routes as htmlRoutes } from "../../routes/html.routes";
import { routes as reactRoutes } from "../../routes/react.routes";

// utils
import filterArray from "../../utils/filter-array";
import { rehypePrettyCodeConfig } from "../../utils";
import getDirectoriesAndFile from "../../utils/get-directories-and-files";

// material tailwind html script
import initHtmlScripts from "../../../public/material-tailwind-html-v2";
import OfferBar from "../../widgets/offer-bar";

const components = {
  h1: (props) => (
    <h1 className="mt-10 mb-4 text-4xl font-bold text-white" {...props}></h1>
  ),
  DocsTitle,
  AlertExamples,
  Code,
  CodePreview
 
};


export default function Page({ frontMatter, mdxSource, slug, source }) {
  const { asPath } = useRouter();
  const [mobileNav, setMobileNav] = React.useState(false);
  
  const routes = {
    html: htmlRoutes,
    react: reactRoutes,
  };
  const validFrameworks = ["html", "react"];
  const frameworkType = asPath
    .split("/")
    .filter((el) => validFrameworks.includes(el))
    .join("")

  React.useEffect(() => {
    if (frameworkType === "html" && typeof window !== "undefined") {
      initHtmlScripts();
    }
  }, [frameworkType, slug]);

  const replaceMatch = [
    "html/what-is-tailwind-css",
    "html/license",
    "html/colors",
    "html/fonts",
    "html/shadows",
    "html/screens",
  ];

  const headLink = slug
  const matchTheSlug = replaceMatch.includes(headLink);
  const canonical = matchTheSlug
    ? headLink.replace("html/", "react/")
    : headLink;
    
  
  return (
    <>
       <Head>
        <title>x</title>
        <meta name="description" content="x" />
        <link
          rel="canonical"
          href={`https://www.material-tailwind.com/docs/${canonical}`}
        />
      </Head>
      {/* <OfferBar /> */}
      
     <Sidenav
        routes={routes[frameworkType]}
        type={frameworkType}
        slug={slug[slug.length - 1]}
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
      />
     
      <div className="relative flex w-full h-full mb-8 ">
        <div className="h-full lg:ml-72 xl:ml-[18rem] pt-10  ">
  
            {/*<DocsNavbar slug={slug} setMobileNav={setMobileNav} /> */}
            <div class="px-[8rem] prose">
              
            <bgGradientSmooth />
              <MDXRemote
                {...source}
                components={components}
              />
            </div>
         
        </div>
        {/*<PageMap type={frameworkType} frontMatter={frontMatter} /> */}
      </div>
   
    </>
  );
}

export async function getStaticProps({ params }) {
  // Supongamos que tiene alguna función que obtiene datos basados en el slug
  // El slug será un array debido a la ruta [...slug], así que necesitamos unirlo si es necesario
  const markdownWithMeta = fs.readFileSync(
    `src/documentation/${params.slug.join("/")}.mdx`,
  );
  const slug = params.slug.join('/');
  const doc = {}

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(markdownWithMeta, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeConfig]],
      remarkPlugins: [remarkGfm],

    },
  })

  const baseDirectory = "documentation";
  const paths = [];
  const allDir = getDirectoriesAndFile(baseDirectory);
  const filteredArray = filterArray(allDir);

  for (let i = 0; i < filteredArray.length - 1; i++) {
    const directories =
      filteredArray[i] !== null &&
      filteredArray[i].split("/").filter((dir) => dir !== baseDirectory);
    const files = filteredArray[i + 1].includes("/")
      ? filteredArray[i + 1].split("/").filter((dir) => dir !== baseDirectory)
      : filteredArray[i + 1];

    const filename = Array.isArray(files) ? null : files;

    filename &&
      paths.push({
        params: {
          slug: [...directories, filename],
        },
      });
  }
 


  // Pasar los datos obtenidos a la página a través de props
  return { 
    props: 
    { 
      slug: paths,
      source: mdxSource,
      frontMatter 
    },
    revalidate: 60,

  };
}

/*export async function getStaticPaths() {
  const baseDirectory = "documentation";
  const paths = [];
  const allDir = getDirectoriesAndFile(baseDirectory);
  const filteredArray = filterArray(allDir);

  for (let i = 0; i < filteredArray.length - 1; i++) {
    const directories =
      filteredArray[i] !== null &&
      filteredArray[i].split("/").filter((dir) => dir !== baseDirectory);
    const files = filteredArray[i + 1].includes("/")
      ? filteredArray[i + 1].split("/").filter((dir) => dir !== baseDirectory)
      : filteredArray[i + 1];

    const filename = Array.isArray(files) ? null : files;

    filename &&
      paths.push({
        params: {
          slug: [...directories, filename],
        },
      });
  }

  return {
    paths: paths,
    fallback: true,
  }
} */

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" }
} 


