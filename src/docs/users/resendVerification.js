module.exports = {
  post: {
    tags: ["Resend Verification"],
    description: "This API is for resend verification mail",
    operationId: "resendVerify",
    parameters: [],
    security: [
      {
        jwt: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {},
      },
    },
    responses: {
      200: {
        description: "Code successfullysend",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "a new Verification code sent",
                },
              },
            },
          },
        },
      },
      400: {
        description: "Invalid User",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                errors: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        description: "User not found",
                        example: "User not found",
                      },
                    },
                  },
                },
              },
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
