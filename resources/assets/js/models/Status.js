class Status
{
    static findById(id) {
        return axios.get('/statuses' + id);
    }

    static all(then) {
        return axios.get('/statuses').then(
            ({data}) => then(data)
        );
    }
}

export default Status;