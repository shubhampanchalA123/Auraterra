import Image from "next/image";

export default function AllProducts({ product, reverse }) {
  return (
    <section className="py-20 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* IMAGE */}
        <div
          className={`flex justify-center ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative w-full max-w-[420px] aspect-square bg-gray-50 rounded-xl shadow-sm p-6">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {product.name}
          </h2>

          {/* SECTION 1 */}
          <Section title="1. What the product is">
            {product.description.map((item, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {item}
              </p>
            ))}
          </Section>

          {/* SECTION 2 */}
          <Section title="2. Obligation (Is it mandatory?)">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.obligation.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* SECTION 3 */}
          <Section title="3. Uses (Why it’s used)">
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
              {product.uses.map((item, i) => {
                const [first, ...rest] = item.split(" ");
                return (
                  <li key={i} className="flex gap-2">
                    <span className="font-semibold text-gray-900">
                      {first}
                    </span>
                    <span>{rest.join(" ")}</span>
                  </li>
                );
              })}
            </ul>
          </Section>

          {/* SECTION 4 */}
          <Section title="4. Level where the product is used">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.usageLevel.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </section>
  );
}

/* ---------- SMALL HELPER COMPONENT ---------- */

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
