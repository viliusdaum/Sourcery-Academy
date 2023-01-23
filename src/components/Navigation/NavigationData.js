import { PAGE, SUB_PAGE } from '~/locale.js';
import { PAGE_ROUTES, SUB_PAGE_ROUTES } from '~/routes.js';

export const navigationConfig = [
  { id: 1, to: PAGE_ROUTES.ABOUT_US, title: PAGE.ABOUT_US },
  {
    id: 2,
    title: PAGE.ACADEMIES,
    subItems: [
      { id: 1, to: SUB_PAGE_ROUTES.DEVELOPER, title: SUB_PAGE.DEVELOPER },
      { id: 2, to: SUB_PAGE_ROUTES.TESTER, title: SUB_PAGE.TESTER },
      { id: 3, to: SUB_PAGE_ROUTES.FRONT_END, title: SUB_PAGE.FRONT_END },
      { id: 4, to: SUB_PAGE_ROUTES.KIDS, title: SUB_PAGE.KIDS },
    ],
  },
  { id: 3, to: PAGE_ROUTES.MEDIA, title: PAGE.MEDIA },
  { id: 4, to: PAGE_ROUTES.REGISTER, title: PAGE.REGISTER },
  { id: 5, to: PAGE_ROUTES.QUESTIONS, title: PAGE.QUESTIONS },
];
