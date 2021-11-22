const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v2/venues/search?$ll=${latLong}&query=${query}&client_id=${process.env.FOURSQUARE_CLIENT_ID}&client_secret=${process.env.FOURSQUARE_CLIENT_SECRET}&v=20210525&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
  const response = await fetch(
    getUrlForCoffeeStores(
      `41.705922751666556, 44.78714478305549`,
      "coffee stores",
      6
    )
  );
  const data = await response.json();
  console.log(data);
  return data.response.venues;
};
