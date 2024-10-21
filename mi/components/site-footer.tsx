import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative py-6 md:py-0">
      <div
        className="absolute top-0 h-px w-full"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 100%,rgba(255,255,255,.32) 0%,rgba(255,255,255,0) 100%)",
        }}
      ></div>
      <div className="container flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by {" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            manfromexistence
          </a>
          , Inspired by{" "}
          <a
            href={siteConfig.links.shadcn}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

// import { siteConfig } from "@/config/site"

// export function SiteFooter() {
//   return (
//     <footer className="py-6 md:px-8 md:py-0">
//       <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
//         <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
//           Built by{" "}
//           <a
//             href={siteConfig.links.twitter}
//             target="_blank"
//             rel="noreferrer"
//             className="font-medium underline underline-offset-4"
//           >
//             manfromexistence
//           </a>
          // , Inspired by{" "}
          // <a
          //   href={siteConfig.links.shadcn}
          //   target="_blank"
          //   rel="noreferrer"
          //   className="font-medium underline underline-offset-4"
          // >
          //   shadcn
          // </a>
          // . The source code is available on{" "}
          // <a
          //   href={siteConfig.links.github}
          //   target="_blank"
          //   rel="noreferrer"
          //   className="font-medium underline underline-offset-4"
          // >
          //   GitHub
          // </a>
          // .
//         </p>
//       </div>
//     </footer>
//   )
// }
