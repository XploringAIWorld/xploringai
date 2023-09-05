'use client'
import { Divider, Link, Spacer } from "@nextui-org/react";
import Image from "next/image";


function FooterLink(props) {
    return (
        <div className="p-2">
            <Link href={props.link} isExternal>

                <Image
                    width={24}
                    height={24}
                    src={props.imgSrc}
                    alt="Image"
                />
            </Link>


        </div>
    );
}

function Footer() {
    return (
        <div>
            <Divider />
            <div className="p-4 flex flex-col justify-evenly items-center " >

                <div className="flex">

                    <FooterLink link="https://www.youtube.com/@xploringAIWorld" imgSrc='/youtube.png' />
                    <FooterLink link="https://twitter.com/xploringaiworld" imgSrc='/logo-white.png' />
                    <FooterLink link="https://www.instagram.com/xploringaiworld/" imgSrc='/instagram.png' />
                    <FooterLink link="https://www.linkedin.com/in/mukkingal-harshavardhan-nair/" imgSrc='/linkedin.png' />
                    <FooterLink link="https://t.me/xploringaiworld" imgSrc='/telegram.png' />
                    <FooterLink link="https://chat.whatsapp.com/D6StOMlOlct8q2LeoSbzVv" imgSrc='/whatsapp.png' />

                </div>
                <div className="flex text-gray-400">
                    <p>Terms Of Use.</p>
                    <Spacer x={2} />
                    <p>Privacy Policy</p>
                </div>
                <Spacer y={2} />
                <div className="text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                    <Spacer y={2} />
                    <p>Xploring AI World</p>
                </div>

            </div>
        </div>

    );
}

export default Footer;
