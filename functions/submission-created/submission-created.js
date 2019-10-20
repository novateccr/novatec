const axios = require("axios");
const { GET_RESPONSE_TOKEN } = process.env;
const lists = [
  {
    name: `novatec_industial_web_products_req`,
    token: `KqbZ5`,
    id: `166811701`
  }
];

exports.handler = async (event, context, callback) => {
  console.log({ event: event.body.payload });
  const { nombre, email, tel, empresa } = JSON.parse(event.body);
  const data = {
    name: nombre,
    email,
    campaign: {
      campaignId: lists[0].token
    },
    customFieldValues: [
      {
        customFieldId: "VP4wqx",
        value: ["Website"]
      }
    ]
  };

  if (tel) {
    data.customFieldValues.push({
      customFieldId: "Vjnecm",
      value: [tel]
    });
  }

  if (empresa) {
    data.customFieldValues.push({
      customFieldId: "VjnJhw",
      value: [empresa]
    });
  }

  const options = {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": `api-key ${GET_RESPONSE_TOKEN}`
    }
  };

  try {
    const response = await axios.post(
      "https://api.getresponse.com/v3/contacts",
      data,
      options
    );
    console.log("SUCCESS!!!!!");
    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.statusText })
    };
  } catch (error) {
    const errorData = error.response.data;
    console.log(errorData);
    return ({
      "statusCode": errorData.httpStatus,
      body: errorData.message
    });
  }
};
