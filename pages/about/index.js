import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function About() {
  return (
      <>
      <Header></Header>
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              JavaScript for Beginners
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
          Nowadays we have plenty of websites that provide the opportunity to offer products online for
people to buy, therefore bringing benefit for the seller and facilitating the task of searching for
this product on the buyer's side. However, when it gets to the classifieds website, people have
to go through tons of search results and contact people who can possibly be located in another
city. Next comes scammers who try to deceit the seller by offering excessive prices and luring
sellers into their scam, defeating the whole purpose of saving money by buying used items.
Buying and selling on a classifieds website is a heinous task and therefore people avoid it.
BilTrader solves most of these issues. It is solely focused on the members of the university and
it links each university member’s account with their university ID (e.g., available only to those
with a valid Bilkent email address). The main advantage of such a website is that it is created
specifically for Bilkenters, which means that everything that is offered can be bought inside the
campus and as a result, the buyer doesn't have to go far to buy the product. An additional benefit
is the common interest in the items that will be offered. Bilkent students and academics alike
will find it easy to look for items that they are interested in, such as textbooks, course-related
items, and many other things. Because of the smaller scope of the website, it is easier to search
and navigate it. Additionally, the website can be navigated in multiple languages, for example
English and Turkish. The process of buying/selling is very simple: the seller posts an ad about
his product and precise a price; then the buyer who is interested in the product can use the chat
feature to contact the seller and agree on a time and location to meet on campus.
At the same time, maintaining such a classifieds website might require manual moderation,
especially if the number of users increases over time. This project will ensure little to al-most
no manual moderation by automating the moderation process. The automated moderation process will include keyword filtering, image analysis through API, and rate-limiting users in case
they post more than a certain defined limit.
            </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
