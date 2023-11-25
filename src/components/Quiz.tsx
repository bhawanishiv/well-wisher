"use client";

import React, { useState } from "react";
import Image from "next/image";
import QuizItem from "./QuizItem";
import QuizAction from "./QuizAction";
import Link from "next/link";

export interface QuizProps {
  items: { title: string; options: string[]; hint?: string; answer: number }[];
}

export default function Quiz({ items }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetQuiz = () => {
    setScore(0);
    setSelectedValues([]);
    setIndex(0);
    setIsSubmitted(false);
  };

  const handleRetry = () => {
    resetQuiz();
  };

  const handleOptionSelect = (index: number) => (option: string, i: number) => {
    setSelectedValues((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[index] = i;
      return newSelected;
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;

    for (let i = 0; i < items.length; i++) {
      const { answer } = items[i];
      const selectedValue = selectedValues[i];
      if (answer === selectedValue && typeof selectedValue !== "undefined") {
        correctAnswers += 1;
      }
    }

    const scorePerc = (correctAnswers / items.length) * 100;
    setScore(scorePerc);
  };

  const handleNext = () => {
    calculateScore();
    setIndex((i) => i + 1);
  };

  const handlePrev = () => {
    setIndex((i) => i - 1);
  };

  const handleSkip = () => {
    setIndex((i) => i - 1);
  };

  const handleFinalSubmit = () => {
    calculateScore();
    setIsSubmitted(true);
  };

  const handleSeeGift = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (score >= 80) {
      window.location.href = process.env.NEXT_PUBLIC_QUIZ_SUCCESS_CODE || "";
    }
  };

  const renderQuiz = () => {
    if (isSubmitted) {
      let response = "Oh no! I want you to try again.";

      if (score >= 100) {
        response = `Damn! you got the thing, But you're still a Nibba.\nHappy Birthday Mr. Vamshi!`;
      } else if (score >= 80) {
        response = `You won! You must be feeling coming out of a hell.\n\nHappy Birthday Mr. Vamshi!`;
      }

      return (
        <div>
          <div>
            <h2 className="whitespace-pre-line mb-2">{response}</h2>
            You have scored{" "}
            <span className="text-primary text-xl">{score}%</span> in this quiz.
          </div>
          <div className="pt-6">
            {score >= 100 ? (
              <Image
                src="/vamshi-birthday-wall.jpg"
                alt="Nibba"
                width="640"
                height="320"
                className="rounded-sm"
              />
            ) : null}
            {score >= 80 ? (
              <div className="pt-6">
                <Link href="/" className="text-primary" onClick={handleSeeGift}>
                  See your gift here
                </Link>
              </div>
            ) : (
              <button className="text-primary" onClick={handleRetry}>
                Retry
              </button>
            )}
          </div>
        </div>
      );
    }

    const item = items[index];
    const selectedItem = selectedValues[index];
    const endReached = index >= items.length - 1;
    return (
      <>
        <div className="pb-6 flex">
          <div className="flex items-center gap-2 bg-primary rounded-full py-2 px-6">
            Your score: <span className="text-2xl">{score}%</span>
          </div>
        </div>
        <QuizItem
          // Passing key so that is resets the internal state
          key={index + 1}
          serial={index + 1}
          item={item.title}
          hint={item.hint}
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
