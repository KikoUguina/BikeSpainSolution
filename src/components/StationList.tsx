import { useStations } from '../hooks/useStations';
import { useTranslation } from 'react-i18next';

type Props = {
    networkId: string;
};

export const StationList = ({ networkId }: Props) => {
    const { data, isLoading, error } = useStations(networkId);
    const { t } = useTranslation();

    if (isLoading) return <p>{t('loadingStations')}</p>;
    if (error) return <p>{t('errorStations')}</p>;

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.map((station: any) => {
                const { id, name, latitude, longitude, free_bikes, empty_slots, timestamp } = station;

                const total = free_bikes + empty_slots;
                const percentage = total === 0 ? 0 : (free_bikes / total) * 100;

                let availabilityKey = 'low';
                if (percentage > 66) availabilityKey = 'high';
                else if (percentage > 33) availabilityKey = 'medium';

                return (
                    <div
                        key={id}
                        className="rounded-xl bg-white shadow p-4 h-44 flex flex-col justify-center text-left transition-all duration-700 hover:-translate-y-2"
                        style={{
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            maxWidth: '370px'
                        }}
                    >
                        <h3 className="text-base font-semibold mb-1">{name}</h3>
                        <p className="text-sm mb-1">
                            {t('location')}: {latitude}, {longitude}
                        </p>
                        <a
                            href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 text-sm underline mb-1"
                        >
                            {t('viewOnMap')}
                        </a>
                        <p className="text-sm text-gray-600">
                            {t('lastUpdated')}: {timestamp
                                ? timestamp.split('T')[0].replace(/-/g, '.') +
                                  ' - ' +
                                  timestamp.split('T')[1].split('.')[0]
                                : t('unavailableDate')}
                        </p>

                        <p className="text-sm flex items-center gap-2">
                            {t('availability')}:
                            <span
                                className={`inline-block w-3 h-3 rounded-full ${
                                    availabilityKey === 'high'
                                        ? 'bg-green-500'
                                        : availabilityKey === 'medium'
                                        ? 'bg-yellow-500'
                                        : 'bg-red-500'
                                }`}
                            ></span>
                            {t(availabilityKey)}
                        </p>

                        {station.extra?.payment && station.extra.payment.length > 0 && (
                            <p className="text-sm text-gray-600">
                                {t('paymentMethods')}: {station.extra.payment.join(', ')}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
};