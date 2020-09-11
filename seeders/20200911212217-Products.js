'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkCreate('Products', [{
      title: "YETI Rambler Tumbler",
      description: "The 30 fl. oz. YETI Rambler Tumbler still keeps drinks hot or cold as science allows, and this one comes with a splashproof and spill-resistant YETI MagSlider lid.",
      price: 34.99,
      quantity: 50,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6_9hymrLP7jcHvSNhaRDbs6NkoWSpCgQXAQ&usqp=CAU"
    },
    {
      title: "Cannondale Topstone Carbon 105 Bike",
      description: "Capable off-road and comfortable on-road, the Cannondale Topstone Carbon 105 is a unique gravel bike with true suspension—but no heavy shock—offering 30mm of rear travel to smooth out bumps.",
      price: 2336.93,
      quantity: 20,
      image: "https://images.immediate.co.uk/production/volatile/sites/21/2019/06/Cannondale-Topstone-Carbon-02-f0de868.jpg?quality=90&resize=960%2C640"
    },
    {
      title: "Perception Pescador Pro 10.0 Sit-On-Top Kayak",
      description: "Perception Pescador Pro 10.0 is a real fishing kayak for real fishing enthusiasts.",
      price: 759.99,
      quantity: 25,
      image: "https://www.rei.com/media/product/101134"
    },  
    {
      title: "Blacktec Skin Overall Wetsuit - Men's",
      description: "Full body Wetsuit, seam-glued, bliend stitched.  Made of flexible neoprene",
      price: 225.89,
      quantity: 10,
      image: "https://www.rei.com/media/c800abdd-da9a-48f8-aff1-57e09b678e49"
    },
    {
      title: "Suunto 5 GPS Watch",
      description: "Small but mighty, the Suunto 5 GPS watch delivers serious battery life in a compact package. Whether you swim, hike or like to switch it up daily, it seamlessly tracks more than 80 activities.",
      price: 269.95,
      quantity: 7,
      image: "https://www.rei.com/media/250b4ab8-9f4a-49f4-845f-72937788bb7f?size=646x485"
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', [{

    }])
  }
};
