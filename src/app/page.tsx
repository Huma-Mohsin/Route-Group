export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center">Route Groups</h1>
      <h4 className="text-3xl text-center text-gray-700">
        Route groups allow us to manage different routes of the same entity under a single name. 
        They help structure code and keep routes organized in a manageable way.
      </h4>
    </div>
  );
}
