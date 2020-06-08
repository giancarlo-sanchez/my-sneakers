'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('SneakerTypes', [
        {
                    sneakerType: "Athletic Kicks",
                    description: "Sneaker shoelaces rarely look as good as when they are adorning your athletic kicks. These sport-centric sneakers are Nike and Adidas regulars and are the perfect blend of functionality and style. Any activity faster than walking, and you’ll want to slip on a pair of these.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "Plimsoll Sneakers",
                    description: "These types of sneakers are super famous, and happen to be the most common of the bunch. Also called Low Top Sneakers, they stop just below the ankle and are best worn with secret socks and skinny jeans, or jeans rolled to reveal your naked ankle. Don’t wear high socks with these!",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "High Top BasketBall Sneakers",
                    description: "Your high top sneakers have two excellent advantages – the first is that you can wear long socks and no-one will see them, the second is that they always look cool. These match especially well with the tight fitting jeans of today, even though they became famous on the basketball court.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "Authentic Sneakers",
                    description: "Technically these sneakers are Vans, but they are an institution so they get on the list. We make the rules. These types of sneakers can be worn with anything, casual or formal, which makes them revolutionary. Clean, understated design means you’ll always look your best in these Authentics.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "Slip-On Sneakers",
                    description: "Ah, the classic slip-on sneaker that has absolutely no shoelaces at all. These smooth top sneakers are making a comeback in metallic and interesting patterns, and are great for easy-wear. In fact, they ooze casual, so like plimsoll sneakers, don’t wear them with high socks. That’s not cool.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "Leather Sneakers",
                    description: "Leather sneakers are a hot trend right now, and with these types of sneakers you are investing in the long haul because they never lose their appeal.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "Canvas Sneakers",
                    description: "Comfortable and conventional describes the canvas sneaker, a material based low ankle sneaker that was made famous through brands like Converse All Stars.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "Textile Blend Sneakers",
                    description: "These are great for athletics and general wear.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {
                    sneakerType: "Synthetic Sneakers",
                    description: "These are hands down the worst sneakers ever made, and they are everywhere.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        }, {

                    sneakerType: "Designer Sneakers",
                    description: "Superior line of sneakers that can be worn with formal wear.",
                    createdAt: new Date(),
                    updatedAt: new Date()
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('SneakerTypes', null, {});

  }
};
