/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const ShopByCategory = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div>
//       <Tabs selectedIndex={activeTab} onSelect={handleTabChange} className="p-4">
//         <TabList className="flex space-x-4">
//           <Tab className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Category 1</Tab>
//           <Tab className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Category 2</Tab>
//           <Tab className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Category 3</Tab>
//         </TabList>

//         <TabPanel>
//           <h2>Subcategories of Category 1</h2>
//           {/* Add your subcategories content here */}
//         </TabPanel>

//         <TabPanel>
//           <h2>Subcategories of Category 2</h2>
//           {/* Add your subcategories content here */}
//         </TabPanel>

//         <TabPanel>
//           <h2>Subcategories of Category 3</h2>
//           {/* Add your subcategories content here */}
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default ShopByCategory;

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Car from './Car';

const ShopByCategory = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [toys, setToys] = useState([]);
    const [sportsCar, setSportsCar] = useState([]);
    const [luxirousCars, setLuxirousCars] = useState([]);
    const [remoteControlCars, setRemoteControlCars] = useState([]);

    useEffect(()=>{
        fetch("https://car-master-toys-server.vercel.app/toys")
        .then(res=> res.json())
        .then(data=> setToys(data))
        .catch(er=> console.log(er.message))
    },[])

    useEffect(()=>{
        const supCars = toys.filter(ty=> ty.subCategory === "Sports Cars");
        setSportsCar(supCars);
        const luxCars = toys.filter(ty=> ty.subCategory === "Luxirious Vehicles");
        setLuxirousCars(luxCars);

        const remoteCars = toys.filter(ty=> ty.subCategory === "Remote Control Cars");
        setRemoteControlCars(remoteCars);

    },[toys])



    return (
        <div className="p-2 bg-gray-100">

            <h2 className='text-center text-4xl font-extrabold text-violet-600 mt-20 mb-10'>Shop By Catagory</h2>
            
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                <TabList className={` mt-5 px-2 `}>
                    <Tab> <button className='btn btn-active btn-ghost btn-sm'>Luxirious Vehicles</button> </Tab>
                    <Tab> <button className='btn btn-warning btn-sm'>Sports Cars</button> </Tab>
                    <Tab> <button className='btn btn-success btn-sm'>Remote Control Cars</button> </Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
                        {
                            luxirousCars.map(car=> <Car key={car._id} car={car}></Car>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
                        {
                            sportsCar.map(car=> <Car key={car._id} car={car}></Car>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
                        {
                            remoteControlCars.map(car=> <Car key={car._id} car={car}></Car>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;