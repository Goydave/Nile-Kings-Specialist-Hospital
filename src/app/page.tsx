import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Stethoscope, ShieldCheck, User, Hospital } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { departments, doctors, testimonials, blogPosts } from "@/lib/data";
import { Doctor } from "@/lib/types";

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="overflow-hidden text-center h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
      <Image
        src={doctor.image}
        alt={`Dr. ${doctor.name}`}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
        data-ai-hint="professional doctor"
      />
      <CardHeader>
        <CardTitle className="font-headline text-xl">{doctor.name}</CardTitle>
        <p className="text-primary">{doctor.specialty}</p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-muted-foreground text-sm mb-4">{doctor.bio.substring(0, 100)}...</p>
        <Button asChild variant="secondary">
          <Link href="/doctors">View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const whyChooseUs = [
    {
      icon: Stethoscope,
      title: "Advanced Technology",
      description: "We use the latest medical technology for accurate diagnosis and effective treatment."
    },
    {
      icon: User,
      title: "Experienced Doctors",
      description: "Our team consists of highly skilled and experienced medical professionals."
    },
    {
      icon: ShieldCheck,
      title: "Patient-Centered Care",
      description: "Your health and comfort are our top priorities. We provide personalized care for every patient."
    },
    {
        icon: Hospital,
        title: "Modern Facilities",
        description: "Our hospital is equipped with state-of-the-art facilities to ensure the best possible care."
    }
  ];
  
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsJTIwZXF1aXBtZW50fGVufDB8fDB8fHww",
      alt: "Modern hospital reception area",
      hint: "reception desk",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop",
      alt: "Bright and clean patient room",
      hint: "hospital room",
    },
    {
      src: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsJTIwZXF1aXBtZW50fGVufDB8fDB8fHww",
      alt: "Scientist working in a modern laboratory",
      hint: "laboratory",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      alt: "Doctor consulting with a patient",
      hint: "patient care",
      colSpan: "col-span-2",
      rowSpan: "row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
      alt: "State-of-the-art surgery room",
      hint: "surgery room",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1630531210873-2dcfc5a541ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWR2YW5jZWQlMjBtZWRpY2FsJTIwbW9uaXRvcmluZyUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Advanced medical monitoring equipment",
      hint: "medical equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1629410484397-a4dcd74088a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBoYWxsd2F5fGVufDB8fDB8fHww",
      alt: "Well-lit hospital hallway",
      hint: "hospital hallway",
    },
];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop"
          alt="Modern hospital interior"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="modern hospital"
        />
        <div className="absolute inset-0 bg-primary/50 z-10"></div>
        <div className="relative z-20 p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Nile King’s Special Hospital
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the future of healthcare with our patient-centered digital platform, combining premium medical services with advanced technology.
          </p>
          <Button asChild size="lg" variant="accent">
            <Link href="/book-appointment">Book an Appointment <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose NileCare?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Committed to providing the best healthcare services for you and your family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Departments</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              World-class care across a range of specialties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <Card key={dept.id} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <dept.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-16 lg:py-24 bg-background">
         <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Experts</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our team of dedicated and experienced professionals is here to provide you with the best care.
            </p>
          </div>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {doctors.slice(0, 6).map((doctor, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <DoctorCard doctor={doctor} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/doctors">View All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Our Gallery Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Gallery</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    A glimpse into our state-of-the-art facilities and patient-centric environment.
                </p>
            </div>
             <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className={`${image.colSpan || 'col-span-1'} ${image.rowSpan || 'row-span-1'}`}>
                      <Image
                          data-ai-hint={image.hint}
                          className="h-full w-full object-cover rounded-lg hover:opacity-90 transition-opacity"
                          src={image.src}
                          alt={image.alt}
                          width={500}
                          height={500}
                      />
                  </div>
              ))}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Patients Say</h2>
          </div>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <Card className="bg-card">
                      <CardContent className="p-8 text-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full mx-auto mb-4"
                          data-ai-hint="person portrait"
                        />
                        <blockquote className="text-lg italic text-foreground mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="font-bold font-headline">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Health Blog Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Health & Wellness Blog</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Stay informed with the latest health tips and news from our experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.imageHint}
                />
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0">
                    <Link href="#">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready for a Healthier Future?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Take the first step towards better health. Our team is ready to assist you.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="accent">
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/ai-triage">Ask our AI Assistant</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
