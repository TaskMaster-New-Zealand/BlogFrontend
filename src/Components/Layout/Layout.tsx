import React, {ReactNode} from 'react';
import { Header } from './header'


interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
<div className="layout">
      <Header />
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      <footer />
    </div>
  );
}

export { Layout }