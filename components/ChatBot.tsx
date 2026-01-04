
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { portfolioData } from '../data';
import { Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hi! I'm Leon's Digital Navigator. I have full access to his project repositories (like M-Pesa Supabase), security certifications, and STEM initiatives. How can I help you explore his work today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const getChatSession = () => {
    if (chatRef.current) return chatRef.current;
    
    // Safety check for API key
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    const ai = new GoogleGenAI({ apiKey: apiKey || '' });
    
    chatRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are "Leon's Digital Navigator," a professional AI assistant for Leon Kipkemoi's portfolio.
        
        Leon's Professional Background:
        - Expertise: Cybersecurity (Forensics, Threat Hunting), AI Solutions, and Full-Stack Development.
        - Core Passion: Youth STEM advocacy and digital literacy in Africa.
        - Experience: STEMlens Network, Social Health Authority, Wote kwa Wote CBO, STEM Impact Center.
        - Projects: M-Pesa Daraja integrations, secure booking platforms (AB-BNB), and educational portals.
        
        Full Portfolio Data Access: ${JSON.stringify(portfolioData)}
        
        Tone: Professional, forward-thinking, and precise.
        Goal: Provide detailed info on Leon's projects, skills, and how to collaborate with him. If the user asks for contact info, point them to his email or the contact form.`,
      },
    });
    return chatRef.current;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput('');
    setError(null);
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const chat = getChatSession();
      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;
      if (!responseText) throw new Error("No response");
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (err: any) {
      console.error("Chat Error:", err);
      setError("I'm currently disconnected from my neural database. Please ensure your API key is correctly configured.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="py-24 px-4 bg-slate-100/30 dark:bg-slate-950 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">
            <Sparkles size={14} /> AI Powered
          </div>
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Career <span className="text-blue-600">Assistant</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Ask me anything about my technical stack or my vision for STEM in Kenya.
          </p>
        </div>
        
        <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-[600px] shadow-2xl border border-slate-200 dark:border-slate-800">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex items-center gap-3">
            <Bot size={20} className="text-blue-600" />
            <span className="font-bold text-sm text-slate-900 dark:text-white">Digital Navigator</span>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4" ref={scrollRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 text-slate-400 rounded-2xl px-4 py-2 text-sm border border-slate-200 dark:border-slate-700 animate-pulse">
                  Analyzing portfolio data...
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center">
                <div className="bg-red-500/10 text-red-600 px-4 py-2 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle size={14} /> {error}
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 bg-white/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && handleSend()} 
              className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white" 
              placeholder="Ask about my Cybersecurity forensics..." 
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-500/20"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
