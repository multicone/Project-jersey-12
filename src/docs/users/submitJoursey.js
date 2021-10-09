module.exports = {
  post: {
    tags: ["Submit Joursey Info"],
    description: "This API is for Joursey Info Submission",
    operationId: "submitJoursey",
    parameters: [],
    security: [
      {
        jwt: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Joursey",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Successfully submitted",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Joursey Info Added Successfully",
                },
              },
            },
          },
        },
      },
      400: {
        description: "Already taken by someone",
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
                        description: "Already taken by someone",
                        example: "1 Already taken by someone",
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
