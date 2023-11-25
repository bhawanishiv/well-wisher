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
      "Why do I put it here",
      "I no more work at that hell",
      "I can go and check",
      `I_Love_Naresh's_Smile_123`,
    ],
    hint: `All is well`,
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
    hint: `I won't hint you always`,
    answer: 0,
  },
  {
    title: `What is your revidd ESOP value?`,
    options: [`Null`, `- Your salary`, `Undefined`, `Kiran is a Hackerman`],
    hint: `So many developers left the company.`,
    answer: 3,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:px-32 md:py-16">
      <Quiz items={items} />
    </main>
  );
}
