import SvgDev from '~/assets/svg/developer.svg';
import SvgSplineShape1 from '~/assets/svg/spline-shape1.svg';
import SvgTesters from '~/assets/svg/tester.svg';
import SvgSplineShape2 from '~/assets/svg/spline-shape2.svg';
import SvgFront from '~/assets/svg/frontend.svg';
import SvgKids from '~/assets/svg/kids.svg';
import SvgSplineShape3 from '~/assets/svg/spline-shape3.svg';
import { ACADEMIES } from '~/utils/locale';
import { SUB_PAGE_ROUTES } from '~/routes';
import { ACADEMIES_SCROLL_ID } from '~/constants';

export const academiesDataConfig = [
  {
    title: ACADEMIES.TITLE.SOURCERY_FOR_DEV,
    description: ACADEMIES.DESCRIPTION.SOURCERY_FOR_DEV,
    Svg: SvgDev,
    ShapeSvg: SvgSplineShape1,
    id: ACADEMIES_SCROLL_ID,
    route: SUB_PAGE_ROUTES.DEVELOPER,
  },
  {
    title: ACADEMIES.TITLE.SOURCERY_FOR_TESTERS,
    description: ACADEMIES.DESCRIPTION.SOURCERY_FOR_TESTERS,
    Svg: SvgTesters,
    ShapeSvg: SvgSplineShape2,
    id: 'academies-second-item',
    route: SUB_PAGE_ROUTES.TESTER,
  },
  {
    title: ACADEMIES.TITLE.SOURCERY_FOR_FRONTEND,
    description: ACADEMIES.DESCRIPTION.SOURCERY_FOR_FRONTEND,
    Svg: SvgFront,
    id: 'academies-third-item',
    route: SUB_PAGE_ROUTES.FRONT_END,
  },
  {
    title: ACADEMIES.TITLE.SOURCERY_FOR_KIDS,
    description: ACADEMIES.DESCRIPTION.SOURCERY_FOR_KIDS,
    Svg: SvgKids,
    ShapeSvg: SvgSplineShape3,
    id: 'academies-last-item',
    route: SUB_PAGE_ROUTES.KIDS,
  },
];
