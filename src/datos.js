export async function clima(ubicacion) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ubicacion}?key=LUBD9NN97Y74NVVS3FUUXN56S`,
        );
        const clima = await response.json();
        return clima;
    } catch (error) {
        alert(error);
    }
}
