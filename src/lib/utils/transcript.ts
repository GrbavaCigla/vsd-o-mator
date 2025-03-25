// taken from https://github.com/ivebe/CyrLatConverter/blob/master/src/cyrlatconverter.js
export const CYR2LATN = {
    а: "a",
    б: "b",
    ц: "c",
    д: "d",
    е: "e",
    ф: "f",
    г: "g",
    х: "h",
    и: "i",
    ј: "j",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    в: "v",
    з: "z",

    А: "A",
    Б: "B",
    Ц: "C",
    Д: "D",
    Е: "E",
    Ф: "F",
    Г: "G",
    Х: "H",
    И: "I",
    Ј: "J",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    В: "V",
    З: "Z",

    ч: "č",
    ћ: "ć",
    ж: "ž",
    ш: "š",
    љ: "lj",
    њ: "nj",
    ђ: "đ",
    џ: "dz",

    Ч: "Č",
    Ћ: "Ć",
    Ж: "Ž",
    Ш: "Š",
    Љ: "Lj",
    Њ: "Nj",
    Ђ: "Đ",
    Џ: "Dž",
};

export const get_latn_from_cyr = (val: string | null) => {
    return val === null
        ? null
        : val
              .split("")
              .map((val: string) =>
                  CYR2LATN[val] && CYR2LATN[val] !== "" ? CYR2LATN[val] : val
              )
              .join("");
};
