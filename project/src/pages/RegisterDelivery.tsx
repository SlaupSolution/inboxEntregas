import React, { useState } from 'react';
import { Package, MapPin, Truck } from 'lucide-react';

function RegisterDelivery() {
  const [deliveryData, setDeliveryData] = useState({
    pickupAddress: '',
    deliveryAddress: '',
    packageSize: 'medium',
    weight: '',
    description: '',
    region: 'centro',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement delivery registration logic
    console.log('Delivery data:', deliveryData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDeliveryData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Package className="w-8 h-8 text-orange-500 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Cadastrar Nova Entrega</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço de Coleta
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="pickupAddress"
                    value={deliveryData.pickupAddress}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Digite o endereço de coleta"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço de Entrega
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={deliveryData.deliveryAddress}
                    onChange={handleChange}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Digite o endereço de entrega"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tamanho do Pacote
                </label>
                <select
                  name="packageSize"
                  value={deliveryData.packageSize}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="small">Pequeno</option>
                  <option value="medium">Médio</option>
                  <option value="large">Grande</option>
                  <option value="extra_large">Extra Grande</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={deliveryData.weight}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Digite o peso em kg"
                  required
                  min="0"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Região
                </label>
                <select
                  name="region"
                  value={deliveryData.region}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="centro">Centro</option>
                  <option value="zona_sul">Zona Sul</option>
                  <option value="zona_norte">Zona Norte</option>
                  <option value="zona_leste">Zona Leste</option>
                  <option value="zona_oeste">Zona Oeste</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgência
                </label>
                <select
                  name="urgency"
                  value={deliveryData.urgency}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgente</option>
                  <option value="express">Express</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição da Entrega
              </label>
              <textarea
                name="description"
                value={deliveryData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                placeholder="Descreva os detalhes da entrega"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Cadastrar Entrega
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterDelivery;