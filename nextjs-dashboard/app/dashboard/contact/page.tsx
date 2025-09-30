import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';


function ContactSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-40 bg-gray-200 rounded-xl" />
      <div className="h-6 bg-gray-200 w-1/2 rounded" />
      <div className="h-6 bg-gray-200 w-1/3 rounded" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Contact
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        <Suspense fallback={<ContactSkeleton />}>
          <div className="shadow-md rounded-2xl bg-white p-4">
            <h2 className="mb-2 font-semibold">Lokacija</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.129310872184!2d14.505751215833095!3d46.05694617911254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476532b3e5a3d6db%3A0x400f81c8236a4b0!2sLjubljana!5e0!3m2!1ssl!2ssi!4v1695999999999"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded-xl border"
            ></iframe>
          </div>
        </Suspense>

       
        <div className="shadow-md rounded-2xl bg-white p-4">
          <h2 className="mb-2 font-semibold">Email</h2>
          <a href="mailto:info@podjetje.si" className="text-blue-600 hover:underline">
            info@podjetje.si
          </a>
        </div>

       
        <div className="shadow-md rounded-2xl bg-white p-4">
          <h2 className="mb-2 font-semibold">Telefon</h2>
          <a href="tel:+38641123456" className="text-blue-600 hover:underline">
            +386 41 123 456
          </a>
        </div>
      </div>
    </main>
  );
}