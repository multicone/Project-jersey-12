module.exports = {
  post: {
    tags: ['Forgot Password'],
    description: 'This API is for reset password',
    operationId: 'resetpassword',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ResetPassword',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Reset Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                  example: '655d611e6bd4a1e2136120c120970c02c0a672e7',
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Invalid User',
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
                        description: 'User not found',
                        example: 'User not found',
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
