export interface UserSummaryViewModel {
  name: string;
  emailAddress: string;
  password: string;
}

export interface MicrosoftOptions {
  accessToken: string;
  baseHref: string;
  state: string;
}

export interface CredentialsViewModel {
  emailAddress: string;
  password: string;
}

export interface UserSummary {
  id: string;
  jwtToken: string;
  name: string;
  emailAddress: string;
  roles: [];
}

export const anonymousUser = (): UserSummaryViewModel => {
  return {
    // id: '',
    // jwtToken: '',
    name: 'Anonymous',
    emailAddress: '',
    password: '',
  };
};
