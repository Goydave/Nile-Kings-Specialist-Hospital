import { Mail, Phone, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: '123 Nile Avenue, Cairo, Egypt',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+211 915 656 562',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'contact@nilecare.com',
    },
     {
      icon: Building,
      title: 'Working Hours',
      content: '24/7 Emergency | Sun-Thu: 8am-9pm',
    },
  ];

  return (
    <div className="bg-background">
      <div className="container py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We're here to help. Reach out to us with any questions or to schedule a visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map and Contact Info */}
          <div>
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.291583274263!2d31.59738281512462!3d4.838790496925925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712810db1fdc8e1%3A0xdbe2b1d7d4e127e4!2sNile%20Kings%20Specialist%20Hospital!5e0!3m2!1sen!2sus!4v1628785013148!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="flex items-center">
                     <div className="p-3 bg-primary/10 rounded-full">
                       <item.icon className="h-6 w-6 text-primary" />
                     </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold font-headline mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message..." rows={6} />
                  <Button type="submit" size="lg" className="w-full" variant="accent">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
