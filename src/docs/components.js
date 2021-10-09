module.exports = {
  components: {
    securitySchemes: {
      jwt: {
        type: "http",
        scheme: "bearer",
        in: "header",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User email",
            example: "user@mail.com",
          },
          password: {
            type: "string",
            description: "User password",
            example: "ndsfGjJdf4325sg",
          },
        },
      },
      UserRegister: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Full Name",
            example: "Tarek Jaman Labu",
          },
          email: {
            type: "string",
            description: "User email",
            example: "user@mail.com",
          },
          password: {
            type: "string",
            description: "User password",
            example: "ndsfGjJdf4325sg",
          },
        },
      },
      Joursey: {
        type: "object",
        properties: {
          jourseyNumber: {
            type: "number",
            description: "Joursey Number",
            example: 69,
          },
          jourseyName: {
            type: "string",
            description: "Name on Joursey",
            example: "NAWAB",
          },
          paymentMethod: {
            type: "string",
            description: "Payment Method",
            example: "bKash",
          },
          txId: {
            type: "string",
            description: "Transaction ID",
            example: "ABC2343455443",
          },
          size: {
            type: "string",
            description: "Joursey Size",
            example: "M",
          },
          sleveSize: {
            type: "string",
            description: "Sleve Size",
            example: "half",
          },
        },
      },
      VerifyUser: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User email",
            example: "user@mail.com",
          },
          code: {
            type: "number",
            description: "verification code",
            example: "4512",
          },
        },
      },
      ForgotPassword: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User email",
            example: "user@mail.com",
          },
        },
      },
      ResetPassword: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User email",
            example: "user@mail.com",
          },
          code: {
            type: "number",
            description: "verification code",
            example: "4512",
          },
        },
      },
      NewPassword: {
        type: "object",
        properties: {
          token: {
            type: "string",
            description: "reset token",
            example: "655d611e6bd4a1e2136120c120970c02c0a672e7",
          },
          password: {
            type: "string",
            description: "User password",
            example: "ndsfGjJdf4325sg",
          },
        },
      },
      ValidationError: {
        type: "object",
        properties: {
          errors: {
            type: "array",
            items: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "error message",
                  example: "Email is required",
                },
                field: {
                  type: "string",
                  example: "email",
                  required: false,
                },
              },
            },
          },
        },
      },
      ServerError: {
        type: "object",
        properties: {
          errors: {
            type: "array",
            items: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "error message",
                  example: "Server Error",
                },
              },
            },
          },
        },
      },
      AuthorizationError: {
        type: "object",
        properties: {
          errors: {
            type: "array",
            items: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "error message",
                  example: "You are unauthorized",
                },
              },
            },
          },
        },
      },
    },
    security: [
      {
        jwt: [],
      },
    ],
  },
};
