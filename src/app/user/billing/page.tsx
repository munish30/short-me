export default function BillingInfoPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 m-2 sm:p-15 sm:m-4 sm:mt-[10%] rounded mt-15 bg-white text-black text-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold">Billing Information</h1>
        <p className="text-lg sm:text-xl text-gray-700">
          All our services are <span className="font-semibold text-green-600">completely free</span> at the moment.
          No credit card required, no hidden charges.
        </p>
        <p className="text-md text-gray-500">
          We’ll notify you in advance before introducing any pricing plans.
        </p>
       
      </div>
    </div>
  );
}
