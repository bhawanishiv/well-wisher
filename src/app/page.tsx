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
    hint: `Only seniors can buy a PS5, juniors can just imagine.`,
    answer: 1,
  },
  {
    title: `Who is best:`,
    options: ["Gauri", "Kiran", "Gauri and Kiran", "None of them"],
    hint: `HRs do what is asked`,
    answer: 0,
  },
  {
    title: `What is the password of inflolabs kubernates application?`,
    options: [
      "I can go and check",
      "Why do I put it here",
      "I no more work at that hell",
      `I_Love_Naresh's_Smile_123`,
    ],
    hint: `All is well`,
    answer: 2,
  },
  {
    title: `Why is Varun gay?`,
    options: [
      `I don’t think he is`,
      `Nature’s gift`,
      `Because he is`,
      `Because he is!`,
    ],
    hint: `I won't hint you always`,
    answer: 3,
  },
  {
    title: `What is your revidd ESOP value?`,
    options: [`- Your salary`, `= Hackerman`, `Null`, `Undefined`],
    hint: `So many developers left the company.`,
    answer: 1,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:px-32 md:py-16">
      <Quiz items={items} />
    </main>
  );
}
