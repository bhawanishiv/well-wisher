import { cn } from "@/lib/utils";

export interface QuizActionProps {
  nextDisabled?: boolean;
  prevDisabled?: boolean;
  skipDisabled?: boolean;
  endReached?: boolean;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
  onSubmit: () => void;
}

export default function QuizAction({
  nextDisabled,
  prevDisabled,
  skipDisabled,
  endReached,
  onNext,
  onPrev,
  onSubmit,
}: QuizActionProps) {
  const renderQuizAction = () => {
    return (
      <div className="flex">
        <div className="flex items-center justify-between py-8">
          <button
            disabled={prevDisabled}
            onClick={onPrev}
            className={cn(
              "mr-3 px-6 py-3 rounded-full",
              prevDisabled ? "text-muted" : "bg-primary"
            )}
          >
            Prev
          </button>

          <button
            disabled={nextDisabled}
            onClick={endReached ? onSubmit : onNext}
            className={cn(
              "ml-3 px-6 py-3 rounded-full",
              nextDisabled ? "text-muted" : "bg-primary"
            )}
          >
            {endReached ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    );
  };

  return renderQuizAction();
}
