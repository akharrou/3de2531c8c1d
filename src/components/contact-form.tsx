"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type FormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional().or(z.literal("")).refine(val => !val || val.length === 0 || /^\+?[0-9\s-()]{10,}$/.test(val), {
    message: "Invalid phone number format. Must be at least 10 digits if provided."
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full rounded-xl py-3 text-base">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<FormState | undefined, FormData>(submitContactForm, undefined);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      reset(); // Reset form fields on successful submission
    } else if (state?.message && !state.success) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, reset]);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-semibold">Full Name</Label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1 rounded-lg"
          aria-invalid={errors.name || state?.errors?.name ? "true" : "false"}
        />
        {(errors.name || state?.errors?.name) && (
          <p className="mt-1 text-sm text-destructive">
            {errors.name?.message || state?.errors?.name?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="font-semibold">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1 rounded-lg"
          aria-invalid={errors.email || state?.errors?.email ? "true" : "false"}
        />
        {(errors.email || state?.errors?.email) && (
          <p className="mt-1 text-sm text-destructive">
            {errors.email?.message || state?.errors?.email?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="font-semibold">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          className="mt-1 rounded-lg"
          aria-invalid={errors.phone || state?.errors?.phone ? "true" : "false"}
        />
        {(errors.phone || state?.errors?.phone) && (
          <p className="mt-1 text-sm text-destructive">
            {errors.phone?.message || state?.errors?.phone?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="font-semibold">Message</Label>
        <Textarea
          id="message"
          rows={5}
          {...register('message')}
          className="mt-1 rounded-lg min-h-[120px]"
          aria-invalid={errors.message || state?.errors?.message ? "true" : "false"}
        />
        {(errors.message || state?.errors?.message) && (
          <p className="mt-1 text-sm text-destructive">
            {errors.message?.message || state?.errors?.message?.[0]}
          </p>
        )}
      </div>
      {state?.errors?._form && <p className="text-sm text-destructive">{state.errors._form[0]}</p>}
      <SubmitButton />
    </form>
  );
}
