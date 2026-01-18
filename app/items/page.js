import ItemCard from '@/components/ItemCard';

async function getItems() {
  try {
    const res = await fetch('http://localhost:5000/api/items', {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch items');
    return res.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Items</h1>
        <p className="text-gray-600 text-lg">
          Browse our collection of premium products
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">No items found. Make sure the Express server is running on port 5000.</p>
          <p className="text-gray-500 mt-2">Run: cd express-server && npm start</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
