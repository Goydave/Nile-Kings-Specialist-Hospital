"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Send, Loader2, User, Sparkles } from "lucide-react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { aiTriage } from "@/ai/flows/ai-triage-tool";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AiTriageClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [parent] = useAutoAnimate();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await aiTriage({ query: input });
      const assistantMessage: Message = {
        role: "assistant",
        content: response.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Triage Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm sorry, but I'm having trouble connecting right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div ref={parent} className="space-y-6">
            {messages.length === 0 && (
                <div className="text-center text-muted-foreground p-8">
                    <Sparkles className="mx-auto h-12 w-12 mb-4 text-primary"/>
                    <h2 className="text-xl font-semibold">AI Triage Assistant</h2>
                    <p>Describe your symptoms or ask a question to get started.</p>
                    <p className="text-xs mt-2">(This is not a substitute for professional medical advice)</p>
                </div>
            )}
            {messages.map((message, index) => (
                <div
                key={index}
                className={cn(
                    "flex items-start gap-4",
                    message.role === "user" ? "justify-end" : "justify-start"
                )}
                >
                {message.role === "assistant" && (
                    <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                        <Sparkles />
                    </AvatarFallback>
                    </Avatar>
                )}
                <div
                    className={cn(
                    "max-w-lg rounded-lg px-4 py-3",
                    message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === "user" && (
                    <Avatar>
                    <AvatarFallback>
                        <User />
                    </AvatarFallback>
                    </Avatar>
                )}
                </div>
            ))}
            {isLoading && messages.length > 0 && (
                <div className="flex items-start gap-4 justify-start">
                    <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                            <Sparkles />
                        </AvatarFallback>
                    </Avatar>
                    <div className="max-w-lg rounded-lg px-4 py-3 bg-muted flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                </div>
            )}
        </div>
      </ScrollArea>
      <div className="p-4 border-t bg-background">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptoms..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
