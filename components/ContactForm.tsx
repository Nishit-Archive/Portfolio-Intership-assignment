import React, { useEffect, useState } from "react";
import Section from "./Shared/Section";
import Heading from "./Shared/Heading";
import { Contact, Home, Mail } from "lucide-react";
import { SectionHeader } from "./Shared/SectionHeader";

interface User {
  about: {
    phoneNumber: string;
  };
}

interface Data {
  user: User;
}

export default function ContactForm() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    }

    fetchSkills();
  }, []);

  return (
    <Section>
      <div className="container my-12 mx-auto px-2 md:px-4">
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <Heading title="Contact Me" text="LET’S Talk About Ideas" />
            </div>
          </div>

          <div className="flex flex-wrap">
            <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Name"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Message
                </label>
                <textarea
                  className="px-2 py-2 border rounded-[5px] w-full outline-none"
                  name=""
                  id=""
                ></textarea>
              </div>

              <button
                type="button"
                className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
              >
                Send
              </button>
            </form>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <Home size={24} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Addrees</p>
                      <p className="text-neutral-500 ">
                        {data?.user?.about?.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <Mail size={24} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Email</p>
                      <p className="text-neutral-500 ">portfolio3@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Admin</p>
                      <p className="text-neutral-500 ">Available Right Now</p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <Contact size={24} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Phone</p>
                      <p className="text-neutral-500">
                        {data?.user?.about?.phoneNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
}
