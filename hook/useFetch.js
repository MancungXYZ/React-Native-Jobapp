import {useState, useEffect} from 'react'
import axios from 'axios'
// import {RAPID_API_KEY} from '@env'

const rapidAPIKEY = 'd3fe4736e6mshf9b81a76dc46b58p17cdecjsn801dc1dd4157'
function useFetch(endpoint, query) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': rapidAPIKEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setLoading(true)
        fetchData()
    }

  return {data, isLoading, error, refetch}
}

export default useFetch