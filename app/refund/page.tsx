export default function RefundPage() {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-8">Refund Policy – WarRoom Mentorship</h1>
        <div className="bg-gray-800 p-8 rounded-lg">
          <p className="text-xl mb-6 font-semibold">All sales are final.</p>
          <p className="mb-4">
            Due to the nature of digital courses, community access, and proprietary trading education, WarRoom does not provide refunds under any circumstances.
          </p>
          <p className="text-gray-300">
            By enrolling, you acknowledge and accept the no-refund policy.
          </p>
        </div>
      </div>
    </div>
  );
}
