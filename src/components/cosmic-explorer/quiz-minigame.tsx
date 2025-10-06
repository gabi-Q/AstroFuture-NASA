'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Skull, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import naveImg from '@/../assets/nave.png';
import meteorImg from '@/../assets/meteoro.png';

interface QuizMinigameProps {
  results: boolean[];
}

export function QuizMinigame({ results }: QuizMinigameProps) {
    const { t } = useLanguage();
    const [shake, setShake] = useState(false);
    const [impacts, setImpacts] = useState<boolean[]>([]);

    const meteorPositions = useMemo(() => [
      { left: '15%', delay: '0s' }, 
      { left: '45%', delay: '0.5s' }, 
      { left: '75%', delay: '1.0s' }
    ], []);

    useEffect(() => {
        const newImpacts = results.map(result => !result);
        setImpacts(newImpacts);

        const hasImpact = newImpacts.some(impact => impact);
        if (hasImpact) {
            const totalDuration = 1500 + (meteorPositions.length - 1) * 500;
            setTimeout(() => {
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }, totalDuration);
        }
    }, [results, meteorPositions]);

    const correctAnswers = results.filter(Boolean).length;
    const totalQuestions = results.length;

    let resultState: 'perfect' | 'good' | 'bad' | 'lost';
    let message = '';
    let Icon = Skull;

    if (totalQuestions > 0) {
        if (correctAnswers === totalQuestions) {
            resultState = 'perfect';
            message = t('minigame.perfect');
            Icon = ShieldCheck;
        } else if (correctAnswers >= totalQuestions / 2) {
            resultState = 'good';
            message = t('minigame.good');
            Icon = ShieldAlert;
        } else if (correctAnswers > 0) {
            resultState = 'bad';
            message = t('minigame.bad');
            Icon = ShieldAlert;
        } else {
            resultState = 'lost';
            message = t('minigame.lost');
            Icon = Skull;
        }
    } else {
        message = t('minigame.no_results') || 'Play the quiz to see your result.';
        resultState = 'bad';
        Icon = Rocket;
    }

    const iconColor = {
        perfect: 'text-green-500',
        good: 'text-yellow-500',
        bad: 'text-orange-500',
        lost: 'text-destructive',
    }[resultState];

    return (
        <div className="mt-8 p-6 rounded-lg bg-card/50 border border-border flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold tracking-tight">{totalQuestions > 0 ? t('minigame.title') : t('cuestionario.page.title')}</h3>
            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center bg-[#21094E] rounded-lg border-2 border-border">
                <div className="absolute top-0 left-0 w-full h-full opacity-50">
                    <div className="stars w-full h-full"></div>
                    <div className="stars-2 w-full h-full"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-cyan-600/50 backdrop-blur-sm" />

                <div className={`absolute bottom-4 z-10 ${shake ? 'shake-animation' : ''}`}>
                    <Image src={naveImg} alt="Pixel Rocket" width={64} height={80} />
                </div>

                {results.map((isCorrect, index) => {
                  const animationName = isCorrect ? 'meteor-dodge' : 'meteor-hit';
                  const position = meteorPositions[index % meteorPositions.length];

                  return (
                    <div
                      key={index}
                      className="absolute top-0"
                      style={{
                        left: position.left,
                        animation: `${animationName} 1.5s ease-in-out forwards`,
                        animationDelay: position.delay,
                      }}
                    >
                        <Image src={meteorImg} alt="Meteor" width={50} height={50} />
                    </div>
                  );
                })}
            </div>

            <AnimatePresence>
                {
                    <motion.div
                        className="flex items-center gap-3 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: totalQuestions > 0 ? 1 : 0, duration: 0.5 }}
                    >
                        <Icon className={`w-8 h-8 ${iconColor}`} />
                        <p className={`text-xl font-semibold ${iconColor}`}>{message}</p>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}
