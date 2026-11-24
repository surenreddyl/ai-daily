// Builds the "Ask AI" prompts for a lesson. Prompts contain only the lesson topic
// and the learner's role (never their name). `{role}` is filled in on the device.

export interface AskPrompt {
  key: 'explain' | 'apply' | 'quiz' | 'challenge';
  label: string;
  hint: string;
  template: string;
}

interface LessonForPrompts {
  title: string;
  summary: string;
  aiPrompts: { explain: string; applyToRole: string };
}

export const ROLE_PHRASES: Record<string, string> = {
  sales: 'sales leader',
  marketing: 'marketing leader',
  gm: 'general manager or operations leader',
  other: 'business leader',
};
export const DEFAULT_ROLE_PHRASE = 'business leader';

export function lessonPrompts(lesson: LessonForPrompts): AskPrompt[] {
  const topic = `"${lesson.title}"`;
  return [
    {
      key: 'explain',
      label: 'Explain it differently',
      hint: 'A fresh, plain-English explanation with a new analogy.',
      template: lesson.aiPrompts.explain,
    },
    {
      key: 'apply',
      label: 'Apply it to my role',
      hint: 'Three ways to use today’s idea in your job this week.',
      template: lesson.aiPrompts.applyToRole,
    },
    {
      key: 'quiz',
      label: 'Quiz me',
      hint: 'Harder, scenario-based questions, one at a time.',
      template: `I'm a {role} learning about ${topic}. In short: ${lesson.summary} Quiz me with 3 realistic, scenario-based questions a {role} might face on this topic. Ask one question at a time and wait for my answer. After each answer, tell me what I got right, what I missed, and why, in 2-3 sentences. Then ask the next question.`,
    },
    {
      key: 'challenge',
      label: 'Challenge me',
      hint: 'The AI pushes back on a common misunderstanding.',
      template: `I'm a {role} and I just learned about ${topic}. In short: ${lesson.summary} Challenge my understanding. State one common misunderstanding a {role} might have about this topic, as if it were my view, and ask whether I agree. Whatever I answer, push back with a strong counter-argument and a real-world example. Be direct and keep each reply under 120 words.`,
    },
  ];
}
