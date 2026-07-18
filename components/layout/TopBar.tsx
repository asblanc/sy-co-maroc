import { Phone, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/data";

/** Thin utility bar above the main navigation. */
export function TopBar() {
  return (
    <div className="hidden bg-teal text-white lg:block">
      <div className="container-narrow flex h-10 items-center justify-end gap-8 text-sm">
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
