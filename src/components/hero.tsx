import Image from "next/image";

export default function Hero () {
    return (
        <section className="min-h-screen flex flex-col w-full">
            <div className="flex-center w-full flex-col">
                <h1 className="text-center text-9xl font-bold text-purple-100/80 mt-20">We are Hypno.</h1>
                <p className="mt-10 text-purple-100/60 text-2xl text-center max-w-prose">An app made to research how hypnosis during sleep can improve <span className="underline decoration-white/75 bg-gradient-to-br from-purple-100/75 to-yellow-100/75 text-transparent bg-clip-text font-bold">all</span> aspects of your life.</p>
            </div>
            <div className="flex-center flex-row w-full space-x-4 mt-10">
                <a className="downloadlink">
                    <Image src="/apple.svg" alt="download on app store" width={300} height={30} className="h-20"/>
                </a>
                <a className="downloadlink">
                    <Image src="/googleplay.svg" alt="download on play store" width={270} height={80} className="h-20"/>
                </a>
            </div>
        </section>
    )
}