const axios = require("axios");
const { GET_RESPONSE_TOKEN } = process.env;
const lists = [
  {
    name: `novatec_industial_web_products_req`,
    token: `KqbZ5`,
    id: `166811701`
  }
];
// const formatData = ({ name, email, campaignId, phone, company }) =>
//   {
//     name,
//     email,
//     "campaign": {
//       campaignId: campaignId
//     },
//     customFieldValues: [
//       {
//         customFieldId: "Vjnecm",
//         value: [phone]
//       },
//       {
//         customFieldId: "VjnJhw",
//         value: [company]
//       },
//       {
//         customFieldId: "VP4wqx",
//         value: ["Website"]
//       }
//     ]
//   };

exports.handler = async (event, context, callback) => {
  const { nombre, email, tel, empresa } = JSON.parse(event.body);
  const data = {
    name: nombre,
    email,
    campaign: {
      campaignId: lists[0].token,
    },
    phone: tel,
    company: empresa
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": `api-key ${GET_RESPONSE_TOKEN}`
    }
  };

  try {
    const response = await axios.post("https://api.getresponse.com/v3/contacts", data, options);
    console.log("SUCCESS!!!!!")
    return { statusCode: 200, body: response.statusText };
  } catch (error) {
    console.log("FAIL!!!!!");
    console.error(error);
    return JSON.stringify({ error: error });
  }
};
