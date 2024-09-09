import PropertyCard from "./PropertyCard";

type Property = {
  id: string;
  title: string;
  location: string;
  type: string;
  rooms: number;
  bathrooms: number;
  area: number;
  price: number;
  imageUrl: string;
  views: number;
};

type PropertyGridProps = {
  properties: Property[];
};

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  return (
    <section className="mt-8 w-full max-w-[1160px] mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;
