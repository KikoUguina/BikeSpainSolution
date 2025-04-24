import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBikeNetworks } from '../hooks/useBikeNetwork';
import { StationList } from './StationList';

export const BikeNetworkList = () => {
    const { data, isLoading, error } = useBikeNetworks();
    const [openNetworkId, setOpenNetworkId] = useState<string | null>(null);
    const { t } = useTranslation();

    if (isLoading) return <p>{t('loadingNetworks')}</p>;
    if (error) return <p>{t('errorNetworks')}</p>;

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
                                {network.company?.join(', ') || t('unknownCompany')}
                            </p>
                            <p className="text-sm text-gray-600">
                                {network.location.city}
                            </p>
                            <p className="text-sm text-gray-500">
                                {t('reservationSystem')}:{" "}
                                {network.extra?.reservation === true
                                    ? t('yes')
                                    : network.extra?.reservation === false
                                    ? t('no')
                                    : t('unknown')}
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
