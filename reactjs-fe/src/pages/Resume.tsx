
export default function Resume() {
  return (
    <div className="h-screen flex justify-center items-center px-64">
      <iframe
        src="/cv.pdf"
        className="w-full h-[90vh] rounded"
        title="CV"
      />
    </div>
  );
}