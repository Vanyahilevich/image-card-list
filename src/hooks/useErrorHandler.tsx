import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

type ErrorType = FetchBaseQueryError | SerializedError | undefined;

const useErrorHandler = (error: ErrorType): JSX.Element | null => {
  if (!error) return null;

  if ('status' in error) {
    const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
    return (
      <div>
        <div>An error has occurred:</div>
        <div>{errMsg}</div>
      </div>
    );
  } else {
    return <div>{error.message || 'An unknown error occurred'}</div>;
  }
};

export default useErrorHandler;
