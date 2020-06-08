
'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Brands', [
        {
          name: "Adidas",
          description: "German multinational company founded in 1949 dedicated to the manufacture of sports equipment: footwear, clothing and other fashion-related products",
          website: "https://www.adidas.com/",
          image: "/images/Adidas_logo.svg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Converse",
          description: "shoe company that designs, distributes, and licenses sneakers, skating shoes, lifestyle brand footwear, apparel, and accessories.",
          website: "https://www.converse.com/",
          image: "/images/Converse_logo.svg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "New Balance",
          description: "Is an American manufacturer of arc parts based in Boston ( United States ). ",
          website: "https://www.newbalance.com/",
          image: "/images/New_Balance_logo.svg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nike",
          description: " is a company multinational US dedicated to the design, development, manufacture and marketing of sports equipment: balls , footwear, clothing, equipment, accessories and other sporting goods.",
          website: "https://www.nike.com/",
          image: "/images/Nike_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Reebok",
          description: " is an American producer of sports shoes, clothing, and accessories, a subsidiary of the German group Adidas . ",
          website: "https://www.reebok.com/",
          image: "/images/Reebok_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Puma",
          description: " is a German manufacturer of accessories, clothing and sports shoes.",
          website: "https://us.puma.com/",
          image: "/images/Puma_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jordan",
          description: "is a brand of basketball shoes, athletic, casual, and style clothing produced by Nike",
          website: "https://www.nike.com/jordan/",
          image: "/images/Jumpman_logo.svg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Vans",
          description: "is a company primarily engaged in the production of footwear , it also manufactures clothing such as sweatshirts and T-shirts",
          website: "https://www.vans.com/",
          image: "/images/Vans_logo.svg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "ASICS",
          description: " is a Japanese multinational corporation which produces footwear and sports equipment designed for a wide range of sports. ",
          website: "https://www.asics.com/",
          image: "/images/Asics_logo.svg",
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Brands', null, {});

  }
};
