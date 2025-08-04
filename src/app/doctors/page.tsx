import Image from "next/image";
import { DoctorCard } from "@/components/doctor-card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { doctors, departments } from "@/lib/data";

export default function DoctorsPage() {
  return (
    <div className="bg-card">
       <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <Image
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
            alt="A diverse group of smiling medical professionals"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
            data-ai-hint="doctors team"
        />
        <div className="absolute inset-0 bg-primary/60 z-10" />
        <div className="relative z-20 p-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Our Medical Team
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Meet our team of highly qualified and compassionate healthcare professionals dedicated to your well-being.
            </p>
        </div>
      </section>
      <div className="container py-12 md:py-20">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Find the right specialist for your needs from our extensive list of experts.
          </p>
        </div>

        <div className="mb-8 p-4 bg-background rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Search by doctor's name..." />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                    <SelectItem key={dept.id} value={dept.id}>{dept.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Day</SelectItem>
                <SelectItem value="monday">Monday</SelectItem>
                <SelectItem value="tuesday">Tuesday</SelectItem>
                <SelectItem value="wednesday">Wednesday</SelectItem>
                <SelectItem value="thursday">Thursday</SelectItem>
                <SelectItem value="friday">Friday</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
