import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className='min-h-screen mx-6'>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='max-w-md'>
                        <h1>WHO WE ARE -</h1>
                        <h2 className="text-xl font-bold">We Can Take Your Idea To The <span>Next Level.</span></h2>
                        <p className="text-justify">We have been helping Companies with their IT needs since 2022. We are provide fast, reliable, outsourced onsite and remote IT support services During this time, we’ve built a reputation for excellent clients satisfaction as evidenced by our returning clients year after year, while our business growth has primarily come from our referrals.</p>
                        <Link to="" className="mt-6 btn btn-primary">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;