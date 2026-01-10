const SuccessPopup = () => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-2xl text-center w-[90%] max-w-sm">
        <h2 className="text-2xl font-bold text-green-500">🎉 Order Placed!</h2>
        <p className="mt-2 text-foreground">Thank you for your order</p>
        <p className="text-sm text-muted-foreground mt-1">Redirecting...</p>
      </div>
    </div>
  );
};

export default SuccessPopup;
