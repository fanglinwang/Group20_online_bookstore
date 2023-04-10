const dotenv = require("dotenv");
dotenv.config();
const Airtable = require("airtable-node");
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table("products");
// const airtable = new Airtable(
//   { apiKey: "keysSzao0hLF3P4YK" }.base("apphpkSYnhXJ6tEdA").table("UWbook")
// );
// console.log(process.env.AIRTABLE_TABLE);
exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        featured,
        price,
        conditions,
        company,
        description,
        category,
        images,
        // stocks,
        star,
        reviews,
      } = fields;
      const { url } = images[0];
      return {
        id,
        price,
        featured,
        image: url,
        name,
        featured,
        price,
        conditions,
        company,
        description,
        category,
        images,
        star,
        reviews,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "There is an error",
    };
  }
};
