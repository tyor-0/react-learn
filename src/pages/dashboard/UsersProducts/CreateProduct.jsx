import React from "react";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { Link } from "react-router-dom";

const CreateProduct = () => {
  const { formData, handleChange, handleSubmit, loading } = useCreateProduct();

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Create Product</h1>
          <p className="mt-2 text-gray-600">
            Add a new product to your inventory
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-sm"
        >
          <div className="space-y-6">
            {/* Image */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Product Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image || ""}
                onChange={handleChange}
                placeholder="https://example.com/product.jpg"
                className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Title & Category */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Product Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category || ""}
                  onChange={handleChange}
                  placeholder="Electronics"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="4"
                className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Price & Rating */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price || ""}
                  onChange={handleChange}
                  placeholder="99.99"
                  step="0.01"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Rating (out of 5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating || ""}
                  onChange={handleChange}
                  placeholder="4.5"
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-6">
              <Link
                to="/dashboard"
                className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-400"
              >
                {loading ? "Creating..." : "Create Product"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProduct;