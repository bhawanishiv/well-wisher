import { Metadata } from "next";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: `Vamshi's Birthday quiz`,
};

const items = [
  {
    title: `Who did buy PS5 first?`,
    options: [
      "Shankar",
      "Sunil",
      "Bhawani",
      "Our salary was too less to buy a PS5",
    ],
    answer: 1,
  },
  {
    title: `Who is best:`,
    options: ["Gauri", "Kiran", "Gauri and Kiran", "None of them"],
    answer: 0,
  },
  {
    title: `What is the password of inflolabs kubernates application?`,

    options: [
      "Why do I put it here",
      "I no more work at that hell",
      "I can go and check",
      `I_Love_Naresh's_Smile_123`,
    ],
    answer: 1,
  },
  {
    title: `Why is Varun gay?`,
    options: [
      `!Because he is`,
      `Nature’s gift`,
      `Because he is`,
      `I don’t think he is`,
    ],
    answer: 0,
  },
  {
    title: `What is your revidd ESOP value?`,
    options: [`Null`, `Your alary`, `Undefined`, `Kiran is a Hackerman`],
    answer: 3,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <Quiz items={items} />
    </main>
  );
}
