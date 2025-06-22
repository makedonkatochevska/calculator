# React + TypeScript Calculator App 🧮

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🔗 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 🧰 Template Reference <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>

---

## Project Description 📜

The **Calculator App** is a responsive React + TypeScript project created with **Vite**. It supports keyboard input, proper validation for expressions, and safely evaluates mathematical calculations using the `mathjs` library instead of the risky `eval()`.

### Key Features:

- ✅ **TypeScript-based state handling** and strict typing.
- 🔣 **Operator validation** for expressions to avoid syntax errors.
- 🧠 **Custom logic for decimal points, parentheses, and operator chaining.**
- 🎹 **Keyboard support** for input using `keydown` events.
- ⚠️ **Error handling** for invalid math expressions.
- 🔒 **Safe expression evaluation** using `mathjs.evaluate()` instead of `eval`.
- 🧩 **Modular components** for `Display` and `Button`.
- 📱 **Responsive UI** using CSS modules.

---

## Technologies Used ⚙️

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
- ![mathjs](https://img.shields.io/badge/math.js-FF6F00?style=flat-square&logo=mathworks&logoColor=white)

---

## 🔗 Demo

Check out the live demo of this Calculator:

👉 [Try Live Demo](https://react-calculator-makedonkat.netlify.app/)

---

## Installation 🔨

To run this project locally, follow the steps below:

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/makedonkatochevska/calculator.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

---

## Usage 🚀

### Components Overview

#### 1. **Calculator**

- Main component managing the calculator state, input validation, and evaluation.
- Uses **Sass modules** for styling to keep styles scoped and maintainable.
- Handles keyboard input for a seamless user experience.

#### 2. **CalculatorDisplay**

- Displays the current input or result.
- Shows error state visually when input validation fails or evaluation errors occur.

#### 3. **Button**

- Reusable button component for calculator keys.
- Accepts text and click handler props.

### Key Functionalities

- **Input Validation:** Prevents invalid sequences like two operators in a row or multiple decimals in a number.
- **Keyboard Support:** Supports number keys, operators, Enter (to calculate), Backspace (to delete), and Escape (to reset).
- **Expression Evaluation:** Uses the `mathjs` library’s `evaluate` function to safely calculate expressions.
- **Error Handling:** Shows "Error" when invalid expressions are entered or evaluation fails.
- **Reset Functionality:** Clears the input and resets error/result states.

### Styling

- The app uses **Sass modules** for component-scoped styling, making it easier to maintain and extend the UI styles.

---

## 🧰 Template Reference

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## Credits 📝

This app was developed as part of my React + TypeScript learning journey where i focused on state management, keyboard interaction, component design, and safe math expression evaluation.

Special thanks to the mathjs team for making a safe alternative to eval().

---

## Contact 📞

📫 You can reach me at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or connect with me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
