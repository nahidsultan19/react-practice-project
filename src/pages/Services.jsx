const Services = () => {
    return (
        <div className='min-h-screen mx-6'>
            <div className="md:w-80 lg:w-full mx-auto mt-10 text-center">
                <h2 className="text-2xl text-blue-500">What We’re Offering</h2>
                <div className="h-1 border border-r-0 border-l-0 border-b-0 w-10 mx-auto border-blue-500"></div>
                <h3 className="mt-2 text-xl">Services We’re Offering to</h3>
                <p className="mt-1 text-xl border border-l-0 border-r-0 border-t-0 border-b-1 border-blue-500 text-blue-500 w-36 mx-auto">Help You Grow</p>
            </div>
            <div className="services w-full mx-auto grid grid-col-1 md:grid-cols-3 gap-4 mt-12 text-center">
                <div className="shadow p-4 hover:shadow-lg">
                    <img src="" alt="" />
                    <h2>UI/UX Designing</h2>
                    <p>We offers plan and assemble managing for you from startups to the last creation or closing creation.</p>
                    <button className="btn btn-outline mt-4 border border-blue-500">Get a quate</button>
                </div>
                <div className="shadow p-4 hover:shadow-lg">
                    <img src="" alt="" />
                    <h2>Web Development</h2>
                    <p>We offers plan and assemble managing for you from startups to the last creation or closing creation.</p>
                    <button className="btn btn-outline mt-4 border border-blue-500">Get a quate</button>
                </div>
                <div className="shadow p-4 hover:shadow-lg">
                    <img src="" alt="" />
                    <h2>Digital marketing</h2>
                    <p>We offers plan and assemble managing for you from startups to the last creation or closing creation.</p>
                    <button className="btn btn-outline mt-4 border border-blue-500">Get a quate</button>
                </div>
                
            </div>
        </div>
    );
};

export default Services;