const API_KEY = `8D9K3y5paFV3Ub5Hmgsl0fhHUijoLpGb`

const FetchGif = async (keyword) => {

    const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    const gif = await data.json()
    return gif.data
}

export default FetchGif