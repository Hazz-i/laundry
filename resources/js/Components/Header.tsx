import TextInput from "./TextInput";

const Header = ({ setCari }: { setCari: any }) => {
    return (
        <header className="bg-white rounded-b-badge border-gray-100">
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
                                onChange={(ev: any) => {
                                    setCari(ev.target.value);
                                }}
                            />
                            <i className="bx bx-search absolute text-xl top-1.5 left-3.5 text-primary"></i>
                        </span>
                    </div>

                    <div className="-me-2 flex justify-center items-center sm:hidden">
                        <button
                            className="px-1.5 py-0.5 bg-primary text-white flex items-center justify-center rounded-full hover:bg-blue-600"
                            type="submit"
                        >
                            <i className="bx bx-bell text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
