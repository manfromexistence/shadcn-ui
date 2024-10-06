import Script from 'next/script'

export default function MyApp() {
    return (
        <>
            <div className="relative flex h-screen w-full items-center justify-center px-6 pt-12">
                <canvas className='absolute left-0 top-0 z-50 h-screen w-full' />
            </div>
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
