import swaggerAutogen from 'swagger-autogen';

const preFixPath = './src/routes';
const outputFile = './swagger_output.json';
const endpointsFiles = [
  `${preFixPath}/login.routes.ts`,
  `${preFixPath}/Orders.routes.ts`,
  `${preFixPath}/Products.routes.ts`,
  `${preFixPath}/User.routes.ts`,
];

swaggerAutogen()(outputFile, endpointsFiles);