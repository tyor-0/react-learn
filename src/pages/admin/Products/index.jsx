import { useGetAllProducts } from "../hooks/useGetAllProducts";

const Products = () => {
    const {loading, products} = useGetAllProducts();

    console.log(products);
    
    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Products Page</h1>
            <p className="mb-8 text-center text-gray-600">This is where you can manage all products in the system.</p>
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <span className="text-lg text-gray-500">Loading...</span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">#</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Image</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Title</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Category</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Price</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Rating</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Created By</th>
                                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.length > 0 ? (
                                products.map((product, idx) => (
                                    <tr key={product._id} className="border-b hover:bg-gray-100">
                                        <td className="py-2 px-4 text-gray-600">{idx + 1}</td>
                                        <td className="py-2 px-4">
                                            <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded border" />
                                        </td>
                                        <td className="py-2 px-4 text-gray-800 font-medium max-w-xs truncate">{product.title}</td>
                                        <td className="py-2 px-4 text-gray-600 capitalize">{product.category}</td>
                                        <td className="py-2 px-4 text-indigo-600 font-bold">${product.price}</td>
                                        <td className="py-2 px-4 text-yellow-700">
                                            {product.rating?.rate} ★ ({product.rating?.count})
                                        </td>
                                        <td className="py-2 px-4 text-gray-600">
                                            {product.user?.firstName} {product.user?.lastName}
                                        </td>
                                        <td className="py-2 px-4 text-gray-500 text-sm">{new Date(product.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="py-4 text-center text-gray-500">No products found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Products;