import axios from 'axios'

type Network = {
    id: string;
    name: string;
    company?: string[];
    location: {
        city: string;
        country: string;
    };
};
export const getBikeNetworks = async (): Promise<Network[]> => {
    const response = await axios.get('/api/networks');
    return response.data.networks.filter((network: any) => network.location.country === 'ES');  
};