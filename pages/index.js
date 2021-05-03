import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      {/* Start of Hero Section  */}
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden lg:block lg:absolute lg:inset-0"
          aria-hidden="true"
        ></div>
        <div className="relative pt-6 pb-16 sm:pb-10 lg:pb-12">
          <main className="mt-1 mx-auto max-w-7xl px-4 sm:mt-5 sm:px-6 lg:mt-3">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    Coming soon
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="block text-gray-900">
                      Buy And Sell Second hand
                    </span>
                    <span className="block text-blue-700">
                      Find Great Deals!
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Make some extra cash by selling things in your community. Go
                  on, it's quick and easy.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <form action="#" method="POST" className="mt-3 sm:flex">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-700 focus:border-blue-700 sm:flex-1 border-gray-300"
                      placeholder="Search for anything.."
                    />
                    <button
                      type="submit"
                      className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                  <Image
                    src="/images/home-hero.svg"
                    alt="Hero picture"
                    width={450}
                    height={350}
                    quality={100}
                    className="w-full transform scale-150"
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Start of Popular Categories */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 text-center sm:px-6 lg:px-8 lg:py-15">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Explore Popular Categories
              </h2>
            </div>
            <div className="flex flex-row flex-wrap space-x-3 justify-center">
              <div className="w-36 mb-5">
                <img
                  className="mx-auto object-scale-down min-h-25 min-w-25 rounded-full "
                  src="https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.webp"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Shoes</h3>
                  </div>
                </div>
              </div>

              <div className="w-36 mb-5">
                <img
                  className="mx-auto object-scale-down h-25 w-25 rounded-full "
                  src="https://i.ebayimg.com/images/g/p30AAOSw1A1f4xc6/s-l200.webp"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Smartphone</h3>
                  </div>
                </div>
              </div>

              <div className="w-36 mb-5">
                <img
                  className="mx-auto object-scale-down min-h-25 min-w-25 rounded-full "
                  src="https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.webp"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Shoes</h3>
                  </div>
                </div>
              </div>

              <div className="w-36 mb-5">
                <img
                  className="mx-auto object-scale-down h-25 w-25 rounded-full "
                  src="https://i.ebayimg.com/images/g/p30AAOSw1A1f4xc6/s-l200.webp"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Smartphone</h3>
                  </div>
                </div>
              </div>

              <div className="w-36 mb-5">
                <img
                  className="mx-auto object-scale-down min-h-25 min-w-25 rounded-full "
                  src="https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.webp"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Shoes</h3>
                  </div>
                </div>
              </div>

              <div className="w-36 mb-5">
                <img
                  className="mx-auto object-scale-down h-25 w-25 rounded-full "
                  src="https://i.ebayimg.com/images/g/p30AAOSw1A1f4xc6/s-l200.webp"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Smartphone</h3>
                  </div>
                </div>
              </div>
              <div className="w-36 mb-5">
                <img
                  className="mx-auto object-scale-down h-25 w-25 rounded-full "
                  src="https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.webp"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Shoes</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of Popular Categories */}

      <ListingCard />
      <Footer />
    </>
  );
};

export default Home;
