import Script from 'next/script'

export default function MyApp() {
    return (
        <>
            <canvas className='absolute left-0 top-0 h-screen w-full z-10' />
            <Script id="idk">
                {`
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                ga('create', 'UA-105392568-1', 'auto');
                ga('send', 'pageview');
            `}
            </Script>
            <Script src="/fluid-simulation.js" />
        </>
    )
}
