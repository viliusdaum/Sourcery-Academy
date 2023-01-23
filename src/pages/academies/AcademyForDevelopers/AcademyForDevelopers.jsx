import React from 'react';
import AcademyDescription from '~/components/AcademyDescription/AcademyDescription';
import { ACADEMIES } from '~/locale';
import Academy4Steps from '../../../components/Academy4Steps/Academy4Steps';
import { ACCENT_COLORS, BUTTON_STYLE, ID } from '~/constants';
import ApplyContent from '~/components/ApplySection/ApplyToContent';
import { APPLY_DEVELOPERS } from '~/sass/utilities/locale';
import Testimonials from '~/components/Testimonials/Testimonials';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import { TESTIMONIALS_ACADEMIES } from '~/locale';
import MediaSection from '~/components/MediaSection/MediaSection';
import Schedule from '~/components/Schedule/Schedule';
import { SCHEDULES } from '~/components/Schedule/schedulesData';

const ACCENT_COLOR = ACCENT_COLORS.COBALT;
const BUTTON = BUTTON_STYLE.CORNFLOWER_BLUE_LIGHT;

const AcademyForDevelopers = () => {
  return (
    <>
      <AcademyDescription
        title={ACADEMIES.DEVELOPERS.TITLE}
        description={ACADEMIES.DEVELOPERS.DESCRIPTION}
        id={ID.DEVELOPERS}
        color={ACCENT_COLOR}
      />
      <Academy4Steps accentColor={ACCENT_COLOR} academy={ID.DEVELOPERS} />
      <AdmissionSection accentColor={ACCENT_COLOR} academy={ID.DEVELOPERS} />
      <Schedule academySchedules={SCHEDULES.DEVELOPERS} color={ACCENT_COLOR} />
      <Testimonials
        academies={[TESTIMONIALS_ACADEMIES.DEVELOPER]}
        accentColor={ACCENT_COLOR}
      />
      <MediaSection academyName={ID.DEVELOPERS} accentColor={ACCENT_COLOR} />
      <ApplyContent
        color={ACCENT_COLOR}
        title={APPLY_DEVELOPERS.TITLE}
        text={APPLY_DEVELOPERS.TEXT}
        id={ID.DEVELOPERS}
        buttonStyle={BUTTON}
      />
    </>
  );
};

export default AcademyForDevelopers;
