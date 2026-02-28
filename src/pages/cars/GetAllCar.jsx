import React, { useEffect } from 'react'
import { useGetAllCars } from './hooks/useGetAllCars'
import { useNavigate } from 'react-router-dom';

function GetAllCars() {

  const { cars, loading, error, getAllCars } = useGetAllCars();
  const navigate = useNavigate();


  // Refetch cars when component mounts (e.g., after returning from add page)
  useEffect(() => {
    getAllCars();
  }, []);


  if (loading) {
    return (
      <p>Loading....</p>
    )
  }


  if (error) {
    console.log(error);

  }

  return (

    <div>
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-gray-50">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">All Cars</h2>
          <button
            onClick={() => navigate("/cars/add")}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
          >
            + Add Car
          </button>
        </div>

        {cars.length === 0 && (
          <p className='text-center text-gray-500'>No Cars available</p>
        )}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => {
            return (
              <div
                key={car._id}
                onClick={() => { /* handle click, e.g. navigate to details */ }}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
              >
                {/* Car Image */}
                {car.imageUrl && (
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={car.imageUrl}
                      alt={car.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                )}

                {/* Car Info */}
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wide text-gray-500">
                    {car.model}
                  </span>

                  <h2 className="text-lg font-semibold text-gray-900 mt-1">
                    {car.name}
                  </h2>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {car.description}
                  </p>

                  <p className="mt-3 text-indigo-600 font-bold">
                    ${car.price}
                  </p>

                  <button className="mt-4 w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition text-sm"
                    onClick={() => navigate(`${car._id}`)}>
                    View Details
                  </button>
                </div>
              </div>

            )
          }
          )}
        </div>
      </section>
    </div>
  )
}

export default GetAllCars;