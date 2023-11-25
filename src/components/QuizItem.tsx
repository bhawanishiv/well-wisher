import { cn } from "@/lib/utils";

export interface QuizItemProps {
  item: string;
  selectedItem:number,
  options: string[];
  onOptionSelect: (option: string, i: number) => void;
}

export default function QuizItem({
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
        <h1 className="mb-6 text-xl text-center">{item}</h1>
        <ul className="flex flex-col">
          {options.map((option, i) => {
            return (
              <li className={cn(i===selectedItem?'text-primary':'','py-2')} key={option}>
                <button className="w-full hover:bg-gray-900 rounded-full py-3 px-6" onClick={handleSelect(option, i)}>{option}</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return renderQuizItem();
}
