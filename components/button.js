import Link from "next/link"

function ButtonComponent(props) {
    return (
        <div className="flex flex-col justify-evenly items-center px-4 py-4">
            <Link href={`${props.urlPath}`} className="border rounded-md border-blue-600 w-52 text-center py-3 hover:bg-blue-600">{props.urlName}</Link>
        </div>
    )
}

export default ButtonComponent