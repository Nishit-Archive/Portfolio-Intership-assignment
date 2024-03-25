import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Image from "next/image";

export default function Services() {
  return (
    <Section>
      <Heading title="Services" text="MY Services" />

      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow"
                >
                  <Image
                    src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=996&t=st=1711364528~exp=1711365128~hmac=e8b0aa9b1548b056660728a4a681eebd627a50fae0152610fa99761d9212fb4f"
                    alt=""
                    width={2940}
                    height={1960}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    UI UX Design
                  </h3>
                </a>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 mb-4"
                >
                  <Image
                    src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?t=st=1711364623~exp=1711368223~hmac=a6de8ea28e8b785767158d0b7637a278433836db81b6aeb26379111fd25b2384&w=996"
                    alt=""
                    width={2940}
                    height={1960}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Web and App
                  </h3>
                </a>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href=""
                    className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40"
                  >
                    <Image
                      src="https://img.freepik.com/free-photo/businessman-touching-virtual-screen_1232-737.jpg?t=st=1711364683~exp=1711368283~hmac=999ac5927e629418e18bbd9f80b355c45349ee01901553a9b6c15279ba1da663&w=1060"
                      alt=""
                      width={2940}
                      height={1960}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Global Marketing
                    </h3>
                  </a>
                  <a
                    href=""
                    className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40"
                  >
                    <Image
                      src={`https://img.freepik.com/premium-vector/branding-team-concept-with-people-scene-flat-cartoon-design-man-generates-new-ideas-creates-business-brand-audience-targeting-from-mobile-app-vector-illustration-visual-story-web_9209-9252.jpg?w=996`}
                      alt=""
                      width={2940}
                      height={1960}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      Brand consultant
                    </h3>
                  </a>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow"
                >
                  <Image
                    src="https://img.freepik.com/premium-vector/isometric-chatbot-technology_71983-822.jpg?w=740"
                    alt=""
                    width={2940}
                    height={1960}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    AI Apps
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
}
