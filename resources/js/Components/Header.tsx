import TextInput from "./TextInput";

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-16 gap-3">
                    <div className="w-full">
                        <span className="relative flex">
                            <TextInput
                                type="text"
                                id="email"
                                name="email"
                                className="block grow pl-10"
                                autoComplete="username"
                                isFocused={true}
                                placeholder="cari sesuatu..."
                            />
                            <i className="bx bx-search absolute text-xl top-1.5 left-3.5 text-primary"></i>
                        </span>
                    </div>

                    {/* <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="ms-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {user.name}

                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link
                                    href={route("profile.edit")}
                                >
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div> */}

                    <div className="-me-2 flex justify-center items-center sm:hidden">
                        <button
                            className="px-1.5 py-0.5 bg-primary text-white flex items-center justify-center rounded-full hover:bg-blue-600"
                            type="submit"
                        >
                            <i className="bx bx-bell text-2xl"></i>
                        </button>
                        {/* <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button> */}
                    </div>
                </div>
            </div>

            {/* <div
            className={
                (showingNavigationDropdown ? "block" : "hidden") +
                " sm:hidden"
            }
        >
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Dashboard
                </ResponsiveNavLink>
            </div>

            <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="px-4">
                    <div className="font-medium text-base text-gray-800">
                        {user.name}
                    </div>
                    <div className="font-medium text-sm text-gray-500">
                        {user.email}
                    </div>
                </div>

                <div className="mt-3 space-y-1">
                    <ResponsiveNavLink href={route("profile.edit")}>
                        Profile
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        </div> */}
        </header>
    );
};

export default Header;