import { AppointmentForm } from "@/components/appointment-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookAppointmentPage() {
  return (
    <div className="bg-background">
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-headline">Book an Appointment</CardTitle>
              <CardDescription className="max-w-xl mx-auto">
                Fill out the form below to request an appointment. Our staff will contact you to confirm the date and time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
