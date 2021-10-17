const text = 'Мама мыла Раму. Рама улыбался';

const enigma = {
    abcString: 'абвгдеёжзийклмнопрстуфхцчшщыъьэюя 1234567890,.!?-@&%/()',
    abcArray: null,
    addText(text) {
        if (this.abcArray == null) {
            this.setAbcArray()
        }
        for (let i = 0; i < text.length; i++) {
            this.addSymbol(text[i].toLowerCase())
        }
    },
    addSymbol(symbol) {
        const symbolObj = this.abcArray.find((element) => {
            return element.symbol === symbol
        })
    },
    setAbcArray() {
        this.abcArray = 
        this.abcString
        .split('')
        .map((symbol, index) => {
            return {
                symbol: symbol,
                index: {
                    index: index,
                    length: index < 10 ? 1 : 2
                }
            }
        });
    },
}

enigma.addText(text);
console.log(enigma.abcArray)