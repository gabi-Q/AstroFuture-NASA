'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';

export function Cuestionario() {
  const { t } = useLanguage();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleStartQuiz = () => {
    // For now, we'll use dummy questions
    setQuestions([
      {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
        correctAnswer: 1,
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Mercury', 'Uranus'],
        correctAnswer: 1,
      },
    ]);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }
  };

  if (questions.length === 0) {
    return (
      <Button onClick={handleStartQuiz}>{t('juegos.startQuiz')}</Button>
    );
  }

  if (showResult) {
    return (
      <div>
        <p>{t('juegos.checkAnswers')}</p>
        <Button onClick={handleStartQuiz}>{t('juegos.newQuiz')}</Button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold">{questions[currentQuestion].question}</h3>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {questions[currentQuestion].options.map((option: string, index: number) => (
          <Button
            key={index}
            variant={selectedAnswer === index ? 'default' : 'outline'}
            onClick={() => handleSelectAnswer(index)}
          >
            {option}
          </Button>
        ))}
      </div>
      <Button onClick={handleNextQuestion} className="mt-4">
        {currentQuestion < questions.length - 1 ? t('juegos.nextQuestion') : t('juegos.submit')}
      </Button>
    </div>
  );
}
