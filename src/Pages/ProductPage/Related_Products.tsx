import React from 'react'
import { products, relatedproducts } from '../../Components/Data';
import ProductPageCard from './ProductPageCard';

interface ProductImage {
    img: string;
    color: string;
}

interface ProductData {
    id: string;
    name: string;
    price: string;
    intrest: string;
    images: {
        [key: string]: ProductImage[];
    };
}

const Related_Products: React.FC = () => {

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {relatedproducts.map((prod: ProductData, index: number) => (
                <ProductPageCard data={prod} key={prod.id || index} />
            ))}
        </section>
    )
}

export default Related_Products