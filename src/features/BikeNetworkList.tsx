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
                    <div
                        key={network.id}
                        className="rounded bg-white p-4 border transition-all duration-300"
                    >
                        <button
                            onClick={() =>
                                setOpenNetworkId(isOpen ? null : network.id)
                            }
                            className="w-full text-left"
                        >
                            <h2 className="text-lg font-bold cursor-pointer">{network.name}</h2>
                            <p className="text-sm text-gray-700">
                                {network.company?.join(', ') || 'Compañía desconocida'}
                            </p>
                            <p className="text-sm text-gray-600">
                                {network.location.city}
                            </p>
                            <p className="text-sm text-gray-500">
                                Sistema de reserva:{' '}
                                {network.extra?.reservation === true
                                    ? 'Sí'
                                    : network.extra?.reservation === false
                                    ? 'No'
                                    : 'Desconocido'}
                            </p>
                        </button>

                        {isOpen && (
                            <div className="pt-4">
                                <StationList networkId={network.id} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};