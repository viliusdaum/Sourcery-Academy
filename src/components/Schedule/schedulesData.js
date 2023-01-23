import { columns } from 'stylelint-order/rules/shorthandData';

export const SCHEDULES = {
  DEVELOPERS: {
    splitSchedules: [
      {
        title: 'October / November',
        subject: [
          {
            column: 1,
            data: [
              {
                title: 'Git & JS Fundamentals',
                lecturer: 'Paulius Sabeckis, Paulius Beneta',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Oct',
                    day: '9',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Oct',
                    day: '10',
                  },
                ],
              },
              {
                title: 'Web basics',
                lecturer: 'Paulius Beneta',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Oct',
                    day: '16',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Oct',
                    day: '17',
                  },
                ],
              },
              {
                title: 'React fundamentals',
                lecturer: 'Julius Simas Simutis',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Oct',
                    day: '23',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Oct',
                    day: '24',
                  },
                ],
              },
              {
                title: 'React router & Redux',
                lecturer: 'Julius Simas Simutis',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Oct',
                    day: '30',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Oct',
                    day: '31',
                  },
                ],
              },
            ],
          },
          {
            column: 2,
            data: [
              {
                title: 'Async & Testing for developers',
                lecturer: 'John Doe',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '3',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '3',
                  },
                ],
              },
              {
                title: 'REST API fundamentals',
                lecturer: 'Julius',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '10',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '11',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'November / December',
        subject: [
          {
            column: 1,
            data: [
              {
                title: 'Spring framework',
                lecturer: 'Paulius Beneta',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '16',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '17',
                  },
                ],
              },
              {
                title: 'Databases',
                lecturer: 'Paulius Beneta',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '21',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '23',
                  },
                ],
              },
            ],
          },
          {
            column: 2,
            data: [
              {
                title: 'Authentication, Authorization',
                lecturer: 'Paulius Sabeckis',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '28',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '29',
                  },
                ],
              },
              {
                title: 'Development best practices',
                lecturer: 'Paulius Beneta',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Dec',
                    day: '4',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Dec',
                    day: '5',
                  },
                ],
              },
              {
                title: 'Final Exam',
                lecturer: 'Awesome Mentors',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Dec',
                    day: '10',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Dec',
                    day: '11',
                  },
                ],
              },
              {
                title: 'Demo, Results and Rewards',
                lecturer: 'Awesome Mentors',
                startTime: '4:00 PM',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Dec',
                    day: '19',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Dec',
                    day: '19',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  TESTERS: {
    splitSchedules: [
      {
        title: 'June / July',
        subject: [
          {
            column: 1,
            data: [
              {
                title:
                  'Testing Foundations. Manual Testing Approach. Exploratory Testing.',
                lecturer: 'Gerda Monkevičiūtė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Jun',
                    day: '25',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Jun',
                    day: '26',
                  },
                ],
              },
              {
                title: 'Understanding Agile. Continuous Testing',
                lecturer: 'Gerda Monkevičiūtė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Jul',
                    day: '2',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Jul',
                    day: '4',
                  },
                ],
              },
              {
                title: 'Web Testing Specifics',
                lecturer: 'Asta Dagienė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Jul',
                    day: '10',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Jul',
                    day: '11',
                  },
                ],
              },
              {
                title: 'Mobile Testing Specifics',
                lecturer: 'Asta Dagienė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Jul',
                    day: '17',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Jul',
                    day: '18',
                  },
                ],
              },
            ],
          },
          {
            column: 2,
            data: [
              {
                title: 'Server-side Testing Specifics',
                lecturer: 'Asta Dagienė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Jul',
                    day: '24',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Jul',
                    day: '25',
                  },
                ],
              },
              {
                title: 'Test Automation: Theory and Practice (Part 1)',
                lecturer: 'Asta Dagienė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Jul',
                    day: '24',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Jul',
                    day: '25',
                  },
                ],
              },
              {
                title: 'Test Automation: Theory and Practice (Part 2)',
                lecturer: 'Asta Dagienė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Jul',
                    day: '28',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Jul',
                    day: '29',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'July / August',
        subject: [
          {
            column: 1,
            data: [
              {
                title: 'Non-functional Testing: Security',
                lecturer: 'Vilius Pankauskas',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Aug',
                    day: '7',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Aug',
                    day: '5',
                  },
                ],
              },
              {
                title: 'Non-functional Testing: Performance',
                lecturer: 'Vilius Pankauskas',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Aug',
                    day: '8',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Aug',
                    day: '9',
                  },
                ],
              },
              {
                title: 'Non-functional Testing: Accessibility',
                lecturer: 'Vilius Pankauskas',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Aug',
                    day: '15',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Aug',
                    day: '16',
                  },
                ],
              },
              {
                title: 'Bonus: Machine Learning Basics',
                lecturer: 'Gerda Monkevičiūtė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Aug',
                    day: '21',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Aug',
                    day: '22',
                  },
                ],
              },
            ],
          },
          {
            column: 2,
            data: [
              {
                title: 'Evaluation Workshop',
                lecturer: 'Gerda Monkevičiūtė',
                startTime: '11:00 am',
                duration: '5 hours',
                date: [
                  {
                    city: 'Kaunas',
                    month: 'Aug',
                    day: '23',
                  },
                  {
                    city: 'Vilnius',
                    month: 'Aug',
                    day: '24',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  FRONT_END: {
    splitSchedules: [
      {
        title: 'October / November / December',
        subject: [
          {
            column: 1,
            data: [
              {
                title: 'Intro, Agile & Git',
                lecturer: 'Simas Leonavičius',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Oct',
                    day: '26',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Oct',
                    day: '27',
                  },
                ],
              },
              {
                title: 'HTML Semantics & Accessibility Basics',
                lecturer: 'Martynas Druteika',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '3',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '4',
                  },
                ],
              },
              {
                title: 'HTML Layouts',
                lecturer: 'Evelina Mikelaitytė',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '8',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '9',
                  },
                ],
              },
              {
                title: 'Tips & Tricks to build clean and functional CSS',
                lecturer: 'Evelina Mikelaitytė',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '15',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '16',
                  },
                ],
              },
            ],
          },
          {
            column: 2,
            data: [
              {
                title: 'BEM & SCSS basics',
                lecturer: 'Martynas Galkus',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '18',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '19',
                  },
                ],
              },
              {
                title: 'SCSS in depth',
                lecturer: 'Evelina Mikelaitytė',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '24',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '25',
                  },
                ],
              },
              {
                title: 'JS fundamentals Part 1',
                lecturer: 'Julius Simas Simutis',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Nov',
                    day: '26',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Nov',
                    day: '27',
                  },
                ],
              },
              {
                title: 'JS fundamentals Part 2',
                lecturer: 'Julius Simas Simutis',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Dec',
                    day: '1',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Dec',
                    day: '2',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'December / January',
        subject: [
          {
            column: 1,
            data: [
              {
                title: 'Accessibility in depth',
                lecturer: 'Kęstutis Buivydas',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Dec',
                    day: '8',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Dec',
                    day: '9',
                  },
                ],
              },
              {
                title: 'Build tools',
                lecturer: 'Julius Simas Simutis',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Dec',
                    day: '15',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Dec',
                    day: '16',
                  },
                ],
              },
            ],
          },
          {
            column: 2,
            data: [
              {
                title: 'Final Exam',
                lecturer: 'Awesome Mentors',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Jan',
                    day: '9',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Jan',
                    day: '9',
                  },
                ],
              },
              {
                title: 'Demo Day, Results and Rewards',
                lecturer: 'Awesome Mentors',
                startTime: '4:00 pm',
                duration: '3 hours',
                date: [
                  {
                    city: 'Vilnius',
                    month: 'Jan',
                    day: '18',
                  },
                  {
                    city: 'Kaunas',
                    month: 'Jan',
                    day: '18',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
