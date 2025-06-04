    import HeaderAuthenticaton from "./HeaderAuthentication";
    import HeaderCart from "./HeaderCart";
    import HeaderLogo from "./HeaderLogo";
    import HeaderNav from "./HeaderNav";
    import HeaderSearch from "./HeaderSearch";

    export default function Header() {
        return (
            <div>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <HeaderNav />
                            <HeaderSearch />
                        </div>
                        <div className="flex items-center space-x-6">
                            <HeaderLogo />
                        </div>
                        <div className="flex items-center space-x-6">
                            <HeaderCart />
                            <HeaderAuthenticaton />
                        </div>
                    </div>
                </div>
            </div>
        )
    }   