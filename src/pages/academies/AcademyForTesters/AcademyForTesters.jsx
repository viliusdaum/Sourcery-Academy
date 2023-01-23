import React from 'react';
import AcademyDescription from '~/components/AcademyDescription/AcademyDescription';
import { ACADEMIES } from '~/locale';
import Academy4Steps from '../../../components/Academy4Steps/Academy4Steps';
import { ACCENT_COLORS, BUTTON_STYLE, ID } from '~/constants';
import ApplyContent from '~/components/ApplySection/ApplyToContent';
import { APPLY_TESTERS } from '~/sass/utilities/locale';
import Testimonials from '~/components/Testimonials/Testimonials';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import { TESTIMONIALS_ACADEMIES } from '~/locale';
import MediaSection from '~/components/MediaSection/MediaSection';
import Schedule from '~/components/Schedule/Schedule';
import { SCHEDULES } from '~/components/Schedule/schedulesData';

const ACCENT_COLOR = ACCENT_COLORS.DEEP_GREEN;
const BUTTON = BUTTON_STYLE.PERSIAN_GREEN;

const AcademyForTesters = () => {
  return (
    <>
      <AcademyDescription
        title={ACADEMIES.TESTERS.TITLE}
        description={ACADEMIES.TESTERS.DESCRIPTION}
        id={ID.TESTERS}
        color={ACCENT_COLOR}
      />
      <Academy4Steps accentColor={ACCENT_COLOR} academy={ID.TESTERS} />
      <AdmissionSection accentColor={ACCENT_COLOR} academy={ID.TESTERS} />
      <Schedule academySchedules={SCHEDULES.TESTERS} color={ACCENT_COLOR} />
      <Testimonials
        academies={[TESTIMONIALS_ACADEMIES.TESTERS]}
        accentColor={ACCENT_COLOR}
      />
      <MediaSection academyName={ID.TESTERS} accentColor={ACCENT_COLOR} />
      <ApplyContent
        color={ACCENT_COLOR}
        title={APPLY_TESTERS.TITLE}
        text={APPLY_TESTERS.TEXT}
        id={ID.TESTERS}
        buttonStyle={BUTTON}
      />
    </>
  );
};

export default AcademyForTesters;
