export default function Page({ params }) {
  const { slug } = params;
  const pageName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">
        🚧 {pageName} Page - Under Construction 🚧
      </h1>
    </div>
  );
}
