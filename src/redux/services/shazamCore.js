import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '5e69b9f1admsh0da2fd6d7763334p1ddcc8jsn5798a58a2e7c');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
        })
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi