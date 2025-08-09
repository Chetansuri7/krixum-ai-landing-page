import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import React from "react";

export function CtaSection() {
  return (
    <section className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-4 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FB923C] via-[#F472B6] to-[#E879F9] p-6 sm:p-8">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 cta-bg-pattern opacity-30"
            aria-hidden="true"
          ></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to unify your AI experience?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              Join thousands of users who have already discovered the power of
              having all AI models in one place. Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#FB923C] hover:bg-white/90 font-semibold px-8 py-3 text-lg h-12 rounded-xl"
              >
                <Link to="/auth/signup">Start Free Trial</Link>
              </Button>
            </div>

            <div className="mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
