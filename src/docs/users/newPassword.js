module.exports = {
  post: {
    tags: ['Forgot Password'],
    description: 'This API is for reset password',
    operationId: 'newPassword',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/NewPassword',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Password updated',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Password Updated successfully',
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
