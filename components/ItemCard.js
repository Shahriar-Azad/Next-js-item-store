import Link from 'next/link';
import Image from 'next/image';

export default function ItemCard({ item }) {
  return (
    <Link href={`/items/${item.id}`}>
      <div className="card group cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {item.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {item.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">
              ${item.price}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {item.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
