const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        <p className="text-gray-600 text-sm">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
