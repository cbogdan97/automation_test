
export class Generators{
    generateRandomText(charLength) {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let randomText = '';
        
        for (let i = 0; i < charLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomText += characters[randomIndex];
        }
        
        return randomText;
    }

    generatePassword(charLength) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let randomText = '';
        
        for (let i = 0; i < charLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomText += characters[randomIndex];
            
        }
        randomText += '123!'
        
        return randomText;
    }
}