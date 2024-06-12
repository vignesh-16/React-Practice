const useDelete = () => {
    const deleteData = async (url) => {
        try {
            await fetch(url,{
                method: 'DELETE'
            })
        } catch (e) {
            console.error(e)
            throw e;
        }
    }
    return deleteData;
}
 
export default useDelete;