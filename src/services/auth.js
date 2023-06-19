const signIn = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: '123',
                user: {
                    name: 'John Doe',
                    email: 'john.doe@email.com',
                },
            });
        }, 2000);
    });
};

export { signIn };