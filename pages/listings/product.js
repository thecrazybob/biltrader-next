import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EmblaCarousel from "../../components/EmblaCarousel";

const Product = () => {
    return (
        <>
            <Header />
            {/* Main Body */}
            <div className="bg-gray-100">
                <div className="mx-auto max-w-screen-2xl w-full leading-6 text-gray-600  sm:px-14 max-w-1/2">
                    {/* Bread Crumb Start */}
                    <div className="mx-auto pb-3">
                        <div className="pt-2">
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="bg-white rounded-md shadow px-6 flex space-x-4">
                                    <li className="flex">
                                        <div className="flex items-center">
                                            <a
                                                href="#"
                                                className="text-gray-400 hover:text-gray-500"
                                            >
                                                <svg
                                                    className="flex- h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                </svg>
                                                <span className="sr-only">
                                                    Home
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex items-center">
                                            <svg
                                                className="flex- w-6 h-full text-gray-200"
                                                viewBox="0 0 24 44"
                                                preserveAspectRatio="none"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                            </svg>
                                            <a
                                                href="#"
                                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                            >
                                                Projects
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex items-center">
                                            <svg
                                                className="flex- w-6 h-full text-gray-200"
                                                viewBox="0 0 24 44"
                                                preserveAspectRatio="none"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                            </svg>
                                            <a
                                                href="#"
                                                aria-current="page"
                                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                            >
                                                Project Nero
                                            </a>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* Bread Crumb End */}

                    {/* Product Card Start */}

                    <div className="flex flex-wrap leading-6 text-gray-600  bg-white mx-auto pb-3 rounded-md border border-gray-200 border-solid">
                        <div className="flex-none w-full max-w-full leading-6 text-gray-600 md:flex-none md:w-full lg:flex-none lg:w-3/5">
                            <EmblaCarousel>
                                <img
                                    src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
                                    alt=""
                                />
                                <img
                                    src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
                                    alt=""
                                />
                            </EmblaCarousel>
                        </div>
                        <div className="flex-none w-full max-w-full leading-6 text-gray-600 md:flex-none md:w-full lg:flex-none lg:w-2/5">
                            <div className="flex-none w-full max-w-full leading-6 text-gray-600 md:flex-none md:w-full lg:flex-none">
                                <div className="pl-10 m-4 text-gray-600">
                                    <h2
                                        className="mb-2 text-3xl font-semibold text-gray-900 xl:text-3xl leading-tight pt-2"
                                    >
                                        MacBook Pro 13-inch
                                    </h2>
                                    <p className="mb-5 font-sans text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 inline-block text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span>Main Campus</span>
                                    </p>
                                    <h3
                                        className="text-3xl font-semibold text-blue-600 xl:text-3xl leading-tight"
                                    >
                                        $999
                                    </h3>
                                    <div className="pt-8 mt-8 border-t border-gray-200 border-solid">
                                        <h4
                                            className="mb-4 text-xl font-medium text-gray-900 xl:text-2xl leading-tight"
                                        >
                                            Informations
                                        </h4>
                                        <ul className="list-none">
                                            <li className="mb-1 text-left">
                                                <span
                                                    className="inline-block font-medium no-underline "
                                                    style={{
                                                        transition:
                                                            "all 0.4s ease 0s",
                                                        minWidth: "100px",
                                                    }}
                                                >
                                                    Condition:
                                                </span>
                                                New
                                            </li>
                                            <li className="mb-1 text-left">
                                                <span
                                                    className="inline-block font-medium no-underline "
                                                    style={{
                                                        transition:
                                                            "all 0.4s ease 0s",
                                                        minWidth: "100px",
                                                    }}
                                                >
                                                    Brand:
                                                </span>
                                                Apple
                                            </li>
                                            <li className="block text-left">
                                                <span
                                                    className="inline-block font-medium no-underline "
                                                    style={{
                                                        transition:
                                                            "all 0.4s ease 0s",
                                                        minWidth: "100px",
                                                    }}
                                                >
                                                    Model:
                                                </span>
                                                Mackbook Pro
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <a
                                            href=""
                                            className="float-left py-4 pl-5 pr-5 text-center text-white no-underline bg-blue-600 rounded cursor-pointer hover:bg-gray-900 hover:text-white focus:shadow-none focus:no-underline"
                                            style={{
                                                transition: "all 0.4s ease 0s",
                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-12 w-12 inline-block pr-3"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                />
                                            </svg>

                                            <span
                                                className="inline-block"
                                                style={{
                                                    transition:
                                                        "all 0.4s ease 0s",
                                                }}
                                            >
                                                Chat &amp; Get more info
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Card End */}

                    {/* Other Info */}
                    <div className="leading-6 text-gray-600  flex flex-wrap">
                        {/* Description & Tags */}
                        <div className="flex-none w-full max-w-full leading-6 text-gray-600 md:flex-none md:w-7/12 lg:flex-none lg:w-2/3  pr-10">
                            <div className="p-8 mt-8 text-gray-600 bg-white rounded-md border border-gray-200 border-solid">
                                <h3
                                    className="mb-6 text-xl font-semibold text-gray-900 xl:text-3xl leading-tight "
                                >
                                    Description
                                </h3>
                                <p className="my-4 font-sans text-base">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable.
                                </p>
                                <ul className="block my-8 list-none">
                                    <li className="block mb-1 text-sm text-left">
                                        Model: Apple MacBook Pro 13.3-Inch MYDA2
                                    </li>
                                    <li className="block mb-1 text-sm text-left">
                                        Apple M1 chip with 8-core CPU and 8-core
                                        GPU
                                    </li>
                                    <li className="block mb-1 text-sm text-left">
                                        8GB RAM
                                    </li>
                                    <li className="block mb-1 text-sm text-left">
                                        256GB SSD
                                    </li>
                                    <li className="block text-sm text-left">
                                        13.3-inch 2560x1600 LED-backlit Retina
                                        Display
                                    </li>
                                </ul>
                                <p className="my-4 font-sans text-base">
                                    The generated Lorem Ipsum is therefore
                                    always free from repetition, injected
                                    humour, or non-characteristic words etc.
                                </p>
                            </div>
                            <div className="p-8 mt-8 text-gray-600 bg-white rounded-md border border-gray-200 border-solid">
                                <h3
                                    className="mb-6 text-xl font-semibold text-gray-900 xl:text-3xl leading-tight"
                                >
                                    Tags
                                </h3>
                                <ul className="list-none">
                                    <li className="inline-block mr-1 mb-2 text-left">
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block py-2 px-4 no-underline rounded border border-gray-200 border-solid cursor-pointer  hover:border-blue-600 hover:text-blue-600 focus:shadow-none focus:no-underline"
                                            style={{
                                                transition: "all 0.4s ease 0s",
                                            }}
                                        >
                                            Bike
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 mb-2 text-left">
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block py-2 px-4 no-underline rounded border border-gray-200 border-solid cursor-pointer  hover:border-blue-600 hover:text-blue-600 focus:shadow-none focus:no-underline"
                                            style={{
                                                transition: "all 0.4s ease 0s",
                                            }}
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 mb-2 text-left">
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block py-2 px-4 no-underline rounded border border-gray-200 border-solid cursor-pointer  hover:border-blue-600 hover:text-blue-600 focus:shadow-none focus:no-underline"
                                            style={{
                                                transition: "all 0.4s ease 0s",
                                            }}
                                        >
                                            Brand
                                        </a>
                                    </li>
                                    <li className="inline-block mr-1 mb-2 text-left">
                                        <a
                                            href="javascript:void(0)"
                                            className="inline-block py-2 px-4 no-underline rounded border border-gray-200 border-solid cursor-pointer  hover:border-blue-600 hover:text-blue-600 focus:shadow-none focus:no-underline"
                                            style={{
                                                transition: "all 0.4s ease 0s",
                                            }}
                                        >
                                            Popular
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Author & Contact */}
                        <div className="flex-none w-full max-w-full leading-6 text-gray-600 md:flex-none md:w-5/12 lg:flex-none lg:w-1/3">
                            <div className="text-gray-600">
                                <div className="relative p-8 mt-8 bg-white rounded-md border border-gray-200 border-solid">
                                    <h3
                                        className="mb-6 text-xl font-semibold text-gray-900 xl:text-3xl leading-tight"
                                    >
                                        Author
                                    </h3>
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                            alt="#"
                                            className="absolute w-12 h-12 align-middle rounded-full mt-1 "
                                        />
                                        <h4
                                            className="text-base font-medium text-gray-900 xl:text-2xl pl-16 leading-tight"
                                            >
                                            Miliya Jessy
                                        </h4>
                                        <span
                                            className="block mt-1 text-sm leading-5 no-underline pl-16"
                                            style={{
                                                transition: "all 0.4s ease 0s",
                                            }}
                                        >
                                            Member Since May 15,2023
                                        </span>
                                        <a
                                            href="javascript:void(0)"
                                            className="pl-16 inline-block mt-5 text-sm text-blue-600 no-underline cursor-pointer  hover:text-gray-900 focus:shadow-none focus:no-underline"
                                            style={{
                                                transition: "all 0.4s ease 0s",
                                            }}
                                        >
                                            See All Ads
                                        </a>
                                    </div>
                                </div>
                                <div className="p-8 mt-8 bg-white rounded-md border border-gray-200 border-solid">
                                    <h3
                                        className="mb-6 text-xl font-semibold text-gray-900 xl:text-3xl leading-tight"
                                    >
                                        Contact Seller
                                    </h3>
                                    <form
                                        action="#"
                                        method="POST"
                                        className=""
                                    >
                                        <div className="flex flex-wrap">
                                            <div className="flex-none w-full max-w-full">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="block px-6 mb-4 w-full h-12 text-sm font-normal leading-normal text-gray-900 bg-scroll bg-clip-padding bg-repeat bg-none rounded border border-gray-200 border-solid appearance-none cursor-text  focus:bg-white focus:border-blue-300 focus:shadow-xs focus:text-gray-900 focus:no-underline"
                                                        placeholder="Your Name"
                                                        style={{
                                                            transition:
                                                                "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                                            backgroundPosition:
                                                                "0% center",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-none w-full max-w-full">
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="block px-6 mb-4 w-full h-12 text-sm font-normal leading-normal text-gray-900 bg-scroll bg-clip-padding bg-repeat bg-none rounded border border-gray-200 border-solid appearance-none cursor-text  focus:bg-white focus:border-blue-300 focus:shadow-xs focus:text-gray-900 focus:no-underline"
                                                        placeholder="Your Email"
                                                        style={{
                                                            transition:
                                                                "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                                            backgroundPosition:
                                                                "0% center",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-none w-full max-w-full">
                                                <div className="relative">
                                                    <textarea
                                                        name="#"
                                                        className="block p-6 mb-4 w-full h-40 text-sm font-normal leading-normal text-gray-900 whitespace-pre-wrap bg-scroll bg-clip-padding bg-repeat bg-none rounded border border-gray-200 border-solid appearance-none cursor-text resize-y  focus:bg-white focus:border-blue-300 focus:shadow-xs focus:text-gray-900 focus:no-underline"
                                                        placeholder="Your Message"
                                                        style={{
                                                            transition:
                                                                "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                                                            minHeight:
                                                                "calc(1.5em + 2px + 0.75rem)",
                                                            backgroundPosition:
                                                                "0% center",
                                                            overflowWrap:
                                                                "break-word",
                                                        }}
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-none w-full max-w-full">
                                                <div className="">
                                                    <button
                                                        type="submit"
                                                        className="inline-block py-4 px-8 text-sm font-medium leading-normal text-center text-white no-underline capitalize align-middle bg-blue-600 rounded border-transparent border-none cursor-pointer select-none focus:shadow-none focus:no-underline hover:bg-gray-900 hover:shadow-xs hover:text-white md:font-medium md:text-sm md:py-3 md:px-6"
                                                        style={{
                                                            transition:
                                                                "all 0.5s ease 0s",
                                                            borderWidth:
                                                                "medium",
                                                        }}
                                                    >
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Other Info End  */}
                </div>
                {/* Main Body End */}
                <Footer />
            </div>


        </>
    );
};

export default Product;
