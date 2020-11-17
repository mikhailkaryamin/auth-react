type AccessToken = {
  'x-access-token'?: string;
}

type AuthHeader = AccessToken | false;

const authHeader = (): AuthHeader => {
  const user = JSON.parse(localStorage.getItem('user') || `0`);

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } else {
    return false;
  }
};

export default authHeader;
