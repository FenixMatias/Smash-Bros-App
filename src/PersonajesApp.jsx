import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const PersonajesApp = () => {

    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}