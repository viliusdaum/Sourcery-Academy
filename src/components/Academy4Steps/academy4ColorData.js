import {
  ACADEMY4_COLORS_MONZA,
  ACADEMY4_COLORS_COBALT,
  ACADEMY4_COLORS_DEEP_GREEN,
} from '~/constants';

export const colorConfig = [
  {
    id: ACADEMY4_COLORS_MONZA.ID,
    colors: [
      {
        id: 1,
        primary: ACADEMY4_COLORS_MONZA.PRIMARY_COLOR,
        secondary: ACADEMY4_COLORS_MONZA.SECONDARY_COLOR,
      },
    ],
  },
  {
    id: ACADEMY4_COLORS_COBALT.ID,
    colors: [
      {
        id: 2,
        primary: ACADEMY4_COLORS_COBALT.PRIMARY_COLOR,
        secondary: ACADEMY4_COLORS_COBALT.SECONDARY_COLOR,
      },
    ],
  },
  {
    id: ACADEMY4_COLORS_DEEP_GREEN.ID,
    colors: [
      {
        id: 3,
        primary: ACADEMY4_COLORS_DEEP_GREEN.PRIMARY_COLOR,
        secondary: ACADEMY4_COLORS_DEEP_GREEN.SECONDARY_COLOR,
      },
    ],
  },
];
