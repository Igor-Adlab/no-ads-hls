import axios from 'axios';
import { useQuery } from 'react-query';

export function useLoadFile(uri: string, options: any = {}) {
    return useQuery(['load-file', uri], () => axios.get(uri)
        .then(({ data }) => data), options);
};
