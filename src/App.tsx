import React from 'react';
import './App.css';
import { AuthenticatedApp } from './authenticated-app';
import { useAuth } from './context/auth-context';
import { LoginScreen } from './screens/login';
import { UnauthenticatedApp } from './unauthenticated-app';
// import { TsReactTest } from './try-use-array';
// import { ProjectListScreen } from './screens/project-list';



function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {/* <TsReactTest /> */}
      {/* <ProjectListScreen /> */}
      {/* <LoginScreen /> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
