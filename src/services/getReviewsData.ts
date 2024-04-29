import moment from 'moment'

export default function getReviewsData<T>(): T {
  return [
    {
      platform: 'Upwork',
      jobTitle:
        'Build React + Material-UI front end web app for ML-based Image generation and search application',
      review:
        'Usman was a joy to work with. Super responsive and I was happy with the quality of the code he wrote. A few bugs here or there but he was quick to fix them when I brought them up. Will work with him again given the chance!',
      stars: 5,
      startDate: moment('2022-08-26'),
      endDate: moment('2022-09-30'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle: 'Greenwave IOT Redesign',
      review: 'Excellent professional, easy to work with',
      stars: 5,
      startDate: moment('2023-09-06'),
      endDate: moment('2022-12-07'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle: 'ReactJS Dashboard',
      review: 'Great job and excellent skills',
      stars: 5,
      startDate: moment('2023-01-21'),
      endDate: moment('2022-04-12'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle: 'React JS + Next JS Developer',
      review: 'Good one.',
      stars: 5,
      startDate: moment('2022-10-22'),
      endDate: moment('2022-10-23'),
      jobType: 'Hourly Rate',
    },
    {
      platform: 'Upwork',
      jobTitle: 'Settings page',
      review:
        'He is the best with what he does. Never fails to deliver does more than what is expected. Exceptionally great to work with',
      stars: 5,
      startDate: moment('2022-09-02'),
      endDate: moment('2022-09-07'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle: 'Create a snap scroll function for my web home page',
      review:
        'He was exceptional. He knoew exactl what I was looking for it was easy to communciate and he responds pretty fast. Always gives feeddback and his points out to make the work better. Very easy to work with and delivers earlier than expected. Great work! Highly recomend',
      stars: 5,
      startDate: moment('2022-08-23'),
      endDate: moment('2022-08-30'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle: 'Mararketplace page as attached',
      review: 'No feeback given',
      stars: 5,
      startDate: moment('2022-10-31'),
      endDate: moment('2022-12-20'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle:
        'Backend developer to build out react MUI dashboard template, Berry.',
      review:
        "Muhammad is communicative and walks you through the process of creation step by step. The price vs quality of work is impeccable. He gets everything you need done and even provides useful feedback. He got this project done well under his expected time frame. Despite massive timezone differences he was easy to contact and available almost every time I messaged him. I'd highly recommend working with Muhammad and I know I will in the future.",
      stars: 5,
      startDate: moment('2022-07-17'),
      endDate: moment('2022-07-30'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Local',
      jobTitle: 'Create web app for PDF editing tool',
      review: 'No feedback given',
      stars: 0,
      startDate: moment('2022-11-27'),
      endDate: moment('2023-01-21'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle: 'Clone a website raycast.com',
      review: 'No feedback given',
      stars: 5,
      startDate: moment('2022-01-30'),
      endDate: moment('2023-04-09'),
      jobType: 'Fixed Price',
    },
    {
      platform: 'Upwork',
      jobTitle: 'Data Management (using MongoDB)',
      review:
        'Communicates well with the other party, accurate in his work and quick to finish the assignment on time. Good person to work with.',
      stars: 5,
      startDate: moment('2022-02-11'),
      endDate: moment('2023-02-11'),
      jobType: 'Fixed Price',
    },
  ] as T
}
