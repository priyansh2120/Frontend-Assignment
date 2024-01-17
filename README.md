

# Dynamic Form Renderer

## Overview

This project is a dynamic form renderer built using React. It allows you to create and preview forms with different field types and nesting levels. The form is rendered based on a provided UI schema, making it flexible and customizable.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone [repository-url]
   cd dynamic-form-renderer
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Application:**

   ```bash
   npm start
   ```

   This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- The form is generated based on a UI schema, which you can customize in the `src/uiSchema.js` file.
- Fields are sorted based on the `sort` property in the UI schema.
- For each field, you can specify various properties such as `label`, `description`, `required`, `immutable`, `pattern`, and more.
- The form supports different field types like `Input`, `Select`, and `Radio`.
- You can also create nested groups with the `Group` UI type and set conditions to show/hide fields based on certain criteria.

## Project Structure

The main components and files in the project are organized as follows:

- `src/components/Renderer.jsx`: React component for rendering the dynamic form.
- `src/components/Tab.jsx`: React component for rendering tabs.
- `src/uiSchema.js`: Configuration file containing the UI schema for the dynamic form.

Feel free to explore and modify the code according to your requirements.

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m 'Add my feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to reach out if you have any questions or need further assistance!

---