import { Icon, type IconName } from "@/components/common/Icon";

const trustItems: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Secure Checkout",
    description: "Encrypted transactions for your peace of mind.",
    icon: "shield",
  },
  {
    title: "Verified Events",
    description: "Only trusted organizers and venues across Bali.",
    icon: "check",
  },
  {
    title: "24/7 Support",
    description: "Our concierge team is always here to help.",
    icon: "support",
  },
];

export function TrustSection() {
  return (
    <section className="theme-muted border-t border-slate-200 py-10">
      <div className="page-container grid gap-7 text-center md:grid-cols-3">
        {trustItems.map((item) => (
          <div className="flex flex-col items-center" key={item.title}>
            <Icon className="mb-2.5 size-8 text-brand" name={item.icon} />
            <h2 className="text-sm font-bold uppercase tracking-wider">
              {item.title}
            </h2>
            <p className="mt-1 text-xs text-copy">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
