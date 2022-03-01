import clc from "cli-color";
import { ErrorPrinterParams } from "../../types/interfaces";

const errorTypes = ["worldNotGenerated"]

export abstract class ErrorPrinter{
    public static printError({errorType, file, fn, line}:ErrorPrinterParams){
        if(errorTypes.includes(errorType)){
                console.log(eval("ErrorPrinter."+ errorType)(file, fn, line));
        }
        else{
            console.log(clc.red("Unknown error type"));
        }
        
    }

    private static worldNotGenerated(file:string, fn:string, line:string):string{
        return clc.bgRed("ERROR : ") + clc.red(`World has to be generated first ---- Raised in [file ${file}] at function ${fn} [line ${line}] `)
    }
}