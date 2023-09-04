import { Image } from "@nextui-org/react"

function Logo() {
    return (
        <div className="px-2">
            <Image
                width={26}
                alt="Xploring AI World Image"
                src='globe.jpeg'

            />
        </div>
    )
}

export default Logo