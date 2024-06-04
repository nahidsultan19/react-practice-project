import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const products = useLoaderData();
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