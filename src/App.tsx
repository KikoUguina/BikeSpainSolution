import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BikeNetworkList } from './features/BikeNetworkList';
import { StationList } from './features/StationList';

const queryClient = new QueryClient();

function App() {
    const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);

    return (
        <QueryClientProvider client={queryClient}>
            <div style={{ padding: '2rem' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Redes de Bicicletas</h1>

                <BikeNetworkList onSelect={(id) => {
                    console.log('Red seleccionada en App:', id);
                    setSelectedNetwork(id);
                }} />

                {selectedNetwork && (
                    <>
                        <h2 style={{ fontSize: '20px', marginTop: '2rem' }}>Estaciones</h2>
                        <StationList networkId={selectedNetwork} />
                    </>
                )}
            </div>
        </QueryClientProvider>
    );
}

export default App;