import { useQuery } from '@tanstack/react-query';
import { getStationsByNetwork } from '../api/getStationsByNetwork';

export const useStations = (networkId: string) => {
    return useQuery({
        queryKey: ['stations', networkId],
        queryFn: () => getStationsByNetwork(networkId),
        enabled: !!networkId,  
        staleTime: 1000 * 60 * 5, 
        cacheTime: 1000 * 60 * 10, 
        onError: (error) => {
            console.error(`Error al cargar las estaciones de la red ${networkId}:`, error);
        },
    });
};
