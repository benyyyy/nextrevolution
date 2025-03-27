export default async function Docs({ params }) {
  const { slug } = await params || {}; // Extract slug from params (or undefined for the base path)

  if (!slug) {
    // Base path `/docs`
    return (
      <div>
        <h1>Welcome to the Docs Home Page</h1>
        <p>Select a topic to view documentation.</p>
      </div>
    );
  }

  if (slug.length === 1) {
    // Path `/docs/feature`
    return (
      <div>
        <h1>Viewing documentation for: {slug[0]}</h1>
      </div>
    );
  }

  if (slug.length === 2) {
    // Path `/docs/feature/concept`
    return (
      <div>
        <h1>
          Viewing documentation for feature: {slug[0]} and concept: {slug[1]}
        </h1>
      </div>
    );
  }

  // Fallback for deeper paths
  return (
    <div>
      <h1>Documentation not found</h1>
    </div>
  );
}
