module.exports = {
  post: {
    tags: ['Forgot Password'],
    description: 'This API is for forget password',
    operationId: 'forgotpassword',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/ForgotPassword',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Code successfully send',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'a new Verification code sent',
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
