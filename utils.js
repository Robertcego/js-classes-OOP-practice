const generateGUID = () => {
    const guidPattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

    const replaceChar = (char) => {
    const randomHex = Math.floor(Math.random() * 16);
    const value = char === 'x' ? randomHex : (randomHex & 0x3) | 0x8; // Ensures 'y' is one of 8, 9, A, B

    return value.toString(16);
    
};

    return guidPattern.replace(/[xy]/g, replaceChar);
};

console.log(generateGUID()); // Example output: "3f6a1b2c-4d5e-6f7g-8h9i-jk0lmnopqrs"

export default generateGUID;