import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BikeNetworkList } from './components/BikeNetworkList';
import { StationList } from './components/StationList';

const queryClient = new QueryClient();

function App() {
    const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const currentLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(currentLang);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div style={{ padding: '2rem' }}>
                <div className="flex justify-between items-center mb-4">
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        {t('bikeNetworksTitle')}
                    </h1>
                    <button
                        onClick={toggleLanguage}
                        className="p-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    >
                        {i18n.language === 'es' ? 'Cambiar a Inglés' : 'Change to Spanish'}
                    </button>
                </div>

                <BikeNetworkList onSelect={(id) => {
                    console.log('Red seleccionada en App:', id);
                    setSelectedNetwork(id);
                }} />

                {selectedNetwork && (
                    <>
                        <h2 style={{ fontSize: '20px', marginTop: '2rem' }}>
                            {t('stationsTitle')}
                        </h2>
                        <StationList networkId={selectedNetwork} />
                    </>
                )}
            </div>
        </QueryClientProvider>
    );
}

export default App;