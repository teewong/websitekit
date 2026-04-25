export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. We offer free estimates for most local residential projects and are happy to talk through the work before booking.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Qualicum Beach, Parksville, Errington, Coombs, Nanoose Bay, Nanaimo, and nearby communities.',
  },
  {
    question: 'Do you clean up after the work is done?',
    answer:
      'Yes. Cleanup is part of the service so the site feels orderly and usable when the work is complete.',
  },
]
