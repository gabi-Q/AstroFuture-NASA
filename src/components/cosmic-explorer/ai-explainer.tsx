'use client';

import * as React from 'react';
import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { getHypotheticalScenario, type ScenarioState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Bot, Send, X } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/context/language-context';
import funFacts from '@/lib/locales/curiosities.json';

interface AiExplainerProps {
  objectName?: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const initialScenarioState: ScenarioState = { success: false };
const INACTIVITY_TIMEOUT = 30000; // 30 seconds

export function AiExplainer({ objectName }: AiExplainerProps) {
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const [scenarioState, submitScenario, isScenarioPending] = useActionState(getHypotheticalScenario, initialScenarioState);
  
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [funFact, setFunFact] = React.useState<string | null>(null);
  const scenarioInputRef = React.useRef<HTMLTextAreaElement>(null);
  const inactivityTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const showFunFact = React.useCallback(() => {
    const randomFact = funFacts.funFacts[Math.floor(Math.random() * funFacts.funFacts.length)];
    setFunFact(language === 'es' ? randomFact.fact_es : randomFact.fact_en);
  }, [language]);

  const resetInactivityTimer = React.useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(showFunFact, INACTIVITY_TIMEOUT);
  }, [showFunFact]);

  React.useEffect(() => {
    resetInactivityTimer();
    window.addEventListener('mousemove', resetInactivityTimer);
    window.addEventListener('keydown', resetInactivityTimer);
    window.addEventListener('scroll', resetInactivityTimer);

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      window.removeEventListener('mousemove', resetInactivityTimer);
      window.removeEventListener('keydown', resetInactivityTimer);
      window.removeEventListener('scroll', resetInactivityTimer);
    };
  }, [resetInactivityTimer]);

  React.useEffect(() => {
    if (scenarioState.success && scenarioState.evaluation) {
        setMessages(prev => [...prev, { id: Date.now(), text: scenarioState.evaluation!, sender: 'ai' }]);
    } else if (scenarioState.error) {
      toast({
        variant: 'destructive',
        title: t('toast.error.title'),
        description: scenarioState.error || t('toast.error.scenarioFailed'),
      });
    }
  }, [scenarioState, toast, t]);

  const handleFormSubmit = (formData: FormData) => {
    resetInactivityTimer();
    const scenario = formData.get('scenario') as string;
    if (!scenario?.trim()) {
        toast({
            variant: 'destructive',
            title: t('toast.error.title'),
            description: t('toast.error.scenarioRequired'),
        });
        return;
    }
    setMessages(prev => [...prev, { id: Date.now(), text: scenario, sender: 'user' }]);
    submitScenario(formData);
    if(scenarioInputRef.current) {
        scenarioInputRef.current.value = '';
    }
  }

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    setFunFact(null); // Dismiss fun fact when opening chat
  }

  const placeholder = objectName 
    ? t('ai.hypothetical.placeholder')
    : t('ai.hypothetical.placeholderGeneric');

  const title = objectName
    ? t('ai.hypothetical.title')
    : t('ai.hypothetical.titleGeneric');

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end">
      {funFact && !isOpen && (
        <div className="bg-background p-3 rounded-lg shadow-lg max-w-xs mr-2 relative">
            <button onClick={() => setFunFact(null)} className="absolute top-1 right-1 text-muted-foreground hover:text-foreground">
                <X size={16} />
            </button>
            <p className="text-sm">{funFact}</p>
        </div>
      )}
        <Button 
            onClick={handleToggleChat}
            className="rounded-full w-16 h-16 shadow-lg"
            aria-label={title}
        >
            {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>

        {isOpen && (
            <Card className="fixed bottom-24 right-4 z-50 w-full max-w-sm flex flex-col shadow-xl" style={{ height: '60vh'}}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                    <ScrollArea className="h-full pr-4">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div key={message.id} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                                    {message.sender === 'ai' && <Bot className="w-6 h-6 flex-shrink-0" />}
                                    <div className={`rounded-lg px-3 py-2 text-sm ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                             {isScenarioPending && (
                                <div className="flex items-end gap-2">
                                    <Bot className="w-6 h-6 flex-shrink-0" />
                                    <div className="rounded-lg px-3 py-2 text-sm bg-muted animate-pulse">
                                        {t('ai.hypothetical.loading')}
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                     <form action={handleFormSubmit} className="flex w-full items-center space-x-2">
                        <Textarea
                            id="hypothetical-scenario"
                            name="scenario"
                            ref={scenarioInputRef}
                            placeholder={placeholder}
                            className="flex-1 resize-none"
                            disabled={isScenarioPending}
                            onFocus={resetInactivityTimer}
                        />
                        {objectName && <input type="hidden" name="objectName" value={objectName} />}
                        <input type="hidden" name="language" value={language === 'es' ? 'Spanish' : 'English'} />
                        <Button type="submit" size="icon" disabled={isScenarioPending}>
                            <Send className="h-4 w-4" />
                            <span className="sr-only">{t('cuestionario.submit')}</span>
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        )}
    </div>
  );
}
