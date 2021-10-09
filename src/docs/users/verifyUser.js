module.exports = {
  post: {
    tags: ['Verify User'],
    description: 'This API is for verify user',
    operationId: 'verifyUser',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/VerifyUser',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Verification successful',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  example: 'test@mail.com',
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Validation Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                errors: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        description: 'error message',
                        example: 'uri is required',
                      },
                      field: {
                        type: 'string',
                        example: 'uri',
                        required: false,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Invalid URI',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                errors: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        description: 'Invalid URI message',
                        example: 'Invalid URI',
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
        description: 'Server / Database error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ServerError',
            },
          },
        },
      },
    },
  },
};
