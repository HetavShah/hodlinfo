const {DataTypes, Model } = require("sequelize");
const {sequelize} = require('../config/db-connection');
class CryptoCurrency extends Model{}

CryptoCurrency.init(
    {
      "base_unit": {
        type: DataTypes.STRING,
        allowNull: false,
      },
      "last": {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      "volume": {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      "sell": {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      "buy": {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      "name": {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          is:"[A-Z]+/[A-Z]+"
        }
      }
    },
    {
        // options
        sequelize,
        validate:{
            isEndYearGreater(){
                if(this.start_year>=this.end_year)
                throw new Error("End Year Must Be Greater then Start Year");
            }
        },

        tableName: 'crypto_currency',
        createdAt: false,
        updatedAt: false,
        underscore: false,
      }
)


module.exports={CryptoCurrency};