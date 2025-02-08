import React from 'react';
import { MapPin } from 'lucide-react';

function Locations() {
  const locations = [
    {
      id: 1,
      name: 'Centro',
      address: 'Rua Principal, 123',
      hours: '08:00 - 20:00',
      type: 'Coleta e Entrega',
    },
    {
      id: 2,
      name: 'Zona Sul',
      address: 'Av. das Flores, 456',
      hours: '09:00 - 19:00',
      type: 'Apenas Coleta',
    },
    {
      id: 3,
      name: 'Zona Norte',
      address: 'Rua dos Pinheiros, 789',
      hours: '08:00 - 18:00',
      type: 'Coleta e Entrega',
    },
    {
      id: 4,
      name: 'Shopping Central',
      address: 'Av. Central, 1000',
      hours: '10:00 - 22:00',
      type: 'Apenas Entrega',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Nossos Pontos de Coleta e Entrega</h1>
          <p className="text-gray-600">
            Encontre o ponto mais próximo de você para enviar ou receber suas encomendas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{location.name}</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Endereço:</strong> {location.address}
                </p>
                <p className="text-gray-600">
                  <strong>Horário:</strong> {location.hours}
                </p>
                <p className="text-gray-600">
                  <strong>Tipo:</strong>{' '}
                  <span className={location.type.includes('Coleta') ? 'text-green-600' : 'text-blue-600'}>
                    {location.type}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Locations;