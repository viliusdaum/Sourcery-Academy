import SvgApplyDev from '/src/assets/svg/applytodev.svg';
import SvgApplyFront from '/src/assets/svg/applytofront.svg';
import SvgApplyTest from '/src/assets/svg/applytotest.svg';
import SvgSplineShape4 from '/src/assets/svg/spline-shape4.svg';
import { ACCENT_COLORS } from '~/constants';

const STYLE_MAPPER = {
  [ACCENT_COLORS.DEEP_GREEN]: {
    SvgComp: SvgApplyTest,
    SvgShape: SvgSplineShape4,
  },

  [ACCENT_COLORS.MONZA]: {
    SvgComp: SvgApplyFront,
    SvgShape: SvgSplineShape4,
  },

  [ACCENT_COLORS.COBALT]: {
    SvgComp: SvgApplyDev,
    SvgShape: SvgSplineShape4,
  },
};

export default STYLE_MAPPER;
