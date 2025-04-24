import { useQuery } from '@tanstack/react-query';
import { getBikeNetworks } from '../api/getBikeNetwork';

export const useBikeNetworks = () => {
    return useQuery({
        queryKey: ['bike-networks'],
        queryFn: getBikeNetworks
    });
};