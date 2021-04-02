exports.getStreetView = async (latitude, longitude) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/streetview?size=800x400&location=${latitude},${longitude}&fov=120&heading=70&pitch=0&key=${process.env.GOOGLE_KEY}`);
    const imageAsBlob = response.blob();
    return imageAsBlob;
}