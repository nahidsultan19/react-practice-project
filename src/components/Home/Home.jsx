import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const products = useLoaderData();
    console.log(products)
    return (
        <div className='min-h-screen mx-6'> 
            <h2>Welcome to react world!</h2>
            {
                products.map((product)=><p>{product.name} | {product.brand} | {product.price}</p>)
            }
        </div>
    );
};

export default Home;