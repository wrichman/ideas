const fetchUserData = async (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ userId: 1, name: 'John Doe' });
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
};

const fetchPosts = async (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([{ postId: 1, content: 'Hello World' }, { postId: 2, content: 'Another post' }]);
            } else {
                reject(new Error('Posts not found for this user'));
            }
        }, 1000);
    });
};

const fetchComments = async (postId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (postId === 1) {
                resolve([{ commentId: 1, text: 'Nice post!' }, { commentId: 2, text: 'Thanks for sharing' }]);
            } else {
                reject(new Error('Comments not found for this post'));
            }
        }, 1000);
    });
};

const fetchData = async (userId) => {
    try {
        const userData = await fetchUserData(userId);
        console.log('User Data:', userData);

        const [posts, comments] = await Promise.all([
            fetchPosts(userId),
            fetchComments(1) 
        ]);

        console.log('Posts:', posts);
        console.log('Comments:', comments);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchData(1); // Valid userId, should fetch all data successfully
fetchData(2); // Invalid userId, should trigger error handling
