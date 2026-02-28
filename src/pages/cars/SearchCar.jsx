import { useState } from "react"
import axiosInstance from "../../api/axiosInstance"
import { useNavigate } from "react-router-dom"
//Imports the useState hook from React to manage component state.

function SearchCars() {
  const [search, setSearch] = useState("")
  //search: Stores the user's input text (initialized as empty string)
  const [cars, setCars] = useState([])
  //cars: Stores the list of cars returned from the API (initialized as empty array)
  const [error, setError] = useState(null)
  //error: Stores any error message that may occur during the API request (initialized as null)
  const [loading, setLoading] = useState(false)
  //loading: Indicates whether the API request is in progress (initialized as false)
  const navigate = useNavigate()


  async function handleSearch() {
    setLoading(true)

    try {
      const res = await axiosInstance.get(`/cars?search=${encodeURIComponent(search)}`)
      // Sends a GET request to /cars endpoint with the search query as a parameter. encodeURIComponent() safely encodes special characters.
      const data = res.data
      console.log(data);
      // Converts the response to JSON and logs it for debugging.
      setCars(data.allCars)
      // Updates the cars state with the results from the API response.
      navigate(`/cars/search?query=${encodeURIComponent(search)}`)
    } catch (error) {
      console.log(error);
      setError(error.message || "something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search cars"
      />
      {/* Creates a controlled input that updates the search state as the user types*/}

      <button onClick={handleSearch}>Search</button>

      {cars.map((car) => (
        <p key={car._id}>{car.name}</p>
      ))}
    </>
  )
}

export default SearchCars