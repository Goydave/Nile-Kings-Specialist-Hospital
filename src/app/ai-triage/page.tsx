import { AiTriageClient } from "@/components/ai-triage-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AiTriagePage() {
  return (
    <div className="bg-background">
      <div className="container py-8 md:py-12 flex-grow flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">AI Triage Assistant</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Get instant guidance on which department to visit based on your symptoms.
          </p>
        </div>
        <div className="flex-grow flex flex-col">
            <Card className="flex-grow flex flex-col shadow-lg overflow-hidden">
                <AiTriageClient />
            </Card>
        </div>
      </div>
    </div>
  );
}
