import { useLoaderData } from 'react-router-dom';
import About from '../../pages/About';
import Services from '../../pages/Services';

const Home = () => {

    const products = useLoaderData();
    console.log(products)
    return (
        <div className='min-h-screen mx-6'> 
            <h2>Welcome to react world!</h2>
            {
                products.map((product)=><p>{product.name} | {product.brand} | {product.price}</p>)
            }

            <About/>
            <Services/>
        </div>
    );
};

export default Home;