// app/components/home/FeaturesSection.tsx
export default function FeaturesSection() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Luxury Rooms",
          desc: "Spacious, modern rooms designed for comfort and relaxation.",
        },
        {
          title: "Fine Dining",
          desc: "Enjoy exquisite meals prepared by our world-class chefs.",
        },
        {
          title: "Scenic Views",
          desc: "Relax with breathtaking views of nature and landscapes.",
        },
      ].map(({ title, desc }) => (
        <div
          key={title}
          className="p-6 bg-slate-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-orange-400 mb-2">
            {title}
          </h2>
          <p className="text-slate-300">{desc}</p>
        </div>
      ))}
    </section>
  );
}
