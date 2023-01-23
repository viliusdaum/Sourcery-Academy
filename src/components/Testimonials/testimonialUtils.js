export const mapTestimonialsToAcademy = (academies, testimonials) => {
  const testimonialsData = testimonials,
    testimonialsToDisplay = [];

  academies.map((academy) => {
    const foundTestimonial = testimonialsData.find(
      (testimonial) => testimonial.academy === academy
    );
    if (foundTestimonial) {
      testimonialsToDisplay.push(foundTestimonial);
      testimonialsData.splice(testimonialsData.indexOf(foundTestimonial), 1);
    } else if (testimonialsData[0]) {
      testimonialsToDisplay.push(testimonialsData[0]);
      testimonialsData.splice(0, 1);
    }
  });

  return testimonialsToDisplay;
};
