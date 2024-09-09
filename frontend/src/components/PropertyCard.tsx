type PropertyCardProps = {
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

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  type,
  rooms,
  bathrooms,
  area,
  price,
  imageUrl,
  views,
}) => {
  return (
    <article className="flex flex-col grow">
      <div className="flex relative flex-col items-end px-20 pt-6 pb-48 w-full rounded-lg aspect-[1.5] max-md:px-5 max-md:pb-24">
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b607f1d1d6cab4a7c4121a787c44514a1112f202aa189f0079de3298809f2d?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55"
          alt=""
          className="object-contain mb-0 w-6 aspect-square max-md:mb-2.5"
        />
      </div>
      <div className="flex flex-col px-6 py-5 w-full bg-gray-100 rounded-none text-neutral-700 max-md:px-5">
        <h2 className="text-base leading-6 overflow-hidden">
          <span className="font-bold text-neutral-700 truncate block">
            {title}
          </span>
        </h2>
        <div className="flex flex-col mt-6 min-h-[88px]">
          <div className="flex flex-col w-full text-xs">
            <div>
              ID: {id} | {type} | {location}
            </div>
            <div className="mt-1.5">
              {rooms} Zimmer | {bathrooms} Bad | {area} m² | Kaufen
            </div>
          </div>
          <div className="mt-3 text-2xl font-medium leading-snug">
            {price.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
        </div>
        <div className="flex z-10 gap-1.5 items-center self-end -mt-6 text-base text-right whitespace-nowrap rounded min-h-[24px] text-slate-500">
          <div className="self-stretch my-auto">{views}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9bfd8fdcd51327f77bf2e0b094221a2d40e056f9f9f507c3ed88f7c5cbbe34b?placeholderIfAbsent=true&apiKey=56c0f2b286ae4dc7814105de2da1dd55"
            alt="Views"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
