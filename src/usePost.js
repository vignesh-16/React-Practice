const usePost = (url) => {

    const postData = async (data) => {

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            throw error;
        }
    };

    return postData;
};

export default usePost;