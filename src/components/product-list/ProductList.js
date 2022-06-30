import "./ProductList.css";

const products = [
  {
    id: 1,
    name: 'iPhone 12',
    href: '#',
    imageSrc: './images/iphone-12-white-select-2020.png',
    imageAlt: "White iPhone 12",
    price: '$3500',
    color: 'White',
  },
  {
    id: 2,
    name: 'iPhone 11',
    href: '#',
    imageSrc: './images/iphone11-black-select-2019.png',
    imageAlt: "Black iPhone 11",
    price: '$3000',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Airpods Max',
    href: '#',
    imageSrc: './images/apple-airpods-max.png',
    imageAlt: "Airpods Max",
    price: '$1800',
    color: 'White',
  },
]

const ProductList = ()  => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Product List</h2>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-3/12 min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-3/12 h-1/2 object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
