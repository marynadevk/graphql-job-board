# Jobs board

## Description

The Job Board App is designed to simplify job searching and recruitment processes. It provides a set of features for fetching and managing job listings and handling user authentication, this app aims to provide a user-friendly interface for job seekers and recruiters to interact with job listings and manage user sessions efficiently.

## Main Technologies Used
- **GraphQL**
- **Apollo Server**
- **Express**
- **Apollo Client**
- **React**


## Getting Started

To set up the project, follow these steps:

1. **Clone the repository:**

```sh
git clone <https://github.com/marynadevk/graphql-job-board.git>
cd blogapp
```
2. **Install dependencies for both frontend and backend:**
```sh
npm ci
```
3. **Create a .env files based on the provided .env.example**

4. **Build the frontend app and backend server**
```sh
npm start:dev
npm run dev
```


1. Queries
  - posts: Fetches a list of all blog posts.
  - post(id: ID!): Fetches a single blog post by its ID.

2. Mutations
  - createPost(title: String!, content: String!): Post: Creates a new blog post.
  - updatePost(id: ID!, title: String, content: String): Post: Updates an existing blog post.
  - deletePost(id: ID!): Post: Deletes a blog post.

  ## API Endpoints

### Queries
- `companyByIdQuery`: Fetches a single company by its ID.
- `jobByIdQuery`: Fetches a single job by its ID.
- `jobsQuery` Fetches a list of jobs, optionally paginated.

### Mutations and Authentication

- `createJobMutation`: Creates a new job.
- `login`: Authenticates a user and returns a token.
- `logout`: Removes the authentication token from local storage.
- `getUser` Retrieves the current user from the stored token.
