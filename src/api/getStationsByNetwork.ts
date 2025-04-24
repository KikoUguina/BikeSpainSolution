import axios from 'axios';

export const getStationsByNetwork = async (networkId: string) => {
    const response = await axios.get(`https://api.citybik.es/v2/networks/${networkId}`);
    return response.data.network.stations;
};