import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from 'next/image'

const Category = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <section className="relative py-24 leading-6 text-gray-900 bg-gray-100 md:md:py-16">
          <div className="mx-auto w-full text-gray-900 max-w-screen-2xl">
            <div className="flex flex-wrap">
              <div className="flex-none w-full max-w-full md:flex-none md:w-1/3 lg:flex-none lg:w-1/4">
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
                        className="block absolute w-10 h-10 text-center normal-case bg-transparent rounded-md border-none cursor-pointer focus:shadow-none focus:no-underline hover:text-purple-700"
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
                    <ul className="pl-8 mb-4 list-none">
                      <li className="mb-6 text-left">
                        <a
                          href="javascript:void(0)"
                          className="block relative pr-8 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                          style={{ transition: "all 0.4s ease 0s" }}
                        >
                          <i className="inline-block mr-1 leading-4 normal-case" />
                          Hotel &amp; Travels
                          <span
                            className="block absolute w-8 h-8 text-xs leading-7 text-center no-underline border border-gray-200 border-solid hover:bg-purple-700 hover:border-transparent hover:text-white"
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
                          className="block relative pr-8 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                          style={{ transition: "all 0.4s ease 0s" }}
                        >
                          <i className="inline-block mr-1 leading-4 normal-case" />
                          Services
                          <span
                            className="block absolute w-8 h-8 text-xs leading-7 text-center no-underline border border-gray-200 border-solid hover:bg-purple-700 hover:border-transparent hover:text-white"
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
                          className="block relative pr-8 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                          style={{ transition: "all 0.4s ease 0s" }}
                        >
                          <i className="inline-block mr-1 leading-4 normal-case" />
                          Marketing
                          <span
                            className="block absolute w-8 h-8 text-xs leading-7 text-center no-underline border border-gray-200 border-solid hover:bg-purple-700 hover:border-transparent hover:text-white"
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
                      <li className="mb-6 text-left">
                        <a
                          href="javascript:void(0)"
                          className="block relative pr-8 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                          style={{ transition: "all 0.4s ease 0s" }}
                        >
                          <i className="inline-block mr-1 leading-4 normal-case" />
                          Real Estate
                          <span
                            className="block absolute w-8 h-8 text-xs leading-7 text-center no-underline border border-gray-200 border-solid hover:bg-purple-700 hover:border-transparent hover:text-white"
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
                          className="block relative pr-8 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                          style={{ transition: "all 0.4s ease 0s" }}
                        >
                          <i className="inline-block mr-1 leading-4 normal-case" />
                          Electronics
                          <span
                            className="block absolute w-8 h-8 text-xs leading-7 text-center no-underline border border-gray-200 border-solid hover:bg-purple-700 hover:border-transparent hover:text-white"
                            style={{
                              transition: "all 0.4s ease 0s",
                              borderRadius: "50%",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            60
                          </span>
                        </a>
                      </li>
                      <li className="mb-6 text-left">
                        <a
                          href="javascript:void(0)"
                          className="block relative pr-8 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                          style={{ transition: "all 0.4s ease 0s" }}
                        >
                          <i className="inline-block mr-1 leading-4 normal-case" />
                          Dress &amp; Clothing
                          <span
                            className="block absolute w-8 h-8 text-xs leading-7 text-center no-underline border border-gray-200 border-solid hover:bg-purple-700 hover:border-transparent hover:text-white"
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
                          className="block relative pr-8 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                          style={{ transition: "all 0.4s ease 0s" }}
                        >
                          <i className="inline-block mr-1 leading-4 normal-case" />
                          Jewelry &amp; Accessories
                          <span
                            className="block absolute w-8 h-8 text-xs leading-7 text-center no-underline border border-gray-200 border-solid hover:bg-purple-700 hover:border-transparent hover:text-white"
                            style={{
                              transition: "all 0.4s ease 0s",
                              borderRadius: "50%",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            45
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-8 mb-8 bg-white rounded-md border border-gray-200 border-solid">
                    <h3 className="block mb-6 text-lg font-semibold xl:text-3xl leading-5">
                      Price Range
                    </h3>
                    <input
                      type="range"
                      className="w-full h-6 bg-transparent appearance-none cursor-pointer focus:shadow-none focus:no-underline"
                      name="range"
                      step={1}
                      min={100}
                      max={10000}
                      defaultValue={10}
                      onChange="rangePrimary.value=value"
                    />
                    <div className="relative pl-4">
                      <label
                        className="inline-block absolute left-0 text-sm cursor-default"
                        style={{ top: "50%", transform: "translateY(-50%)" }}
                      >
                        $
                      </label>
                      <input
                        type="text"
                        id="rangePrimary"
                        placeholder={100}
                        className="inline-block border-none cursor-pointer focus:shadow-none focus:no-underline"
                        style={{ borderWidth: "medium" }}
                      />
                    </div>
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
                    <div className="block pl-6" style={{ minHeight: "1.5rem" }}>
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
              <div className="flex-none w-full max-w-full md:flex-none md:w-2/3 lg:flex-none lg:w-3/4">
                <div className="box-border">
                  <div className="flex flex-wrap pl-5">
                    <div className="flex-none w-full max-w-full">
                      <div className="py-4 pr-4 pl-5 bg-white rounded-md border border-gray-200 border-solid">
                        <div className="flex flex-wrap items-center">
                          <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/2">
                            <h3 className="float-left mb-2 text-sm font-medium text-gray-600 xl:text-3xl leading-5">
                              Showing 1-12 of 21 ads found
                            </h3>
                          </div>
                          <div className="flex-none w-full max-w-full md:flex-none md:w-1/2 lg:flex-none lg:w-1/2">
                            <nav className="box-border">
                              <div
                                className="flex float-right flex-wrap mt-4 border-gray-300 border-none"
                                id="nav-tab"
                                role="tablist"
                                style={{
                                  listStyle: "outside none none",
                                  borderWidth: "medium",
                                }}
                              >
                                <button
                                  className="block py-1 px-2 mr-1 -mb-px text-center text-white no-underline normal-case bg-scroll bg-purple-700 bg-repeat bg-none rounded rounded-t border border-transparent border-solid cursor-pointer focus:border-gray-300 focus:shadow-none focus:no-underline hover:border-gray-300"
                                  id="nav-grid-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-grid"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-grid"
                                  aria-selected="true"
                                  style={{
                                    transition:
                                      "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s",
                                    backgroundPosition: "0px center",
                                  }}
                                >
                                  <i className="inline-block leading-4 normal-case" />
                                </button>
                                <button
                                  className="block py-1 px-2 text-center text-black no-underline normal-case bg-scroll bg-repeat bg-none rounded rounded-t border border-gray-200 border-solid cursor-pointer focus:border-gray-300 focus:shadow-none focus:no-underline hover:border-gray-300"
                                  id="nav-list-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-list"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-list"
                                  aria-selected="false"
                                  style={{
                                    transition:
                                      "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s",
                                    backgroundPosition: "0px center",
                                  }}
                                >
                                  <i className="inline-block leading-4 normal-case" />
                                </button>
                              </div>
                            </nav>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Apple Iphone X
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      Boston
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $890.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    Others
                                  </a>
                                  <h3
                                    className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl"
                                    style={{
                                      lineHeight: "1.2",
                                      fontSize: "calc(1.3rem + 0.6vw)",
                                    }}
                                  >
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Travel Kit
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      San Francisco
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $580.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Nikon DSLR Camera
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      Alaska, USA
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $560.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
                                    layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Poster Paint
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      Las Vegas
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $85.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Official Metting Chair
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      Alaska, USA
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $750.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-green-800 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Story Book
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      New York, USA
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $120.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Cctv camera
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      Delhi, India
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $350.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
                                    height={200}
                                    width={300}
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Apple Iphone X
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      Boston
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $890.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                  <a
                                    href="item-details.html"
                                    className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                    style={{ transition: "all 0.4s ease 0s" }}
                                  >
                                    <Image
layout='fill'
                                      src="https://picsum.photos/id/0/5616/3744"
                                      alt="#"
                                      className="w-full align-middle"
                                      style={{ transition: "all 0.3s ease 0s" }}
                                    />
                                  </a>
                                  <i
                                    className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                    className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                    className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
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
                                    <a
                                      href="item-details.html"
                                      className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      Samsung Glalaxy S8
                                    </a>
                                  </h3>
                                  <p className="mt-2 mb-4 font-sans text-sm">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                      style={{ transition: "all 0.4s ease 0s" }}
                                    >
                                      <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                      Delaware, USA
                                    </a>
                                  </p>
                                  <ul className="overflow-hidden my-4 list-none">
                                    <li
                                      className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                      style={{ top: "5px" }}
                                    >
                                      $299.00
                                    </li>
                                    <li className="float-right text-left">
                                      <a
                                        href="javascript:void(0)"
                                        className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                          borderRadius: "50%",
                                        }}
                                      >
                                        <i className="inline-block leading-3 normal-case" />
                                      </a>
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
                                <ul className="inline-block overflow-hidden pl-8 mb-4 list-none">
                                  <li className="inline-block mt-2 mr-1">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center text-white underline bg-scroll bg-purple-700 bg-repeat bg-none rounded border border-transparent border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      <i className="inline-block text-xs leading-3 normal-case" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="hidden opacity-0"
                          id="nav-list"
                          role="tabpanel"
                          aria-labelledby="nav-list-tab"
                          style={{ transition: "opacity 0.15s linear 0s" }}
                        >
                          <div className="flex flex-wrap">
                            <div className="flex-none w-full max-w-full md:flex-none md:w-full lg:flex-none lg:w-full">
                              <div
                                className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                style={{
                                  transition: "all 0.4s ease 0s",
                                  backgroundPosition: "0% center",
                                }}
                              >
                                <div className="flex flex-wrap items-center">
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-7/12 lg:flex-none lg:w-5/12">
                                    <div className="overflow-hidden relative">
                                      <a
                                        href="item-details.html"
                                        className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <Image
layout='fill'
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                      <i
                                        className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                        className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                  </div>
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-5/12 lg:flex-none lg:w-7/12">
                                    <div className="py-5 pr-6 pl-5">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        Others
                                      </a>
                                      <h3
                                        className="pt-2 my-2 font-medium border-t border-gray-200 border-solid xl:text-3xl"
                                        style={{
                                          lineHeight: "1.2",
                                          fontSize: "calc(1.3rem + 0.6vw)",
                                        }}
                                      >
                                        <a
                                          href="item-details.html"
                                          className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Travel Kit
                                        </a>
                                      </h3>
                                      <p className="mt-2 mb-4 font-sans text-sm">
                                        <a
                                          href="javascript:void(0)"
                                          className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                          San Francisco
                                        </a>
                                      </p>
                                      <ul className="overflow-hidden my-4 list-none">
                                        <li
                                          className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                          style={{ top: "5px" }}
                                        >
                                          $580.00
                                        </li>
                                        <li className="float-right text-left">
                                          <a
                                            href="javascript:void(0)"
                                            className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                            style={{
                                              transition: "all 0.4s ease 0s",
                                              borderRadius: "50%",
                                            }}
                                          >
                                            <i className="inline-block leading-3 normal-case" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-none w-full max-w-full md:flex-none md:w-full lg:flex-none lg:w-full">
                              <div
                                className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                style={{
                                  transition: "all 0.4s ease 0s",
                                  backgroundPosition: "0% center",
                                }}
                              >
                                <div className="flex flex-wrap items-center">
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-7/12 lg:flex-none lg:w-5/12">
                                    <div className="overflow-hidden relative">
                                      <a
                                        href="item-details.html"
                                        className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <Image
layout='fill'
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                      <i
                                        className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                        className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                  </div>
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-5/12 lg:flex-none lg:w-7/12">
                                    <div className="py-5 pr-6 pl-5">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
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
                                        <a
                                          href="item-details.html"
                                          className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Nikon DSLR Camera
                                        </a>
                                      </h3>
                                      <p className="mt-2 mb-4 font-sans text-sm">
                                        <a
                                          href="javascript:void(0)"
                                          className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                          Alaska, USA
                                        </a>
                                      </p>
                                      <ul className="overflow-hidden my-4 list-none">
                                        <li
                                          className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                          style={{ top: "5px" }}
                                        >
                                          $560.00
                                        </li>
                                        <li className="float-right text-left">
                                          <a
                                            href="javascript:void(0)"
                                            className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                            style={{
                                              transition: "all 0.4s ease 0s",
                                              borderRadius: "50%",
                                            }}
                                          >
                                            <i className="inline-block leading-3 normal-case" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-none w-full max-w-full md:flex-none md:w-full lg:flex-none lg:w-full">
                              <div
                                className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                style={{
                                  transition: "all 0.4s ease 0s",
                                  backgroundPosition: "0% center",
                                }}
                              >
                                <div className="flex flex-wrap items-center">
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-7/12 lg:flex-none lg:w-5/12">
                                    <div className="overflow-hidden relative">
                                      <a
                                        href="item-details.html"
                                        className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <Image
layout='fill'
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                      <i
                                        className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                        className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                  </div>
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-5/12 lg:flex-none lg:w-7/12">
                                    <div className="py-5 pr-6 pl-5">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
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
                                        <a
                                          href="item-details.html"
                                          className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Apple Iphone X
                                        </a>
                                      </h3>
                                      <p className="mt-2 mb-4 font-sans text-sm">
                                        <a
                                          href="javascript:void(0)"
                                          className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                          Boston
                                        </a>
                                      </p>
                                      <ul className="overflow-hidden my-4 list-none">
                                        <li
                                          className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                          style={{ top: "5px" }}
                                        >
                                          $890.00
                                        </li>
                                        <li className="float-right text-left">
                                          <a
                                            href="javascript:void(0)"
                                            className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                            style={{
                                              transition: "all 0.4s ease 0s",
                                              borderRadius: "50%",
                                            }}
                                          >
                                            <i className="inline-block leading-3 normal-case" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-none w-full max-w-full md:flex-none md:w-full lg:flex-none lg:w-full">
                              <div
                                className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                style={{
                                  transition: "all 0.4s ease 0s",
                                  backgroundPosition: "0% center",
                                }}
                              >
                                <div className="flex flex-wrap items-center">
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-7/12 lg:flex-none lg:w-5/12">
                                    <div className="overflow-hidden relative">
                                      <a
                                        href="item-details.html"
                                        className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <Image
layout='fill'
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                      <i
                                        className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                        className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-red-600 rounded-sm"
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
                                  </div>
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-5/12 lg:flex-none lg:w-7/12">
                                    <div className="py-5 pr-6 pl-5">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
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
                                        <a
                                          href="item-details.html"
                                          className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Poster Paint
                                        </a>
                                      </h3>
                                      <p className="mt-2 mb-4 font-sans text-sm">
                                        <a
                                          href="javascript:void(0)"
                                          className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                          Las Vegas
                                        </a>
                                      </p>
                                      <ul className="overflow-hidden my-4 list-none">
                                        <li
                                          className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                          style={{ top: "5px" }}
                                        >
                                          $85.00
                                        </li>
                                        <li className="float-right text-left">
                                          <a
                                            href="javascript:void(0)"
                                            className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                            style={{
                                              transition: "all 0.4s ease 0s",
                                              borderRadius: "50%",
                                            }}
                                          >
                                            <i className="inline-block leading-3 normal-case" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-none w-full max-w-full md:flex-none md:w-full lg:flex-none lg:w-full">
                              <div
                                className="overflow-hidden mt-8 bg-scroll bg-repeat bg-none rounded-md border border-gray-300 border-solid hover:bg-white hover:shadow-xs"
                                style={{
                                  transition: "all 0.4s ease 0s",
                                  backgroundPosition: "0% center",
                                }}
                              >
                                <div className="flex flex-wrap items-center">
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-7/12 lg:flex-none lg:w-5/12">
                                    <div className="overflow-hidden relative">
                                      <a
                                        href="item-details.html"
                                        className="inline-block w-full text-blue-600 underline cursor-pointer hover:text-blue-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
                                      >
                                        <Image
layout='fill'
                                          src="https://picsum.photos/id/0/5616/3744"
                                          alt="#"
                                          className="w-full align-middle"
                                          style={{
                                            transition: "all 0.3s ease 0s",
                                          }}
                                        />
                                      </a>
                                      <i
                                        className="inline-block absolute w-6 h-8 text-sm leading-7 text-center text-white normal-case bg-purple-700"
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
                                        className="inline-block absolute py-px px-2 text-xs tracking-wide leading-4 text-white no-underline capitalize bg-green-800 rounded-sm"
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
                                  </div>
                                  <div className="flex-none w-full max-w-full md:flex-none md:w-5/12 lg:flex-none lg:w-7/12">
                                    <div className="py-5 pr-6 pl-5">
                                      <a
                                        href="javascript:void(0)"
                                        className="inline-block text-sm font-medium leading-5 text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                        style={{
                                          transition: "all 0.4s ease 0s",
                                        }}
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
                                        <a
                                          href="item-details.html"
                                          className="inline-block text-lg font-semibold leading-5 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          Story Book
                                        </a>
                                      </h3>
                                      <p className="mt-2 mb-4 font-sans text-sm">
                                        <a
                                          href="javascript:void(0)"
                                          className="inline-block text-gray-600 underline cursor-pointer hover:text-purple-700 focus:shadow-none focus:no-underline"
                                          style={{
                                            transition: "all 0.4s ease 0s",
                                          }}
                                        >
                                          <i className="inline-block mr-1 leading-4 text-purple-700 normal-case"></i>
                                          New York, USA
                                        </a>
                                      </p>
                                      <ul className="overflow-hidden my-4 list-none">
                                        <li
                                          className="float-left relative text-lg font-semibold leading-7 text-left text-purple-700"
                                          style={{ top: "5px" }}
                                        >
                                          $120.00
                                        </li>
                                        <li className="float-right text-left">
                                          <a
                                            href="javascript:void(0)"
                                            className="block w-8 h-8 text-sm leading-9 text-center text-gray-600 underline border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                            style={{
                                              transition: "all 0.4s ease 0s",
                                              borderRadius: "50%",
                                            }}
                                          >
                                            <i className="inline-block leading-3 normal-case" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
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
                                <ul className="inline-block overflow-hidden pl-8 mb-4 list-none">
                                  <li className="inline-block mt-2 mr-1">
                                    <a
                                      href="javascript:void(0)"
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center text-white underline bg-scroll bg-purple-700 bg-repeat bg-none rounded border border-transparent border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
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
                                      className="inline-block w-10 h-10 text-sm font-medium leading-9 text-center underline bg-scroll bg-white bg-repeat bg-none rounded border border-gray-200 border-solid cursor-pointer hover:bg-purple-700 hover:border-transparent hover:text-white focus:shadow-none focus:no-underline"
                                      style={{
                                        transition: "all 0.4s ease 0s",
                                        backgroundPosition: "0% center",
                                      }}
                                    >
                                      <i className="inline-block text-xs leading-3 normal-case" />
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
      <Footer />
    </>
  );
};

export default Category;
