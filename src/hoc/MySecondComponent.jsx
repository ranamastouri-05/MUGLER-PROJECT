
export const withLoading =(WrappedComponent) => {
    return function EnhancedComponent({isLoading,...props}) {
        if (isLoading){
            return <h2> Wait a moment ..</h2>
        }
        return <WrappedComponent {...props}/>;
    };
};