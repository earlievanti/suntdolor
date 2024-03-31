// Assuming Translator is a class that has been imported or defined above
const TRANSLATOR = new Translator();

try {
  // Assuming 'translate' is an async function
  const translatedText = await TRANSLATOR.translate('Hello, world!', 'ES');
  console.log(translatedText); // Should log: "Hola, mundo!"
} catch (error) {
  console.error('Translation failed:', error);
}
