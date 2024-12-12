/** @type {import('tailwindcss').Config} */
export default async () => {
  const flowbitePlugin = (await import('flowbite/plugin')).default;

  return {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {},
    },
    plugins: [flowbitePlugin],
  };
};
