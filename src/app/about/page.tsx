
import Image from "next/image";
import { Award, Users, HeartHandshake, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doctors } from "@/lib/data";

export default function AboutPage() {
  const coreValues = [
    {
      icon: HeartHandshake,
      title: "Compassion",
      description: "We provide care with empathy, respect, and kindness, treating every patient like family.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to the highest standards of medical practice, innovation, and patient safety.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together as a team, with our patients and their families, to achieve the best health outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace advanced technology and research to continuously improve healthcare.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
          alt="A diverse group of smiling medical professionals"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="hospital staff group"
        />
        <div className="absolute inset-0 bg-primary/60 z-10"></div>
        <div className="relative z-20 p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            About NileCare
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your trusted partner in health, pioneering patient-centered care through technology and compassion.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Nile King’s Special Hospital was founded with a vision to create a healthcare experience that revolves around the patient. We recognized the need for a more integrated, seamless, and compassionate approach to medicine. By combining a world-class medical team with the latest advancements in digital health technology, we built NileCare—a platform where premium care is accessible, personal, and empowering.
              </p>
              <p className="text-muted-foreground">
                From our humble beginnings, we have grown into a leading healthcare institution in the region, known for our commitment to excellence and our unwavering focus on the well-being of our community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Image
                    src="https://images.unsplash.com/photo-1581093583449-c15e21952bdd?q=80&w=2070&auto=format&fit=crop"
                    alt="Scientist in a lab"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-xl w-full h-auto"
                    data-ai-hint="scientist lab"
                />
                 <Image
                    src="https://images.unsplash.com/photo-1562912384-3454b732480a?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern hospital building exterior"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-xl w-full h-auto"
                    data-ai-hint="modern hospital exterior"
                  />
                <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                    alt="Doctor and patient interaction"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-xl w-full h-auto"
                    data-ai-hint="doctor patient"
                />
                <Image
                    src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern hospital room"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-xl w-full h-auto"
                    data-ai-hint="hospital room"
                />
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Core Values</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-accent">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-accent" />
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

      {/* Leadership Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Leadership</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              A dedicated team of visionaries guiding our mission to revolutionize healthcare.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {doctors.slice(0, 5).map((leader) => (
              <div key={leader.id}>
                <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/50">
                  <AvatarImage src={leader.image} alt={leader.name} />
                  <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-headline text-lg font-semibold">{leader.name}</h3>
                <p className="text-primary">{leader.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
