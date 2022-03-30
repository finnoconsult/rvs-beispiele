export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">Error</h4>

      {error.message && <p>{error.message}</p>}

      {resetErrorBoundary && (
        <button onClick={resetErrorBoundary} type="button" className="btn btn-danger">
          Reset
        </button>
      )}
    </div>
  );
}
