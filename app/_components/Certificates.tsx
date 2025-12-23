import certificates from "@/data/certificates.json";
import { Tags } from "lucide-react";
import Link from "next/link";
export default function Certificates() {
  return (
    <div className="space-y-8">
      {certificates.map((certificate, i) => (
        <div key={certificate.name} className="space-y-1">
          <div className="flex flex-col md:flex-row sm:justify-between">
            <Link
              className="font-semibold hover:underline"
              href={certificate.certificate_link}
              target="_blank"
            >
              {i + 1 + ". " + certificate.name}
            </Link>
            <Link
              href={certificate.certificate_link}
              className="hover:underline"
              target="_blank"
            >
              Issued by: {certificate.institution_name}
            </Link>
          </div>

          <p className="mb-3">{certificate.description}</p>

          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <Tags size={16} /> {certificate.tags.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
