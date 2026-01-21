function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-card p-8 shadow-(--shadow) border border-border">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <p className="text-muted mb-6">Last Updated: DD/MM/YYYY</p>

        <section className="space-y-6 text-muted leading-relaxed">
          <p>
            Welcome to{" "}
            <span className="font-medium text-foreground">
              [Your Website Name]
            </span>
            . We respect your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, and safeguard your data when you use our website.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, and phone number</li>
              <li>Billing and shipping address</li>
              <li>Order and transaction details</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Payment Information
            </h2>
            <p>
              Payments are processed securely through third-party payment
              gateways. We do not store or have access to your card, UPI, or
              banking details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To process and deliver your orders</li>
              <li>To provide customer support</li>
              <li>To improve our services and website experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              data. However, no online transmission is completely secure.
            </p>
          </div>
        </section>

        <hr className="my-10 border-border" />

        <h1 className="text-3xl font-semibold mb-6">
          Shipping, Return & Refund Policy
        </h1>

        <section className="space-y-6 text-muted leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Shipping Policy
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Orders are processed within 1–3 business days</li>
              <li>Delivery takes 5–7 working days depending on location</li>
              <li>Tracking details are shared after shipment</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Return Policy
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Returns accepted within 7 days of delivery</li>
              <li>Product must be unused and in original packaging</li>
              <li>Invoice is mandatory for returns</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Refund Policy
            </h2>
            <p>
              Approved refunds are processed within 5–7 business days to the
              original payment method.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Cancellation Policy
            </h2>
            <p>
              Orders can be cancelled only before shipment. Once shipped,
              cancellation is not allowed.
            </p>
          </div>
        </section>

        <div className="mt-10 rounded-xl bg-inner-card p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Contact Us
          </h2>
          <p className="text-muted">
            Email: your@email.com <br />
            Phone: +91-XXXXXXXXXX <br />
            Address: Your Business Address
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
