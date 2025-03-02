import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Shoes®Shop</h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Our Story</h2>
          <p className="text-lg">
            Founded in 2020, Shoes®Shop started with a simple mission: to provide high-quality, 
            stylish footwear at affordable prices. What began as a small boutique in Miami has 
            grown into an international brand loved by customers worldwide.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
          <p className="text-lg">
            At Shoes®Shop, we believe everyone deserves to walk in comfort and style. 
            We&apos;re committed to crafting shoes that not only look good but feel good too. 
            Our designs blend contemporary trends with timeless elegance, ensuring you 
            always put your best foot forward.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Quality Commitment</h2>
          <p className="text-lg">
            Every pair of shoes in our collection is made with premium materials and 
            expert craftsmanship. We work with skilled artisans who pay attention to 
            every detail, from the initial design to the final stitch. This dedication 
            to quality ensures our products are durable, comfortable, and stylish.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Visit Us</h2>
          <p className="text-lg">
            We have physical stores in Miami and Alexandria. Come visit us to explore 
            our full collection and get personalized fitting assistance from our 
            knowledgeable staff.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-zinc-200 p-4 rounded-md">
              <h3 className="font-medium">Miami Store</h3>
              <p>123 Ocean Drive, Miami, FL</p>
              <p>Open: Mon-Sat, 10am-9pm</p>
            </div>
            <div className="border border-zinc-200 p-4 rounded-md">
              <h3 className="font-medium">Alexandria Store</h3>
              <p>45 Mediterranean Ave, Alexandria, Egypt</p>
              <p>Open: Mon-Sat, 9am-8pm</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}