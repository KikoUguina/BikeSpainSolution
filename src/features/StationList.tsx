import { useStations } from '../hooks/useStations';

type Props = {
    networkId: string;
};

export const StationList = ({ networkId }: Props) => {
    const { data, isLoading, error } = useStations(networkId);

    if (isLoading) return <p>Cargando estaciones...</p>;
    if (error) return <p>Algo ha fallado al cargar las estaciones.</p>;

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((station: any) => {
                const { id, name, latitude, longitude, free_bikes, empty_slots, timestamp } = station;
    
                const total = free_bikes + empty_slots;
                const percentage = total === 0 ? 0 : (free_bikes / total) * 100;
    
                let availability = 'Bajo';
                if (percentage > 66) availability = 'Alto';
                else if (percentage > 33) availability = 'Medio';
    
                return (
                    <div
                        key={id}
                        className="border rounded-xl bg-white shadow p-4 h-44 flex flex-col justify-center text-left"
                    >
                        <h3 className="text-base font-semibold mb-1">{name}</h3>
                        <p className="text-sm mb-1">Ubicación: {latitude}, {longitude}</p>
                        <a
                            href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 text-sm underline mb-1"
                        >
                            Ver en Google Maps
                        </a>
                        <p className="text-sm mb-1">Última actualización: {getRelativeTime(timestamp)}</p>
                        <p className="text-sm">Disponibilidad: {availability}</p>
                    </div>
                );
            })}
        </div>
    );    
};

function getRelativeTime(dateString: string) {
    if (!dateString) return 'Fecha no disponible';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Fecha inválida';

    const now = Date.now();
    const diff = Math.floor((now - date.getTime()) / 60000);

    if (diff < 1) return 'justo ahora';
    if (diff < 60) return `hace ${diff} min`;
    if (diff < 1440) return `hace ${Math.floor(diff / 60)} h`;

    return `hace ${Math.floor(diff / 1440)} días`;
}
