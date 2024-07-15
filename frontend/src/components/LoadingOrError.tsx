import React from 'react';

type LoadingErrorProps = {
  loading: boolean;
  error: any;
};

export const LoadingOrError: React.FC<LoadingErrorProps> = ({ loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className="has-text-danger">Data unavailable</div>;
  }
  return null;
};