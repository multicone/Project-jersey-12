module.exports = {
  post: {
    tags: ["Sign in API"],
    description: "Sign in user",
    operationId: "signinUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Signin successful",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "test@mail.com",
                },
                token: {
                  type: "string",
                },
                verified: {
                  type: "boolean",
                  example: true,
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
