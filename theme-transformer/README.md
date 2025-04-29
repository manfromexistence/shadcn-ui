# Theme Transformer

This project provides a utility to transform theme resets into a standardized format used in the presets file for a UI library.

## Project Structure

- **src/**
  - **index.ts**: Contains the script that transforms theme resets into the required format.
  - **presets.ts**: Exports an object `otherPresets` with various theme presets, including properties like `name`, `label`, `radius`, `fonts`, and color definitions for both light and dark themes.

- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.

- **tsconfig.json**: TypeScript configuration file that specifies compiler options and files to include in the compilation.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the transformation script using `npm run transform` (assuming a script is defined in `package.json`).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.