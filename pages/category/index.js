import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <section className="relative py-24 leading-6 text-gray-900 bg-gray-100 md:md:py-16">
            <div className="mx-auto w-full text-gray-900 max-w-screen-2xl">
              <div className="flex flex-wrap">
                <div className="flex-none w-full max-w-full md:flex-none md:w-1/3 lg:flex-none lg:w-1/5 pr-2">
                  <div className="box-border">
                    <div className="p-8 mb-8 bg-white rounded-md border border-gray-200 border-solid">
                      <h3 className="block mb-6 text-lg font-semibold xl:text-3xl leading-5">
                        Search Ads
                      </h3>
                      <form action="#" className="relative">
                        <input
                          type="text"
                          placeholder="Search Here..."
                          className="pr-12 pl-4 w-full h-12 rounded-md border border-gray-200 border-solid cursor-text focus:shadow-none focus:no-underline"
                        />
                        <button
                          type="submit"
                          className="block absolute w-10 h-10 text-center normal-case bg-transparent rounded-md border-none cursor-pointer focus:shadow-none focus:no-underline hover:text-blue-700"
                          style={{
                            right: "5px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            transition: "all 0.4s ease 0s",
                            borderWidth: "medium",
                          }}
                        >
                          <i className="inline-block leading-4 normal-case" />
                        </button>
                      </form>
                    </div>
                    <div className="p-8 mb-8 bg-white rounded-md border border-gray-200 border-solid">
                      <h3 className="block mb-6 text-lg font-semibold xl:text-3xl leading-5">
                        All Categories
                      </h3>
                      <ul className="mb-4 list-none">
                        <li className="mb-6 text-left">
                          <a
                            href="javascript:void(0)"
                            className="block relative pr-8 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                            style={{ transition: "all 0.4s ease 0s" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline-block mr-1 leading-4 normal-case mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                            Smartphones
                            <span
                              className="absolute w-8 h-8 text-xs leading-7 inline-block text-center no-underline border -right-0 border-gray-200 border-solid hover:bg-blue-700 hover:border-transparent hover:text-white"
                              style={{
                                transition: "all 0.4s ease 0s",
                                borderRadius: "50%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              15
                            </span>
                          </a>
                        </li>
                        <li className="mb-6 text-left">
                          <a
                            href="javascript:void(0)"
                            className="block relative pr-8 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                            style={{ transition: "all 0.4s ease 0s" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline-block mr-1 leading-4 normal-case mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            Household
                            <span
                              className="absolute w-8 h-8 text-xs leading-7 inline-block text-center no-underline border -right-0 border-gray-200 border-solid hover:bg-blue-700 hover:border-transparent hover:text-white"
                              style={{
                                transition: "all 0.4s ease 0s",
                                borderRadius: "50%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              20
                            </span>
                          </a>
                        </li>

                        <li className="mb-6 text-left">
                          <a
                            href="javascript:void(0)"
                            className="block relative pr-8 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                            style={{ transition: "all 0.4s ease 0s" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline-block mr-1 leading-4 normal-case mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            Computers
                            <span
                              className="absolute w-8 h-8 text-xs leading-7 inline-block text-center no-underline border -right-0 border-gray-200 border-solid hover:bg-blue-700 hover:border-transparent hover:text-white"
                              style={{
                                transition: "all 0.4s ease 0s",
                                borderRadius: "50%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              18
                            </span>
                          </a>
                        </li>
                        <li className="mb-6 text-left">
                          <a
                            href="javascript:void(0)"
                            className="block relative pr-8 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                            style={{ transition: "all 0.4s ease 0s" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline-block mr-1 leading-4 normal-case mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                            Books
                            <span
                              className="absolute w-8 h-8 text-xs leading-7 inline-block text-center no-underline border -right-0 border-gray-200 border-solid hover:bg-blue-700 hover:border-transparent hover:text-white"
                              style={{
                                transition: "all 0.4s ease 0s",
                                borderRadius: "50%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              35
                            </span>
                          </a>
                        </li>
                        <li className="mb-6 text-left">
                          <a
                            href="javascript:void(0)"
                            className="block relative pr-8 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                            style={{ transition: "all 0.4s ease 0s" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline-block mr-1 leading-4 normal-case mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                            Electronics
                            <span
                              className="absolute w-8 h-8 text-xs leading-7 inline-block text-center no-underline border -right-0 border-gray-200 border-solid hover:bg-blue-700 hover:border-transparent hover:text-white"
                              style={{
                                transition: "all 0.4s ease 0s",
                                borderRadius: "50%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              30
                            </span>
                          </a>
                        </li>
                        <li className="mb-6 text-left">
                          <a
                            href="javascript:void(0)"
                            className="block relative pr-8 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                            style={{ transition: "all 0.4s ease 0s" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline-block mr-1 leading-4 normal-case mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                              />
                            </svg>
                            Clothes
                            <span
                              className="absolute w-8 h-8 text-xs leading-7 inline-block text-center no-underline border -right-0 border-gray-200 border-solid hover:bg-blue-700 hover:border-transparent hover:text-white"
                              style={{
                                transition: "all 0.4s ease 0s",
                                borderRadius: "50%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              55
                            </span>
                          </a>
                        </li>
                        <li className="text-left">
                          <a
                            href="javascript:void(0)"
                            className="block relative pr-8 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                            style={{ transition: "all 0.4s ease 0s" }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 inline-block mr-1 leading-4 normal-case mb-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Jewelry &amp; Accessories
                            <span
                              className="absolute w-8 h-8 text-xs leading-7 inline-block text-center no-underline border -right-0 border-gray-200 border-solid hover:bg-blue-700 hover:border-transparent hover:text-white"
                              style={{
                                transition: "all 0.4s ease 0s",
                                borderRadius: "50%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              55
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 mb-8 bg-white rounded-md border border-gray-200 border-solid">
                      <h3 className="block mb-6 text-lg font-semibold xl:text-3xl leading-5">
                        Condition
                      </h3>
                      <div
                        className="block pl-6 mb-2"
                        style={{ minHeight: "1.5rem" }}
                      >
                        <input
                          className="float-left mt-1 -ml-6 w-4 h-4 align-top bg-no-repeat bg-contain rounded border border-gray-500 border-solid appearance-none cursor-pointer focus:border-blue-300 focus:shadow-xs focus:no-underline"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault1"
                          style={{
                            backgroundPosition: "center center",
                            colorAdjust: "exact",
                          }}
                        />
                        <label
                          className="inline-block cursor-pointer"
                          htmlFor="flexCheckDefault1"
                        >
                          All
                        </label>
                      </div>
                      <div
                        className="block pl-6 mb-2"
                        style={{ minHeight: "1.5rem" }}
                      >
                        <input
                          className="float-left mt-1 -ml-6 w-4 h-4 align-top bg-no-repeat bg-contain rounded border border-gray-500 border-solid appearance-none cursor-pointer focus:border-blue-300 focus:shadow-xs focus:no-underline"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault2"
                          style={{
                            backgroundPosition: "center center",
                            colorAdjust: "exact",
                          }}
                        />
                        <label
                          className="inline-block cursor-pointer"
                          htmlFor="flexCheckDefault2"
                        >
                          New
                        </label>
                      </div>
                      <div
                        className="block pl-6"
                        style={{ minHeight: "1.5rem" }}
                      >
                        <input
                          className="float-left mt-1 -ml-6 w-4 h-4 align-top bg-no-repeat bg-contain rounded border border-gray-500 border-solid appearance-none cursor-pointer focus:border-blue-300 focus:shadow-xs focus:no-underline"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault3"
                          style={{
                            backgroundPosition: "center center",
                            colorAdjust: "exact",
                          }}
                        />
                        <label
                          className="inline-block cursor-pointer"
                          htmlFor="flexCheckDefault3"
                        >
                          Used
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-full max-w-full md:flex-none md:w-2/3 lg:flex-none lg:w-3/4 ">
                  <div className="box-border">
                    <div className="flex flex-wrap pl-5 sm:pl-0">
                      <div className="flex-none w-full max-w-full">
                        <div className="py-4 pr-4 pl-5 bg-white rounded-md border border-gray-200 border-solid lg:ml-3">
                          <div className="flex flex-wrap items-center">
                            <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/2">
                              <h3 className="float-left mb-2 text-sm font-medium text-gray-600 xl:text-xl leading-5">
                                Showing 1-12 of 21 ads found
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="box-border" id="nav-tabContent">
                          <div
                            className="block"
                            id="nav-grid"
                            role="tabpanel"
                            aria-labelledby="nav-grid-tab"
                            style={{ transition: "opacity 0.15s linear 0s" }}
                          >
                            <div className="flex flex-wrap">
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>

                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Mobile
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl leading-5"
                                      style={{
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Apple Iphone X
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        Boston
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $890.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Others
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl leading-5"
                                      style={{
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Travel Kit
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        San Francisco
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $580.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Electronic
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl leading-5"
                                      style={{
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Nikon DSLR Camera
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        Alaska, USA
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $560.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Furniture
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl leading-5"
                                      style={{
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Poster Paint
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        Las Vegas
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $85.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Furniture
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl"
                                      style={{
                                        lineHeight: "1.2",
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Official Metting Chair
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        Alaska, USA
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $750.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-green-800 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Rent
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Books &amp; Magazine
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl"
                                      style={{
                                        lineHeight: "1.2",
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Story Book
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        New York, USA
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $120.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Electronic
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl"
                                      style={{
                                        lineHeight: "1.2",
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Cctv camera
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        Delhi, India
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $350.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Mobile
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl"
                                      style={{
                                        lineHeight: "1.2",
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Apple Iphone X
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        Boston
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $890.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/3  px-3">
                                <div
                                  className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                  style={{
                                    transition: "all 0.4s ease 0s",
                                    backgroundPosition: "0% center",
                                  }}
                                >
                                  <div className="overflow-hidden relative">
                                    <Link href="/listings/product">
                                      <a
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                        className="inline-block w-full text-blue-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      >
                                        <Image
                                          height={200}
                                          width={300}
                                          layout="responsive"
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                    </Link>
                                    <i
                                      className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-blue-700"
                                      style={{
                                        left: "15px",
                                        borderBottomLeftRadius: "3px",
                                        borderBottomRightRadius: "3px",
                                        clipPath:
                                          "polygon(0px 0px, 53% 0px, 100% 0px, 100% 100%, 50% 85%, 0px 100%)",
                                        backgroundPosition: "0% center",
                                        fontFamily: '"LineIcons"',
                                      }}
                                    />
                                    <span
                                      className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no- capitalize bg-red-600 rounded-sm"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        top: "15px",
                                        right: "15px",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      Sale
                                    </span>
                                  </div>
                                  <div className="py-5 pr-6 pl-5">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-sm font-medium leading-5 text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Mobile
                                    </a>
                                    <h3
                                      className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl"
                                      style={{
                                        lineHeight: "1.2",
                                        fontSize: "calc(1.3rem + 0.6vw)",
                                      }}
                                    >
                                      <Link href="/category">
                                        <a
                                          className="inline-block text-lg font-semibold leading-5 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Samsung Glalaxy S8
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="mt-2 mb-4 font-sans text-sm">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-gray-600 cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6\4 w-4 inline-block mr-1 leading-4 text-blue-700 normal-case"
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
                                        Delaware, USA
                                      </a>
                                    </p>
                                    <ul className="overflow-hidden my-4 list-none">
                                      <li
                                        className="float-left relative text-lg font-semibold leading-7 text-left text-blue-700"
                                        style={{ top: "5px" }}
                                      >
                                        $299.00
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap">
                              <div className="flex-none w-full max-w-full">
                                <div
                                  className="flex mt-8 text-left"
                                  style={{ listStyle: "outside none none" }}
                                >
                                  <ul className="inline-block overflow-hidden pl-3 mb-4 list-none">
                                    <li className="inline-block mt-2 mr-1">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-blue-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          backgroundPosition: "0% center",
                                        }}
                                      >
                                        1
                                      </a>
                                    </li>
                                    <li className="inline-block mt-2 mr-1">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center text-white bg-scroll bg-blue-700 bg-repeat bg-none rounded border border-transparent border-solid cursor-pointer hover:bg-blue-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          backgroundPosition: "0% center",
                                        }}
                                      >
                                        2
                                      </a>
                                    </li>
                                    <li className="inline-block mt-2 mr-1">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-blue-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          backgroundPosition: "0% center",
                                        }}
                                      >
                                        3
                                      </a>
                                    </li>
                                    <li className="inline-block mt-2 mr-1">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-blue-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          backgroundPosition: "0% center",
                                        }}
                                      >
                                        4
                                      </a>
                                    </li>
                                    <li className="inline-block mt-2">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-blue-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          backgroundPosition: "0% center",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6 inline-block text-xs leading-3 "
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                          />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
