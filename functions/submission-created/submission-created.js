const axios = require("axios");
const { GET_RESPONSE_TOKEN } = process.env;
const lists = {
  novatec_industial_web_products_req: "KqbZ5",
  novatec_industrial_boletin: "KqbQF"
};

exports.handler = async (event, context, callback) => {
  const { nombre, email, empresa, form } = JSON.parse(event.body).payload.data;
  console.log({ data: JSON.parse(event.body).payload });
  console.log({ campaign: lists[form] });
  const data = {
    name: nombre,
    email,
    campaign: {
      campaignId: lists[form]
    },
    customFieldValues: [
      {
        customFieldId: "VP4wqx",
        value: ["Website"]
      }
    ]
  };

  // TODO: Validate phone number field before using it here
  // if (tel) {
  //   data.customFieldValues.push({
  //     customFieldId: "Vjnecm",
  //     value: [tel]
  //   });
  // }

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
