module.exports = {
  get: {
    tags: ["Current Logged in user"],
    description: "current logged in user",
    operationId: "currentUser",
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
        description: "User details",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                user: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      example: "6136f3704fede3b8d73847a9",
                    },
                    email: {
                      type: "string",
                      example: "user@mail.com",
                    },
                    verified: {
                      type: "boolean",
                      example: true,
                    },
                    role: {
                      type: "string",
                      example: "user",
                    },
                    iat: {
                      type: "int",
                      example: 1630991616,
                    },
                  },
                },
              },
            },
          },
        },
      },
      401: {
        description: "Unauthorized",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AuthorizationError",
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
