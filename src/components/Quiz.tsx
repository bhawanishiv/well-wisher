"use client";

import React, { useState } from "react";
import QuizItem from "./QuizItem";
import QuizAction from "./QuizAction";

export interface QuizProps {
  items: { title: string; options: string[], answer:number; }[];
}

export default function Quiz({ items }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);

  const handleOptionSelect = (index: number) => (option: string, i: number) => {
    setSelectedValues((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[index] = i;
      return newSelected;
    });
  };

  const handleNext = () => {
    setIndex((i) => i + 1);
  };

  const handlePrev = () => {
    setIndex((i) => i - 1);
  };

  const handleSkip = () => {
    setIndex((i) => i - 1);
  };

  const handleFinalSubmit = () => {
    const maxScore = items.length;
    let score=0;

    for (let i=0;i<items.length;i++){
      const {answer}=items[i];
      const selectedValue = selectedValues[i];
      
      if(answer===selectedValue && typeof selectedValue!=='undefined'){
        score+=1
      }
    }

    if(score===maxScore){
      alert(process.env.NEXT_PUBLIC_QUIZ_SUCCESS_CODE)
    }
  };

  const renderQuiz = () => {
    const item = items[index];
    const selectedItem = selectedValues[index];
    const endReached = index >= items.length - 1;
    return (
      <>
        <QuizItem
          item={item.title}
          options={item.options}
          selectedItem={selectedItem}
          onOptionSelect={handleOptionSelect(index)}
        />
        <QuizAction
          prevDisabled={index <= 0}
          nextDisabled={typeof selectedItem === "undefined"}
          endReached={endReached}
          onNext={handleNext}
          onPrev={handlePrev}
          onSkip={handleSkip}
          onSubmit={handleFinalSubmit}
        />
      </>
    );
  };

  return renderQuiz();
}
