import Image from 'next/image';
import Link from 'next/link';

async function getItem(id) {
  try {
    const res = await fetch(`http://localhost:5000/api/items/${id}`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch item');
    return res.json();
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
}

export default async function ItemDetailsPage({ params }) {
  const item = await getItem(params.id);

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Item not found</h1>
          <Link href="/items" className="text-blue-600 hover:text-blue-700">
            ← Back to Items
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/items" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
        ← Back to Items
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              {item.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          
          <div className="mb-6">
            <span className="text-5xl font-bold text-blue-600">${item.price}</span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
          </div>

          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Product ID:</span>
                <span className="font-semibold">#{item.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold">{item.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Availability:</span>
                <span className="font-semibold text-green-600">In Stock</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="btn-primary flex-1">
              Add to Cart
            </button>
            <button className="btn-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold">Customer {i}</span>
              </div>
              <p className="text-gray-700">Great product! Exactly as described and arrived quickly.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
