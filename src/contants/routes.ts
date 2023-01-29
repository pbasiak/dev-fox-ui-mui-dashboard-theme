const themePrefix = '/theme';
const userPrefix = '/user';

export const routes = {
  dashboard: '/',
  userAccount: `${userPrefix}/account`,
  userProfile: `${userPrefix}/profile`,
  userList: `${userPrefix}/list`,
  userCreate: `${userPrefix}/create`,
  userEdit: `${userPrefix}/edit`,
  themeGeneral: `${themePrefix}/general`,
  themeTypography: `${themePrefix}/typography`,
  themeColors: `${themePrefix}/colors`,
}