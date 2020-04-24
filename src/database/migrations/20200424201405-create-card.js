'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('cards', {
     id:{

     },
     name:{

     },
     type:{

     },
     str:{

     },
     dex:{

     },
     int:{

     }

   })
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
