import certificates from "@/data/certificates.json";
import Link from "next/link";
export default function Certificates() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {certificates.map((certificate, i) => (
          <div key={certificate.name} className="space-y-1">
            <div className="flex justify-between">
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
                {certificate.institution_name}
              </Link>
            </div>
            <p>{certificate.description}</p>
            <div className="flex justify-between">
              <p>{certificate.tags.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
