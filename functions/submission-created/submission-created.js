/* eslint-disable */
// require('dotenv').config()

const https = require("https");
const { GET_RESPONSE_TOKEN } = process.env;
const lists = [
  {
    name: `novatec_industial_web_products_req`,
    token: `KqbZ5`,
    id: `166811701`
  }
];
const formatData = ({ name, email, campaignId, phone, company }) =>
  JSON.stringify({
    name,
    email,
    campaign: {
      campaignId
    },
    customFieldValues: [
      {
        customFieldId: "Vjnecm",
        value: [phone]
      },
      {
        customFieldId: "VjnJhw",
        value: [company]
      },
      {
        customFieldId: "VP4wqx",
        value: ["Website"]
      }
    ]
  });

exports.handler = async (event, context, callback) => {
  const { nombre, email, tel, empresa } = JSON.parse(event.body);
  const data = formatData({
    name: nombre,
    email,
    campaignId: lists[0].token,
    phone: tel,
    company: empresa
  });

  const options = {
    hostname: "api.getresponse.com",
    path: "/v3/contacts",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": `api-key ${GET_RESPONSE_TOKEN}`
    }
  };

  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", d => {
      process.stdout.write(d);
    });
  });

  req.on("error", error => {
    console.error(error);
  });

  req.write(data);
  req.end();
};
