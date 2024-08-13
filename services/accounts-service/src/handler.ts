
import { getAccountModel, IAccount } from 'utility';

//import { getAccountModel, IAccount } from '../../../layers/utility';

exports.hello = async (event) => {


  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
  };

};
