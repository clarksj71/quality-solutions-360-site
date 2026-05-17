import Image from "next/image";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">

            <div className="relative inline-flex">
              <svg className="absolute -left-6 -top-2 -z-10" width={40} height={49} viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z" fill="#D1D5DB" />
              </svg>
              <Image className="rounded-full" src="/images/avatar-01.jpg" width={48} height={48} alt="John Benninghoff" />
            </div>

            <p className="text-2xl font-bold text-gray-900">
              "Stephen was the first person we hired when we started building our application security program — one of the best decisions we made. His team's work was instrumental in reducing pen-test findings by 50%. I would count myself fortunate to work with Stephen again."
            </p>

            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">John Benninghoff</span>
              <span className="text-gray-400"> / </span>
              <a href="https://www.security-differently.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Security Differently</a>
            </div>

            <div className="pt-8 pb-4">
              <hr className="border-gray-200" />
            </div>

            <div className="relative inline-flex">
              <svg className="absolute -left-6 -top-2 -z-10" width={40} height={49} viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z" fill="#D1D5DB" />
              </svg>
              <Image className="rounded-full" src="/images/avatar-02.jpg" width={48} height={48} alt="Robert Grupe" />
            </div>

            <p className="text-2xl font-bold text-gray-900">
              "Stephen is an excellent collaborative technical partner and team manager whose insights and dedication enabled full enterprise deployment along with CI/CD pipeline integrations and management reporting."
            </p>

            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Robert Grupe</span>
              <span className="text-gray-400"> / </span>
              <a href="https://www.evernorth.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Evernorth</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
