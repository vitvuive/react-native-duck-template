export enum EHttpResponseCode {
  ENTITY_TOO_LARGE = 413,
}

export enum ECommonResponseCode {
  PARAMS_INVALID = '1',
  REQUEST_FAIL = '2', // example error code
  INVALID_LOGIN_CREDENTIAL = '101', // Wrong password
  PASSWORD_SUSPENDED = '104', // Block account with password
  DEVICE_NOT_VERIFIED = '110',
  RESET_PASS_REQUIRE = '111',
  INVALID_RESET_PASS = '112',
  OTP_JUST_REQUEST = '151',
  OTP_EXPIRED = '153',
  WRONG_OTP = '154',
  OK = '200',
  UNAUTHORIZED = '401',
  // network response
}

export const mapResponseCodeToMessage = (
  code: ECommonResponseCode,
  fallback?: string,
): string => {
  // TODO: handle translate message
  switch (code) {
    case ECommonResponseCode.PARAMS_INVALID:
      return 'Parameter validation failed';
    case ECommonResponseCode.REQUEST_FAIL:
      return 'Request failed';
    case ECommonResponseCode.WRONG_OTP:
      return 'Incorrect Verification code. Please enter again or Resend a new code now';
    case ECommonResponseCode.OTP_JUST_REQUEST:
      return 'Request OTP not allowed as an OTP just requested recently';
    case ECommonResponseCode.OTP_EXPIRED:
      return 'OTP expired';
    case ECommonResponseCode.PASSWORD_SUSPENDED:
      return 'Your account is blocked';
    case ECommonResponseCode.INVALID_LOGIN_CREDENTIAL:
      return 'Incorrect password';
    case ECommonResponseCode.DEVICE_NOT_VERIFIED:
      return 'Device not verified';
    case ECommonResponseCode.INVALID_RESET_PASS:
      return 'Invalid reset password';
    case ECommonResponseCode.RESET_PASS_REQUIRE:
      return 'Reset password required';
    default:
      return fallback ?? 'Unknown error';
  }
};
