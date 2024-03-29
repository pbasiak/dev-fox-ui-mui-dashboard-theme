const themePrefix = '/theme';
const userPrefix = '/user';
const blogPrefix = '/blog';
const componentPrefix = `${themePrefix}/component`;
const orderPrefix = '/order';
const jobsPrefix = '/jobs';

export const routes = {
  dashboard: '/',
  userAccount: `${userPrefix}/account`,
  userProfile: `${userPrefix}/profile`,
  userList: `${userPrefix}/list`,
  userCreate: `${userPrefix}/create`,
  userEdit: `${userPrefix}/edit`,
  blog: `${blogPrefix}/list`,
  blogCreatePost: `${blogPrefix}/create`,
  blogPost: `${blogPrefix}/post`,
  themeGeneral: `${themePrefix}/general`,
  themeTypography: `${themePrefix}/typography`,
  themeColors: `${themePrefix}/colors`,
  componentsButton: `${componentPrefix}/button`,
  calendar: `/calendar`,
  notFound: '/404',
  maintenance: '/maintenance',
  todoList: '/todo-list',
  ordersList: `${orderPrefix}/list`,
  jobsList: `${jobsPrefix}/list`,
  jobsDetails: `${jobsPrefix}/details`,
  jobsCreate: `${jobsPrefix}/create`,
  login: '/login',
  register: '/register',
  resetPassword: '/reset-password',
  verifyCode: '/verify-code',
}