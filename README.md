# Workflow Order

1. Write down the concept as detailed as possible (including navigation)

2. Generate a long description and expansion of the application

   **ChatGPT AI Prompt:**
   This is the idea/concept of my application. Please generate me a very long summary and explanation of the application and name every detail. Also extend the concept with ideas that make sense.

3. Generate extended concept and a tree structure for your project

   **ChatGPT AI Prompt:**
   Generate a sitemap and a numbered list with all pages of the application. Every page has to be described very precisely. Also create a Tree structure of all these pages for the project in a next.js/app structure.
   Also Explain the navigation of the application and include it as components in the tree structure.

4. Clone this repository https://github.com/NoahWiedemer/project-template and run
   ```bash
   npm install / yarn
   ```

5. Update the `prompt-design.md` and `prompt-concept.md`

   **prompt-concept.md:**
   The content of this file is the result of Prompt 1 and Prompt 2

   **prompt-instructions.md:**
   Design:
   - Make it visually appealing
   - Elements should have nice rounded borders
   - Make the design slick and modern
   - The user should have feedback when interacting with elements
   - The design should be responsive
   - Write a list of code
   - Make it a truly amazing user experience

   Code:
   - Use tailwind for the design
   - Use react-icons as icon library
   - Use framer motion to animate the components

6. Give the sitemap to cursor composer & paste in the treestructure and let it create it

   **Composer Prompt:**
   Create the files and folders of this tree structure and make sure that if a Header, Footer or Sidebar exist, implement them into the layout.tsx

7. @Mention the two prompt files and enter the chat prompt, now just name the number/title of the first screen you want to build

   **Cursor Chat Prompt (Not Composer):**
   I want to build the Application <YOUR APPLICATION>. Now build me the page:
   1. Landingpage

   Here is some information about the application:
   @prompt-concept.md

   Always make sure to take care of these instructions:
   @prompt-instructions.md

8. Generate the page and the navigation until you are happy with the design and alignment

9. Replace the number/title of the next screen you want to build and update the prompt and add:

   **Add to your prompt:**
   Make the page consistent to the style and alignment of the @page page.

10. Now generate every page

11. To Connect to the backend do the following steps:
    a. Create a new Supabase project and a first table (Set permissions to public & authenticated)
    b. Clone the .env.example and add your supabase credentials
    c. Add new endpoints to the api folder
    d. Use the api endpoints in your code