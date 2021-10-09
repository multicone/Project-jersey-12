module.exports = {
  post: {
    tags: ["Create / Sign up a new User"],
    description: "This API is for sign up as a new user",
    operationId: "signupUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserRegister",
          },
        },
      },
    },
    responses: {
      201: {
        description: "User Signup successful",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "test@mail.com",
                },
                name: {
                  type: "string",
                },
                token: {
                  type: "string",
                },
                verified: {
                  type: "boolean",
                  example: false,
                },
                role: {
                  type: "string",
                  example: "user",
                },
              },
            },
          },
        },
      },
      400: {
        description: "Validation Error",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ValidationError",
            },
          },
        },
      },
      500: {
        description: "Server / Database error",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ServerError",
            },
          },
        },
      },
    },
  },
};
