function getLuckyTicket(obj) {
    let min = obj.min;
    let max = obj.max;

    if (min > max) return { status: "failed", reason: "Min не может быть больше Max" };
    if (typeof min != "number" || typeof max != "number" || !Number.isInteger(min) || !Number.isInteger(max)) return { status: "failed", reason: "Введите целые числа" };
    min = Math.abs(Number(min))
    max = Math.abs(Number(max))
    const minLength = Math.ceil(Math.log10(min + 1));
    const maxLength = Math.ceil(Math.log10(max + 1));
    if (minLength > 6 || maxLength > 6) return { status: "failed", reason: "Числе не могут иметь больше 6 цифр" };




}

console.log(getLuckyTicket({ min: 144, max: 12354 }));
