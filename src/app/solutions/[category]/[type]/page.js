export default function Page({ params }) {
  const { category, type } = params;
  const pageName = type
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">
        🚧 {pageName} - Under Construction 🚧
      </h1>
    </div>
  );
}
