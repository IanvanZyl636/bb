import { concatUrl } from '@backbase/shared/util/app-core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { Environment } from './type';
import packageJson from '../../../../package.json';
import { BusinessNotificationPreferencesApiMode } from '@backbase/actions-business-notification-preferences-journey-ang';

export const environment: Environment = {
  /**
   * Whether to run the app in production mode.
   * Default: true
   */
  production: true,

  /**
   * Whether to enable animation capabilities
   * Default: true
   */
  animation: true,

  googleApiKey: '${MAPS_API_KEY}',
  landingPageUrl: '/',
  apiRoot: '${API_ROOT::-1}',
  baseHref: '${BASE_HREF}',
  appVersion: packageJson.version,
  calendarVersion: packageJson.backbase.appVersion,
  notificationPreferencesApiMode: String('${NOTIFICATION_PREFERENCES_API_MODE}') as
    | BusinessNotificationPreferencesApiMode
    | 'none',
};

export const authConfig: (baseUrl: string) => AuthConfig = (locale: string = '') => ({
  // Url of the Identity Provider
  issuer: '${AUTH_URL}realms/${AUTH_REALM}',

  // URL of the SPA to redirect the user to after login
  redirectUri: concatUrl(window.location.origin, '${BASE_HREF}', locale, 'select-context'),

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: '${AUTH_CLIENT_ID}',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications. (IE: does not support PKCE)
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  scope: '${AUTH_SCOPE}',

  requireHttps: false,
  showDebugInformation: true,
  logoutUrl: concatUrl(window.location.origin, '${BASE_HREF}', locale, 'logout'),
  useSilentRefresh: true,
  silentRefreshTimeout: 5000,
  silentRefreshRedirectUri: concatUrl(window.location.origin, '${BASE_HREF}', locale, 'assets/silent-refresh.htm'),
});
