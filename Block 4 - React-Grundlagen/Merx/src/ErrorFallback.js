export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="alert alert-danger" role="alert">
      {resetErrorBoundary && (
        <button onClick={resetErrorBoundary} className="close">
          <span aria-hidden="true">&times;</span>
        </button>
      )}

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
