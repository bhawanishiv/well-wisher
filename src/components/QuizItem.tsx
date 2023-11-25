import { cn } from "@/lib/utils";

export interface QuizItemProps {
  serial: number;
  hint?: string;
  item: string;
  selectedItem: number;
  options: string[];
  onOptionSelect: (option: string, i: number) => void;
}

export default function QuizItem({
  serial,
  hint,
  item,
  selectedItem,
  options,
  onOptionSelect,
}: QuizItemProps) {
  const handleSelect = (option: string, i: number) => () => {
    onOptionSelect(option, i);
  };

  const renderQuizItem = () => {
    return (
      <div>
        <h1 className="mb-2 text-xl">
          <span className="text-sm mr-2 text-primary">{serial}.</span>
          {item}
        </h1>
        {hint && <p className="text-sm mb-6 text-muted">Hint: {hint}</p>}
        <ul className="flex flex-col">
          {options.map((option, i) => {
            return (
              <li className={cn("py-2")} key={option}>
                <button
                  className={cn(
                    " hover:bg-gray-900 bg-gray-800 rounded-full py-3 px-6",
                    i === selectedItem ? "text-primary" : ""
                  )}
                  onClick={handleSelect(option, i)}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return renderQuizItem();
}
