import React, {Component} from 'react'
import {ExclamationIcon} from './SvgIcons'

export class ErrorBoundary extends Component {
  state = {hasError: false}

  static getDerivedStateFromError(): {hasError: boolean} {
    return {hasError: true}
  }

  componentDidCatch(): void {
    this.setState({hasError: true})
  }

  render(): React.ReactNode {
    return this.state.hasError ? (
      <section className="h-screen flex flex-col items-center justify-center">
        <ExclamationIcon classes="h-32 w-32 pb-4 stroke-current text-red-500" />
        <div className="text-2xl text-center">
          There was an error with this page.{' '}
          <button
            className="text-green-500 underline"
            onClick={() => window.location.reload()}
          >
            Click here
          </button>{' '}
          to back refresh.
        </div>
      </section>
    ) : (
      this.props.children
    )
  }
}
