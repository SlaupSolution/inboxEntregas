import React, { useState } from 'react';
import { Package, MapPin, Clock } from 'lucide-react';

// Mock data for available deliveries
const mockDeliveries = [
  {
    id: 1,
    pickupAddress: 'Rua Augusta, 1500',
    deliveryAddress: 'Av. Paulista, 1000',
    region: 'centro',
    packageSize: 'medium',
    weight: '2.5',
    urgency: 'normal',
    price: 35.90,
    description: 'Pacote com documentos importantes',
    createdAt: '2024-03-15T10:30:00'
  },
  {
    id: 2,
    pickupAddress: 'Rua Oscar Freire, 678',
    deliveryAddress: 'Rua Teodoro Sampaio, 1020',
    region: 'zona_oeste',
    packageSize: 'small',
    weight: '1.0',
    urgency: 'urgent',
    price: 45.90,
    description: 'Presente embalado com cuidado',
    createdAt: '2024-03-15T11:15:00'
  },
  // Add more mock deliveries as needed
];

function AvailableDeliveries() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');

  const filteredDeliveries = mockDeliveries.filter(delivery => {
    const matchRegion = selectedRegion === 'all' || delivery.region === selectedRegion;
    const matchUrgency = selectedUrgency === 'all' || delivery.urgency === selectedUrgency;
    return matchRegion && matchUrgency;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent':
        return 'text-red-600 bg-red-100';
      case 'express':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Entregas Disponíveis</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por Região
              </label>
              <select
                value={ <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-48 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">Todas as Regiões</option>
                <option value="centro">Centro</option>
                <option value="zona_sul">Zona Sul</option>
                <option value="zona_norte">Zona Norte</option>
                <option value="zona_leste">Zona Leste</option>
                <option value="zona_oeste">Zona Oeste</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por Urgência
              </label>
              <select
                value={selectedUrgency}
                onChange={(e) => setSelectedUrgency(e.target.value)}
                className="w-48 p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">Todas</option>
                <option value="normal">Normal</option>
                <option value="urgent">Urgente</option>
                <option value="express">Express</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeliveries.map((delivery) => (
            <div key={delivery.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Package className="w-6 h-6 text-orange-500 mr-2" />
                  <span className="font-semibold">Entrega #{delivery.id}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(delivery.urgency)}`}>
                  {delivery.urgency === 'normal' ? 'Normal' : 
                   delivery.urgency === 'urgent' ? 'Urgente' : 'Express'}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Coleta:</p>
                    <p className="text-gray-900">{delivery.pickupAddress}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Entrega:</p>
                    <p className="text-gray-900">{delivery.deliveryAddress}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-600">Tamanho:</p>
                    <p className="text-gray-900">{delivery.packageSize}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-600">Peso:</p>
                    <p className="text-gray-900">{delivery.weight} kg</p>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-600 mb-1">Descrição:</p>
                  <p className="text-gray-900">{delivery.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatDate(delivery.createdAt)}
                  </div>
                  <div className="text-lg font-semibold text-orange-500">
                    R$ {delivery.price.toFixed(2)}
                  </div>
                </div>

                <button className="w-full mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  Aceitar Entrega
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableDeliveries;