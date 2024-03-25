import Navbar from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen w-screen flex-col dark:bg-gray-900 font-inter">
      <Navbar />
    </div>
  );
}
