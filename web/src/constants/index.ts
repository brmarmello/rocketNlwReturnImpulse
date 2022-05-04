import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import otherImageUrl from '../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de uma lagarta',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImageUrl,
      alt: 'Imagem de uma nuvem de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
