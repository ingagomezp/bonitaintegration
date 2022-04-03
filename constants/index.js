module.exports = {
  defaultServerResponse: {
    status: 400,
    message: '',
    ok: false,
    body: JSON
  },
  requestValidationMessage: {
    BAD_REQUEST: 'Invalid fields',
    TOKEN_MISSING: 'Token missing from header',
    HEADER_ORIGIN_MISSING: 'Origin missing from header',
    HEADER_AUTHORIZATION_MISSING: 'Authorization missing from header',
    PERMISSION_MISSING: 'Permission missing is  Invalid',
    PERMISSION_INSUFFICIENT: 'Insufficient Permissions'
  },
};
