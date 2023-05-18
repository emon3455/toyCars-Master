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

import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="p-2">

            <h2 className='text-center text-4xl font-extrabold text-violet-600'>Shop By Catagory</h2>
            
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Luxirious Vehicles</Tab>
                    <Tab>Sports Cars</Tab>
                    <Tab>Remote Control Cars</Tab>
                </TabList>
                <TabPanel>
                    1
                </TabPanel>
                <TabPanel>
                    2
                </TabPanel>
                <TabPanel>
                    3
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;