//domain/.netlify/functions/hello
const items = [
  { name: "ahmed", id: 2 },
  { name: "essam", id: 3 },
  { name: "ahmed", id: 4 },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    // body: JSON.stringify(items),
    body: "test",
  };
};
