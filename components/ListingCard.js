import Link from "next/link";

const ListingCard = () => {
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/711_22567986315_a2f3dd9a32_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/7515_16040646041_13a426443c_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/711_22567986315_a2f3dd9a32_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/7515_16040646041_13a426443c_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/7515_16040646041_13a426443c_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/711_22567986315_a2f3dd9a32_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/7515_16040646041_13a426443c_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <Link href="/listings/product">
                <a>
                  <div className="flex-1 flex flex-col">
                    <img
                      className="object-fill  bg-black "
                      src="https://loremflickr.com/cache/resized/7515_16040646041_13a426443c_320_240_nofilter.jpg"
                      alt=""
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">
                      Item Name
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
