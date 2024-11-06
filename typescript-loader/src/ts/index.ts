import * as compiler from 'typescript-compiler';

export default function loader(src: string){
    const generatorJS = new compiler.GeneratorJS();
    const ast = compiler.parseSourceCode(src);
    const js = generatorJS.generate(ast);
    return js;
}