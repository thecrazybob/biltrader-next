import Link from "next/link";

const ListingCard = ({ listings }) => {
  return (
    <>
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Explore Popular Deals
        </h2>
      </div>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listings.map((id, listing) => (
              <li
                key={id}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <Link href="/listings/product">
                  <a>
                    <div className="flex-1 flex flex-col">
                      <img
                        className="object-fill  bg-black "
                        src="https://loremflickr.com/cache/resized/711_22567986315_a2f3dd9a32_320_240_nofilter.jpg"
                        alt=""
                      />
                      <h3 className="mt-6 text-gray-900 text-sm font-medium">
                        {listing.title}
                      </h3>
                      <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500 text-sm">Category</dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="my-3">
                          <span className="px-2 py-1 text-blue-800 text-xs font-medium bg-blue-100 rounded-full">
                            TL 500
                          </span>
                        </dd>
                      </dl>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:8080/api/v1/listing/all");
  const listings = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      listings,
    },
  };
}

export default ListingCard;
