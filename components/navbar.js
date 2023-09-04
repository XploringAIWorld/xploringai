'use client'
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Divider, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

export default function NavbarComponent() {
    const pathName = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const menuItems = [

        {
            "urlPath": "/",
            "urlName": "Home"
        },
        {
            "urlPath": "/ainews",
            "urlName": "AI News"
        },
        {
            "urlPath": "/technews",
            "urlName": "Tech News"
        },
    ];

    return (

        <div className="flex flex-col justify-evenly items-center px-4 py-4">
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href={'/'} className="flex">
                            <Logo />
                            <p className="text-inherit">Xploring AI World</p>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem >
                        <Link href={'/'} className={`text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md ${pathName === '/' ? 'bg-blue-600 text-white' : ''}`}>
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link href={'/ainews'} className={`text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md ${pathName === '/ainews' ? 'bg-blue-600 text-white' : ''}`}>
                            AI News
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link href={'/technews'} className={`text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md ${pathName === '/technews' ? 'bg-blue-600 text-white' : ''}`}>
                            Tech News
                        </Link>
                    </NavbarItem>
                    {
                        token ? (
                            <NavbarItem >
                                <Link href={`/ainewsdashboard?token=${token}`} className={`text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md ${pathName === `/ainewsdashboard?token=${token}` ? 'bg-blue-600 text-white' : ''}`}>
                                    AI News Dashboard
                                </Link>
                            </NavbarItem>
                        ) : (null)
                    }
                    {
                        token ? (
                            <NavbarItem >
                                <Link href={`/technewsdashboard?token=${token}`} className={`text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md ${pathName === `/technewsdashboard?token=${token}` ? 'bg-blue-600 text-white' : ''}`}>
                                    Tech News Dashboard
                                </Link>
                            </NavbarItem>
                        ) : (null)
                    }
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className={`w-full ${pathName === item.urlPath ? "text-blue-600" : "text-white"}`}
                                href={item.urlPath}
                                size="lg"
                            >
                                {item.urlName}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <Divider />
        </div>

    );
}
