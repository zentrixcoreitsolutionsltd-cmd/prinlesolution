import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d2137] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#15304f] border border-[#d89e28] p-8 shadow-2xl">
            <span className="text-[#d89e28] text-xs font-bold uppercase tracking-widest block mb-2">
              Prinle PR Solutions
            </span>
            <h2 className="text-xl font-black mb-3">Notice: Session Reinitialization</h2>
            <p className="text-slate-300 text-xs leading-relaxed mb-6">
              The application encountered a display sync exception. Click below to reload the console.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-bold text-xs uppercase tracking-wider px-6 py-3 cursor-pointer"
            >
              Reload Platform
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
