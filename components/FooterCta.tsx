import Link from "next/link";

export default function FooterCta() {

return (

<section className="border-b border-white/10 bg-[#1D0617] px-4 py-8 sm:px-6 lg:px-12">

  <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

     {/* Content */}

         <div className="max-w-xl">

               <p className="text-sm leading-5 text-white">

                       Ready to be a part of something extraordinary?

                             </p>



                                   <p className="mt-1 w-81.25 md:w-full text-[20px] font-semibold leading-7 text-white sm:text-2xl sm:leading-8">

                                           Let&apos;s work together to create a difference

                                                 </p>

                                                     </div>



                                                         {/* CTA */}

                                                             <Link

                                                                   href="#"

                                                                         className="inline-flex w-fit items-center justify-center rounded-sm bg-[#571244] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6b1854] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D0617]"

                                                                             >

                                                                                   Get In Touch

                                                                                       </Link>

                                                                                         </div>

                                                                                         </section>

                                                                                         );

                                                                                         }