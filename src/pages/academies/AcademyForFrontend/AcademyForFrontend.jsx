import React from 'react';
import AcademyDescription from '~/components/AcademyDescription/AcademyDescription';
import { ACADEMIES } from '~/locale';
import Academy4Steps from '../../../components/Academy4Steps/Academy4Steps';
import { ACCENT_COLORS, BUTTON_STYLE, ID } from '~/constants';
import ApplyContent from '~/components/ApplySection/ApplyToContent';
import { APPLY_FRONTEND } from '~/sass/utilities/locale';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import Testimonials from '~/components/Testimonials/Testimonials';
import { TESTIMONIALS_ACADEMIES } from '~/locale';
import MediaSection from '~/components/MediaSection/MediaSection';
import Schedule from '~/components/Schedule/Schedule';
import { SCHEDULES } from '~/components/Schedule/schedulesData';

const ACCENT_COLOR = ACCENT_COLORS.MONZA;
const BUTTON = BUTTON_STYLE.AMARANTH;

const AcademyForFrontend = () => {
  return (
    <>
      <AcademyDescription
        title={ACADEMIES.FRONT_END.TITLE}
        description={ACADEMIES.FRONT_END.DESCRIPTION}
        id={ID.FRONT_END}
        color={ACCENT_COLOR}
      />
      <Academy4Steps accentColor={ACCENT_COLOR} academy={ID.FRONT_END} />
      <AdmissionSection accentColor={ACCENT_COLOR} academy={ID.FRONT_END} />
      <Schedule academySchedules={SCHEDULES.FRONT_END} color={ACCENT_COLOR} />
      <Testimonials
        academies={[TESTIMONIALS_ACADEMIES.FRONT_END]}
        accentColor={ACCENT_COLOR}
      />
      <MediaSection academyName={ID.FRONT_END} accentColor={ACCENT_COLOR} />
      <ApplyContent
        color={ACCENT_COLOR}
        title={APPLY_FRONTEND.TITLE}
        text={APPLY_FRONTEND.TEXT}
        id={ID.FRONT_END}
        buttonStyle={BUTTON}
      />
    </>
  );
};

export default AcademyForFrontend;
