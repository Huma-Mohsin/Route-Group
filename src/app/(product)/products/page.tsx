/** 
 * Route group allows us to manage different routes of the same entity 
 * under a single name. It helps to structure code and keep routes 
 * in a manageable way. Route groups are used by using parentheses `()`.
 */

const ProductItems = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-3xl font-bold text-blue-600">
                This is a Product's Items Page
            </h1>
        </div>
    );
}

export default ProductItems;
