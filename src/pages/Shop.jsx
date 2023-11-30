import { useState } from 'react';
import orderBanner from '../assets/shop/banner2.jpg'
import Cover from '../components/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import ShopTab from '../components/ShopTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Shop = () => {

    const categories = ['offered', 'salad', 'pizza', 'soup', 'dessert'];
    const { category } = useParams();
    // console.log(category)
    const initialIndex = categories.indexOf(category);
    const [menu] = useMenu();
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');

  return (
    <div>
       <Helmet>
            <title>Bistro Bliss Restaurant | Shop</title>
       </Helmet>
       <Cover img={orderBanner} title="our shop" showParagraph></Cover>
          <div className='py-20 px-8 lg:py-20'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                  <TabList>
                      <Tab>Offered</Tab>
                      <Tab>Salad</Tab>
                      <Tab>Pizza</Tab>
                      <Tab>Soup</Tab>
                      <Tab>Dessert</Tab>
                  </TabList>
                  <TabPanel>
                    <ShopTab items={offered}></ShopTab>
                  </TabPanel>
                  <TabPanel>
                    <ShopTab items={salad}></ShopTab>
                  </TabPanel>
                  <TabPanel>
                    <ShopTab items={pizza}></ShopTab>
                  </TabPanel>
                  <TabPanel>
                    <ShopTab items={soup}></ShopTab>
                  </TabPanel>
                  <TabPanel>
                    <ShopTab items={dessert}></ShopTab>
                  </TabPanel>
            </Tabs>
          </div>
    </div>
  )
}

export default Shop
