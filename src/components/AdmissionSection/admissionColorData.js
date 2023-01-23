import {
  ADMISSION_COLORS_MONZA,
  ADMISSION_COLORS_COBALT,
  ADMISSION_COLORS_DEEP_GREEN,
} from '~/constants';

export const colorConfig = [
  {
    id: ADMISSION_COLORS_MONZA.ID,
    colors: [
      {
        id: 1,
        primary: ADMISSION_COLORS_MONZA.PRIMARY_COLOR,
        secondary: ADMISSION_COLORS_MONZA.SECONDARY_COLOR,
      },
    ],
  },
  {
    id: ADMISSION_COLORS_COBALT.ID,
    colors: [
      {
        id: 2,
        primary: ADMISSION_COLORS_COBALT.PRIMARY_COLOR,
        secondary: ADMISSION_COLORS_COBALT.SECONDARY_COLOR,
      },
    ],
  },
  {
    id: ADMISSION_COLORS_DEEP_GREEN.ID,
    colors: [
      {
        id: 3,
        primary: ADMISSION_COLORS_DEEP_GREEN.PRIMARY_COLOR,
        secondary: ADMISSION_COLORS_DEEP_GREEN.SECONDARY_COLOR,
      },
    ],
  },
];
