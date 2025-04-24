import { useQuery } from '@tanstack/react-query';
import { getBikeNetworks } from '../api/getBikeNetwork';

export const useBikeNetworks = () => {
    return useQuery({
        queryKey: ['bike-networks'],
        queryFn: getBikeNetworks,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
        onError: (error) => {
            console.error('Error al cargar las redes de bicicletas:', error);
        },
        select: (data) => data.filter((network: any) => network.location.country === 'ES')
    });
};