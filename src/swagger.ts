import swaggerJSDoc from "swagger-jsdoc"; 
import swaggerUi from "swagger-ui-express";
import mongooseToSwagger from "mongoose-to-swagger";
import { Express } from "express";
import  Role  from "./models/role.model";
import User  from "./models/user.model";


const options: swaggerJSDoc.Options = {
  definition: { 
    openapi: "3.0.0",
    info: {
      title: "Users Backend API",
      version: "1.0.0",
      description: "API documentation for Users, Roles, and Authentication"
  },
  servers:[{
    url: "http://localhost:5068/api",
    description: "Development server"
  },
  {
    url: "https://users-backend.onrender.com/api",
    description: "Production server"
  }
],

    components: {
      schemas: {
        User: mongooseToSwagger(User),
        Role: mongooseToSwagger(Role),
      },
    },
},
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
export const setupSwagger = (app: Express) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}