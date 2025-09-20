const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4 mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-xs sm:text-sm md:text-lg">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
