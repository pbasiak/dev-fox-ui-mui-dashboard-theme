const themePrefix = '/theme';
const userPrefix = '/user';
const componentPrefix = `${themePrefix}/component`;

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
  componentsButton: `${componentPrefix}/button`,
}