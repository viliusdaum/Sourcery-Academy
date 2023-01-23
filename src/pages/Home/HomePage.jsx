import React from 'react';
import SourceryAcademySection from '~/components/SourceryAcademySection/SourceryAcademySection';
import AcademiesSection from '~/components/AcademiesSection/AcademiesSection';
import Testimonials from '~/components/Testimonials/Testimonials';
import { TESTIMONIALS_ACADEMIES } from '~/locale';
import { ACCENT_COLORS, ACADEMY_NAME } from '~/constants';
import MediaSection from '../../components/MediaSection/MediaSection';

const ACCENT_COLOR = ACCENT_COLORS.MINSK;

const HomePage = () => {
  return (
    <>
      <SourceryAcademySection />
      <AcademiesSection />
      <Testimonials
        academies={[
          TESTIMONIALS_ACADEMIES.TESTERS,
          TESTIMONIALS_ACADEMIES.FRONT_END,
          TESTIMONIALS_ACADEMIES.DEVELOPER,
        ]}
        accentColor={ACCENT_COLOR}
      />
      <MediaSection accentColor={ACCENT_COLOR} />
    </>
  );
};

export default HomePage;
