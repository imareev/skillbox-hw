//1
type Tconcat=(str0:string,str1:string)=>string;

//2
interface IMyHometask{
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//3
interface Array<T> {
  [N: number]: T;
  
  reduce<T>(fn: (accumulator: T, value: number) => T, initialValue: T): T;

}

// 4. Работа с MappedTypes#
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}
type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
