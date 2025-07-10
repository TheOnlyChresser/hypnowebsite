import Image from "next/image"

type RowProps = {
    image: string,
    heading: string,
    text: string,
}

export default function Row ({image, heading, text}: RowProps) {
    return (
        <section className="w-full flex-col md:flex-row flex h-100 text-white/95 px-5 my-10 mt-50">
            <div className="flex-1 md:hidden mb-5 md:mb-0 relative h-100 bg-white">
                <Image src={image} fill className="object-cover" alt={heading}/>
            </div>
            <div className="flex-1 h-100 flex items-center flex-col px-5 pr-10">
                <h2 className="text-6xl text-center mb-4 font-bold text-purple-100/95">{heading}</h2>
                <p className="text-purple-100/80 font-thin text-xl">{text}</p>
            </div>
            <div className="flex-1 hidden md:flex relative h-100 bg-white">
                <Image src={image} fill className="object-cover" alt={heading}/>
            </div>
        </section>
    )
}