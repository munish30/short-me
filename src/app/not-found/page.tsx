export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-15 sm:mt-[10%] p-10 bg-white text-black rounded-sm text-center">

      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
}