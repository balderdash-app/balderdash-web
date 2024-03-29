import { config } from './config.js';

const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

/**
 * Generate a session ID consisting out of letters and integers
 * @param {number} characters - number of characters that must appear in the ID
 * @param {number} integers - number of integers that must appear in the ID
 * @returns {string} - session ID
 */
export function generateSessionId(
	characters = config.sessionId.numCharacters,
	integers = config.sessionId.numIntegers
) {
	return generateRandomString(characters) + generateRandomNumber(integers);
}

/**
 * Retrieve a random character from a string of characters
 * @param {string} array - an array of strings
 * @returns string - a random string from the array
 */
function generateRandomIndex(array = letters) {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
}

/**
 * Create a random string of characters
 * @param {number} len - length of string to generate
 * @param {string} root - root string
 * @returns {string} - a random string
 */
function generateRandomString(len, root = '') {
	if (len === 0) return root;
	const newRoot = root + generateRandomIndex();
	return generateRandomString(len - 1, newRoot);
}

/**
 * Generate a random number as a string
 * @param {number} len - length of number to generate
 * @returns {string} - a random number formatted as a string
 */
function generateRandomNumber(len) {
	const max = Math.pow(10, len) - 1;
	const num = Math.floor(Math.random() * max);
	return String(num).padStart(len, '0');
}
