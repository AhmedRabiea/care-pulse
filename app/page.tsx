import PatientForm from "@/components/forms/patientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen text-white">
      <section className="remove-scrollbar my-auto container">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="carepulse-logo"
            width={1000}
            height={1000}
            className="w-fit mb-12 h-10"
          />
          <PatientForm />
          <div className="mt-20 text-14-regular flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 carepulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
