"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import PatientFormSchema from "@/schemas/patientFormSchema";
import CustomFormField from "../customFormField";
import { Form } from "../ui/form";
import SubmitButton from "../submitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PatientService from "@/services/patient.service";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  SELECT = "select",
  PHONE_INPUT = "phone_input",
  DATE_PICKER = "datepicker",
  SKELETON = "skeleton",
}
const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof PatientFormSchema>>({
    resolver: zodResolver(PatientFormSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async ({
    username,
    email,
    phone,
  }: z.infer<typeof PatientFormSchema>) => {
    setIsLoading(true);
    try {
      const userData = { username, email, phone };

      const patient = await PatientService.addUser(userData);

      router.push(`/patients/${patient.$id}/register`);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there, ....</h1>
          <p className="text-dark-700">Get Started with Appointments.</p>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="username"
          label="Username"
          placeholder="please enter your name..."
          icon="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="johndoe@carepulse.health..."
          icon="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone Number"
          placeholder="(555) 234 567"
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
