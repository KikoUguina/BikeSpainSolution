import { useState } from 'react';
import { useBikeNetworks } from '../hooks/useBikeNetwork';
import { StationList } from './StationList';

export const BikeNetworkList = () => {
    const { data, isLoading, error } = useBikeNetworks();
    const [openNetworkId, setOpenNetworkId] = useState<string | null>(null);

    if (isLoading) return <p>Cargando redes...</p>;
    if (error) return <p>Error al cargar las redes.</p>;

    return (
        <div className="grid gap-4">
            {data?.map((network: any) => {
                const isOpen = openNetworkId === network.id;

                return (
                    <div key={network.id} className="border rounded">
                        <button
                            onClick={() =>
                                setOpenNetworkId(isOpen ? null : network.id)
                            }
                            className="w-full text-left p-4 hover:bg-gray-100"
                        >
                            <h2 className="text-lg font-bold">{network.name}</h2>
                            <p>{network.company?.join(', ') || 'Compañía desconocida'}</p>
                            <p>{network.location.city}</p>
                        </button>

                        {isOpen && (
                            <div className="p-4 pt-0">
                                <StationList networkId={network.id} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
