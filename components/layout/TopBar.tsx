import { Phone, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/data";

/** Thin utility bar above the main navigation. */
export function TopBar() {
  return (
    <div className="hidden bg-teal text-white lg:block">
      <div className="flex h-10 w-full items-center justify-start gap-8 px-4 text-sm sm:px-6 lg:px-8">
        <a
          href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
          className="flex items-center gap-2 transition-colors hover:text-orange"
        >
          <Phone className="h-4 w-4" strokeWidth={2.2} />
          <span className="font-body">{contactInfo.phone}</span>
        </a>
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4" strokeWidth={2.2} />
          <span className="font-body">
            {contactInfo.address} {contactInfo.city}
          </span>
        </span>
      </div>
    </div>
  );
}
