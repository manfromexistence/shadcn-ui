"use client"
import Script from "next/script";

export default function Fluids() {
    return (
        <>
            <Script id="show-fluids">
                {`
                  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                  ga('create', 'UA-105392568-1', 'auto');
                  ga('send', 'pageview');`
                }
            </Script>
            <Script src="fluid.js" />
            <Script src="dat.gui.min.js" />
            <canvas className="h-full w-full"></canvas>
        </>
    );
}