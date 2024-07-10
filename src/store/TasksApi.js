import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TasksApi = createApi({
  reducerPath: 'TasksApi',
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('accept', 'text/plain');
      return headers;
    },
    baseUrl: 'https://1hlwmq3p9k.execute-api.eu-central-1.amazonaws.com/dev',
  }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/tasks',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tasks', id })),
              { type: 'Tasks', id: 'LIST' },
            ]
          : [{ type: 'Tasks', id: 'LIST' }],
    }),
    getTaskById: builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),

    createTasks: builder.mutation({
      query: ({ ...body }) => ({
        url: `tasks`,
        method: 'POST',
        body: { ...body },
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    updateTasks: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: { ...body },
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),

    deleteTasks: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTasksMutation,
  useUpdateTasksMutation,
  useDeleteTasksMutation,
} = TasksApi;
