import { useState } from "react";
import { Plus, Minus } from "iconoir-react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I reserve a hotel room?",
    answer:
      "Browse available rooms, choose your dates, complete the booking form, and confirm your reservation in minutes.",
  },
  {
    question: "Can I cancel my reservation?",
    answer:
      "Yes. Most bookings can be cancelled before the hotel's cancellation deadline.",
  },
  {
    question: "When do I pay for my booking?",
    answer:
      "Some hotels require payment now, while others allow payment during check-in.",
  },
  {
    question: "Can I modify my reservation?",
    answer:
      "Yes, subject to room availability and the hotel's booking policy.",
  },
  {
    question: "Is breakfast included?",
    answer:
      "Breakfast depends on the selected room package and is shown before checkout.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Our support team is available every day to assist with reservations and payments.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked <br /> Questions
          </h2>

          <p className="mt-3 text-txt-sm">
            Everything you need to know before booking your perfect stay.
          </p>
        </div>

        {/* FAQ */}

        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl border-2 border-bg-md bg-bg-md/10  overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="w-full hover:scale-100 bg-transparent border-none rounded-none px-6 py-4 flex items-center justify-between"
              >

                <h5>{faq.question}</h5>

                <div className="size-8 rounded-xl bg-acc text-acc-txt flex items-center justify-center">

                  {open === index ? (
                    <ChevronUp className="icon-sm" />
                  ) : (
                    <ChevronDown className="icon-sm" />
                  )}

                </div>

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >

                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-6">
                    {faq.answer}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}