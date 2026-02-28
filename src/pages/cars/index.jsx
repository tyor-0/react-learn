import React from "react";
import { useGetAllCars } from "./hooks/useGetAllCars";
import { Link } from "react-router-dom";

const Cars = () => {
  const { error, cars, loading, query, handleQuery, handleSearch } = useGetAllCars();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading cars...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            Available Cars
          </h1>
          
          <div>
            <input
              onChange={handleQuery}
              value={query}
              type="text"
              placeholder="Search for cars here"
              className="border h-8 px-3 text-black"
            />
            <button
              onClick={handleSearch}
              className="py-1 mx-2 px-3 rounded bg-blue-600"
            >
              Search
            </button>
          </div>

          {/* {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div>
            {cars.map((car) => (
              <p key={car._id}>{car.name}</p>
            ))}
          </div> */}

        </div>
        <Link to={"/cars/add"}>
          <button className="py-1 px-3 text-black border border-indigo-600">
            Add car
          </button>
        </Link>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {!cars || cars.length === 0 ? (
            <div className="flex min-h-screen items-center justify-center">
              <p className="text-gray-500">No cars available</p>
            </div>
          ) : (
            cars.map((car) => (
              <div
                key={car._id}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {car.brand} {car.model}
                  </h2>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${car.isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {car.isAvailable ? "Available" : "Unavailable"}
                  </span>
                </div>
                <img src={car.image} alt={car.model} />

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-700">
                      Transmission:
                    </span>{" "}
                    {car.transmission}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Year:</span>{" "}
                    {car.year}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Price:</span> $
                    {Number(car.price).toLocaleString()}
                  </p>
                </div>


                {/* Available Cars */}
                {/* <Link to={`/cars/${car._id}`}>
                  <button
                    className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                    disabled={!car.isAvailable}
                  >
                    {car.isAvailable ? "Book Car" : "Not Available"}
                  </button>
                </Link> */}

                <Link to={`/cars/${car._id}`}>
                  <button className="mt-4 w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition text-sm">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Cars;
