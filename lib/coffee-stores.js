import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (latLong, limit, query) => {
  return `https://api.foursquare.com/v2/venues/search?ll=${latLong}&query=${query}&client_id=${process.env.FOURSQUARE_CLIENT_ID}&client_secret=${process.env.FOURSQUARE_CLIENT_SECRET}&v=20210525&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async (coffeeStore) => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 10,
  });
  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeeStorePhotos();

  const response = await fetch(
    getUrlForCoffeeStores(
      `41.705922751666556, 44.78714478305549`,
      6,
      "coffee shop"
    )
  );
  const data = await response.json();
  return data.response.venues.map((venue, index) => {
    return {
      // ...venue,
      id: venue.id,
      address: venue.location.address || "",
      name: venue.name,
      neighbourhood:
        venue.location.neighborhood || venue.location.crossStreet || "",
      imgUrl: photos[index],
    };
  });
};
