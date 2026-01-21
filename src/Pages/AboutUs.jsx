 function About() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-15">
      <div className="mx-auto max-w-4xl bg-card border border-border rounded-2xl p-8 shadow-(--shadow)">
        <h1 className="text-4xl font-semibold mb-6">
          About Us
        </h1>

        <p className="text-muted leading-relaxed mb-6">
          Welcome to <span className="font-medium text-foreground">🛍️MyShop</span>.
          We are dedicated to providing quality products and a smooth online
          shopping experience. Our focus is on trust, transparency, and customer
          satisfaction.
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          Our Mission
        </h2>
        <p className="text-muted leading-relaxed mb-6">
          Our mission is to make online shopping simple, secure, and reliable.
          We aim to offer carefully selected products, fair pricing, and
          responsive customer support.
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          What We Offer
        </h2>
        <ul className="list-disc pl-6 text-muted space-y-2 mb-6">
          <li>High-quality products</li>
          <li>Secure payment options</li>
          <li>Fast and reliable delivery</li>
          <li>Clear return and refund policies</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          Why Choose Us
        </h2>
        <p className="text-muted leading-relaxed mb-6">
          We prioritize customer trust and satisfaction by maintaining clear
          communication, protecting user data, and continuously improving our
          services.
        </p>

        <div className="mt-10 rounded-xl bg-inner-card p-6 border border-border">
          <h3 className="text-lg font-semibold mb-2">
            Contact Us
          </h3>
          <p className="text-muted leading-relaxed">
            Email: MyShop@email.com <br />
            Phone: +91-987654210 <br />
            Address: Jaipur, Rajashtan
          </p>
        </div>
      </div>
    </div>
  );
}
export default About ;