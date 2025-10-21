import Image from 'next/image';
import { Equipment } from '../data/equipments';

interface EquipmentGridProps {
  equipments: Equipment[];
}

export default function EquipmentGrid({ equipments }: EquipmentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {equipments.map((equipment) => (
        <div key={equipment.id} className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
          <div className="h-64 relative overflow-hidden">
            <Image
              src={equipment.image}
              alt={equipment.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
            </div>
            <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
              <span className="text-lidar-blue text-sm font-bold">{equipment.badge}</span>
            </div>
          </div>
          <div className="p-6 relative">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2 text-lidar-dark">{equipment.title}</h3>
              <p className="text-gray-600 text-sm">{equipment.description}</p>
            </div>
            <div className="space-y-3">
              {equipment.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <i className={`${feature.icon} text-lidar-blue`}></i>
                  <span className="text-sm text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={equipment.rentLink}
                className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-clock mr-2"></i>
                  Louer
                </span>
              </a>
              <a
                href={equipment.buyLink}
                className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Acheter
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}