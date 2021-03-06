import { useState } from 'react';
import { CloseButtom } from '../CloseButtom';
import { FeedbackType, feedbackTypes } from '../../constants';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={ setFeedbackType } />
      ) : (
          <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackRestartRequested={ handleRestartFeedback }
          />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/brunomarmello">Bruno Marmello</a>.
      </footer>
    </div>
  );
}