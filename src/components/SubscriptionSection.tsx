import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const SubscriptionSection = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Redirect to Sendsmaily landing page with the email
    const sendmailyLink = `https://synchub.sendsmaily.net/landing-pages/9cbd5d68-4e1e-457c-9418-df4167d53f13/html/?email=${encodeURIComponent(data.email)}`;
    window.location.href = sendmailyLink;
  };

  return (
    <section id="subscription" className="py-24 bg-synchub-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-synchub-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-synchub-highlight/10 rounded-full blur-3xl translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-6">Stay up to date</h2>
          <p className="text-lg text-synchub-text/80 mb-10">
            We're looking for labels, publishers, artists, ad agencies, game developers, film producers and content creators to be part of the beta test. If you're interested in that or simply in staying up to date on the latest info, sign up below.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="h-12" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="bg-synchub-primary hover:bg-synchub-primary/90 h-12 text-white group"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
