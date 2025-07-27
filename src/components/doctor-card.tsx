import Image from "next/image";
import Link from "next/link";
import { Stethoscope } from "lucide-react";
import type { Doctor } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex-row gap-4 items-start">
        <Image
          src={doctor.image}
          alt={`Dr. ${doctor.name}`}
          width={80}
          height={80}
          className="rounded-full border-2 border-primary/50"
          data-ai-hint="professional doctor"
        />
        <div className="flex-1">
          <CardTitle className="font-headline text-xl">{doctor.name}</CardTitle>
          <CardDescription className="text-primary">{doctor.specialty}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">{doctor.bio}</p>
        <div className="flex flex-wrap gap-2">
            <span className="font-semibold text-sm">Availability:</span>
            {doctor.availability.map(day => (
                <Badge key={day} variant="secondary">{day}</Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="accent">
          <Link href="/book-appointment">
            <Stethoscope className="mr-2 h-4 w-4" /> Book Appointment
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
