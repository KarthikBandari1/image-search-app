const UNSPLASH_URL = "https://api.unsplash.com";
//const ACCESS_KEY = "roBmUf8hNdWMylpg2xDrJXZJjYmYLj6QRMWk8fXv-ao";
const ACCESS_KEY = "MMLTYROgdwdeV_IPxAWXmThrk7A0Jzog7_AYMNTjk_8";

export const fetchImages = async (query, page = 1) => {
  if (query === "") query = undefined;
  try {
    const response = await fetch(
      `${UNSPLASH_URL}/search/photos?query=${query}&page=${page}&per_page=12`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );

    const data = await response.json();
    const total = response.headers.get("X-Total");
    return { data: data.results, total };
  } catch (error) {
    console.error("Error fetching images:", error);
    return { data: [], total: 0 };
  }
};
