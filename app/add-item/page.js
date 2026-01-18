'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function AddItemPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price)
        }),
      });

      if (!response.ok) throw new Error('Failed to add item');

      const newItem = await response.json();
      toast.success('Item added successfully!');
      router.push('/items');
      router.refresh();
    } catch (error) {
      toast.error('Failed to add item. Make sure the Express server is running.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Add New Item</h1>
        <p className="text-gray-600">Fill in the details to add a new item to the store</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Item Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input-field"
            placeholder="Enter item name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="input-field resize-none"
            placeholder="Enter item description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price ($) *
            </label>
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              required
              className="input-field"
              placeholder="0.00"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              className="input-field"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Home">Home</option>
              <option value="Sports">Sports</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL *
          </label>
          <input
            id="image"
            name="image"
            type="url"
            required
            className="input-field"
            placeholder="https://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
          />
          <p className="text-sm text-gray-500 mt-1">
            Enter a valid image URL (e.g., from Unsplash)
          </p>
        </div>

        {formData.image && (
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
            <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        )}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Adding Item...' : 'Add Item'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/items')}
            className="btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}