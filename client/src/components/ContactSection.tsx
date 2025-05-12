import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  // Contact form setup
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "general",
      message: "",
    },
  });
  
  // Form submission mutation
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(data: ContactFormValues) {
    mutate(data);
  }

  return (
    <section id="contact" className="section-spacing bg-[#121219] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid-background h-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact <span className="text-secondary">Us</span></h2>
          <p className="text-light-muted max-w-2xl mx-auto">Curious about how our technology could help you? We'd love to hear from you.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-[#1A1A24] p-8 rounded-xl border border-accent/20 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Tell Us About Your Project</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                <p className="text-light-muted">Your message has been sent successfully. We'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 bg-secondary/20 text-secondary rounded-md hover:bg-secondary/30 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="w-full px-4 py-2 rounded-md bg-[#121219] border border-accent/20 text-light focus:border-secondary focus:outline-none transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your.email@example.com"
                              className="w-full px-4 py-2 rounded-md bg-[#121219] border border-accent/20 text-light focus:border-secondary focus:outline-none transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            className="w-full px-4 py-2 rounded-md bg-[#121219] border border-accent/20 text-light focus:border-secondary focus:outline-none transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-2 rounded-md bg-[#121219] border border-accent/20 text-light focus:border-secondary focus:outline-none transition-colors">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="demo">Request a Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Information</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="w-full px-4 py-2 rounded-md bg-[#121219] border border-accent/20 text-light focus:border-secondary focus:outline-none transition-colors resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    disabled={isPending}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-md hover:glow transition-all duration-300"
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
          
          {/* Contact Info */}
          <div>
            <motion.div 
              className="bg-[#1A1A24] p-8 rounded-xl border border-accent/20 shadow-xl mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6">How to Reach Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Office</h4>
                    <p className="text-light-muted">123 Innovation Way<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 mt-1">
                    <Mail className="text-secondary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-light-muted">info@vigoratech.com<br />support@vigoratech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-1">
                    <Phone className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-light-muted">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Global Presence Map */}
            <motion.div 
              className="bg-[#1A1A24] p-8 rounded-xl border border-accent/20 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Our Focus Areas</h3>
              
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="Technology focus areas" 
                  className="w-full h-auto" 
                />
                <div className="absolute inset-0 bg-[#121219]/60"></div>
                
                {/* Location markers */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-secondary glow"></div>
                <div className="absolute top-1/4 left-1/2 w-3 h-3 rounded-full bg-secondary glow"></div>
                <div className="absolute top-2/3 left-3/4 w-3 h-3 rounded-full bg-secondary glow"></div>
                <div className="absolute top-1/2 left-1/5 w-3 h-3 rounded-full bg-secondary glow"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">                
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">Drones</div>
                  <div className="text-sm text-light-muted">& Robotics</div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">Logistics</div>
                  <div className="text-sm text-light-muted">& Transport</div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">Smart Cities</div>
                  <div className="text-sm text-light-muted">& Infrastructure</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
