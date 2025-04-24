import { useQuery } from '@tanstack/react-query';
import { getStationsByNetwork } from '../api/getStationsByNetwork';

export const useStations = (networkId: string) => {
    return useQuery({
        queryKey: ['stations', networkId],
        queryFn: () => getStationsByNetwork(networkId),
        enabled: !!networkId
    });
};
